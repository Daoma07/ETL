const modeloAsesoradoOri = require('../models/origen/modeloAsesorado');
const modeloAsesoradoDes = require('../models/destino/modeloAsesorado');
const { conexionDestinoDB } = require('../db/conexion');

async function extraerDatos() {
    try {
        const asesorados = await modeloAsesoradoOri.Asesorado.findAll();
        if (asesorados) {
            transformarDatos(asesorados);
        } else {
            console.log("No se encontraron asesorados en la base de datos de origen.");
            return [];
        }
    } catch (error) {
        console.error("Error al extraer datos:", error);
        throw error;
    }
}

function transformarDatos(asesorados) {
    if (asesorados) {
        cargarDatos(asesorados.map(asesorado => ({
            id_asesorado: asesorado.id_asesorado,
            id_estado_civil: asesorado.id_estado_civil
        }))
        );
    }
}




async function cargarDatos(estadiCivilesTransformados) {
    try {

        await conexionDestinoDB.query('SET FOREIGN_KEY_CHECKS = 0');
        await modeloAsesoradoDes.EstadoCivil.sync({ force: true });
        await modeloAsesoradoDes.EstadoCivil.bulkCreate(estadiCivilesTransformados);
    } catch (error) {
        console.error('Error al conectar con la base de datos de destino:', error);
    }
}

function iniciarEstadoCivilETL() {
    extraerDatos();
}

module.exports = {
    iniciarEstadoCivilETL
};