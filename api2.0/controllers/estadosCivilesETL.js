const modeloEstadoCivilOri = require('../models/origen/modeloEstadoCivil');
const modeloEstadoCivilDes = require('../models/destino/modeloEstadoCivil');
const { conexionDestinoDB } = require('../db/conexion');

async function extraerDatos() {
    try {
        const estadoCiviles = await modeloEstadoCivilOri.EstadoCivil.findAll();
        if (estadoCiviles) {
            transformarDatos(estadoCiviles);
        } else {
            console.log("No se encontraron estadoCiviles en la base de datos de origen.");
            return [];
        }
    } catch (error) {
        console.error("Error al extraer datos:", error);
        throw error;
    }
}

function transformarDatos(estadoCiviles) {
    if (estadoCiviles) {
        cargarDatos(estadoCiviles.map(estadoCivil => ({
            id_estado_civil: estadoCivil.id_estado_civil,
            estado_civil: estadoCivil.estado_civil
        }))
        );
    }
}

async function cargarDatos(estadiCivilesTransformados) {
    try {

        await conexionDestinoDB.query('SET FOREIGN_KEY_CHECKS = 0');
        await modeloEstadoCivilDes.EstadoCivil.sync({ force: true });
        await modeloEstadoCivilDes.EstadoCivil.bulkCreate(estadiCivilesTransformados);
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