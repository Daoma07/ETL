const modeloTurnoOri = require('../models/origen/modeloTurno');
const modeloTurnoDes = require('../models/destino/modeloTurno');
const { conexionDestinoDB, Sequelize } = require('../db/conexion');

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
        // Obtener todos los registros existentes en la base de datos de turno
        const turnosDestino = await modeloTurnoDes.Turno.findAll();

        // Identificar los IDs de los registros en la base de datos de turno
        const idsDestino = turnosDestino.map(turno => turno.id_turno);

        // Crear una transacción para agrupar las operaciones de actualización y eliminación
        await conexionDestinoDB.transaction(async (t) => {
            // Actualizar o insertar registros existentes en la base de datos de turno
            for (const turnoTransformado of turnosTransformados) {
                if (idsDestino.includes(turnoTransformado.id_turno)) {
                    // Si el registro existe, actualizarlo en lugar de insertarlo nuevamente
                    await modeloTurnoDes.Turno.update(turnoTransformado, {
                        where: { id_turno: turnoTransformado.id_turno },
                        transaction: t
                    });
                } else {
                    // Si el registro no existe, insertarlo en la base de datos de turno
                    await modeloTurnoDes.Turno.create(turnoTransformado, { transaction: t });
                }
            }
            // Eliminar registros en la base de datos de turno que no existen en los datos extraídos
            await modeloTurnoDes.Turno.destroy({
                where: {
                    id_turno: { [Sequelize.Op.notIn]: turnosTransformados.map(turno => turno.id_turno) }
                },
                transaction: t
            });
        });

    } catch (error) {
        console.error('Error al cargar datos:', error);
    }
}

function iniciarTurnoETL() {
    extraerDatos();
}

module.exports = {
    iniciarTurnoETL
};