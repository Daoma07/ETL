const modeloTurnoOri = require('../models/origen/modeloTurno');
const modeloTurnoDes = require('../models/destino/modeloTurno');
const { conexionDestinoDB } = require('../db/conexion');

async function extraerDatos() {
    try {
        const turnos = await modeloTurnoOri.Turno.findAll();
        if (turnos) {
            transformarDatos(turnos);
        } else {
            console.log("No se encontraron turnos en la base de datos de origen.");
            return [];
        }
    } catch (error) {
        console.error("Error al extraer datos:", error);
        throw error; // o manejar este error de acuerdo a tus necesidade
    }
}

function transformarDatos(turnos) {
    if (turnos) {
        cargarDatos(turnos.map(turno => ({
            id_turno: turno.id_turno,
            fecha_turno: turno.fecha_turno,
            hora_turno: turno.hora_turno
        }))
        );
    }
}

async function cargarDatos(turnosTransformados) {
    try {

        await conexionDestinoDB.query('SET FOREIGN_KEY_CHECKS = 0');
        await modeloTurnoDes.Turno.sync({ force: true });
        await modeloTurnoDes.Turno.bulkCreate(turnosTransformados);
        console.log('Datos cargados correctamente en la base de datos de destino.');
    } catch (error) {
        console.error('Error al conectar con la base de datos de destino:', error);
    }
}

function iniciarTurnoETL() {
    extraerDatos();
}

module.exports = {
    iniciarTurnoETL
};