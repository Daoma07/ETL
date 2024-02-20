const modeloMotivoOri = require('../models/origen/modeloMotivo');
const modeloMotivoDes = require('../models/destino/modeloMotivo');
const { conexionDestinoDB } = require('../db/conexion');

async function extraerDatos() {
    try {
        const motivos = await modeloMotivoOri.Motivo.findAll();
        if (motivos) {
            transformarDatos(motivos);
        } else {
            console.log("No se encontraron motivos en la base de datos de origen.");
            return [];
        }
    } catch (error) {
        console.error("Error al extraer datos:", error);
        throw error;
    }
}

function transformarDatos(motivos) {
    if (motivos) {
        cargarDatos(motivos.map(motivo => ({
            id_motivo: motivo.id_motivo,
            descripcion_motivo: motivo.descripcion_motivo
        }))
        );
    }
}

async function cargarDatos(motivosTransformados) {
    try {
        await conexionDestinoDB.query('SET FOREIGN_KEY_CHECKS = 0');
        await modeloMotivoDes.Motivo.sync({ force: true });
        await modeloMotivoDes.Motivo.bulkCreate(motivosTransformados);
    } catch (error) {
        console.error('Error al conectar con la base de datos de destino:', error);
    }
}

function iniciarMotivoETL() {
    extraerDatos();
}

module.exports = {
    iniciarMotivoETL
};
