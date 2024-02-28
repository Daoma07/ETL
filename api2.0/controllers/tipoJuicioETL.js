const modeloTipoJuicioOri = require('../models/origen/modeloTipoJuicio');
const modeloTipoJuicioDes = require('../models/destino/modeloTipoJuicio');
const { conexionDestinoDB } = require('../db/conexion');

async function extraerDatos() {
    try {
        const tipoJuicios = await modeloTipoJuicioOri.TipoJuicio.findAll();
        if (tipoJuicios) {
            transformarDatos(tipoJuicios);
        } else {
            console.log("No se encontraron tipoJuicios en la base de datos de origen.");
            return [];
        }
    } catch (error) {
        console.error("Error al extraer datos:", error);
        throw error; 
    }
}

function transformarDatos(tipoJuicios) {
    if (tipoJuicios) {
        cargarDatos(tipoJuicios.map(tipoJuicio => ({
            id_tipo: tipoJuicio.id_tipo,
            tipo_juicio: tipoJuicio.tipo_juicio
        }))
        );
    }
}

async function cargarDatos(tipoJuiciosTransformados) {
    try {

        await conexionDestinoDB.query('SET FOREIGN_KEY_CHECKS = 0');
        await modeloTipoJuicioDes.TipoJuicio.sync({ force: true });
        await modeloTipoJuicioDes.TipoJuicio.bulkCreate(tipoJuiciosTransformados);
    } catch (error) {
        console.error('Error al conectar con la base de datos de destino:', error);
    }
}

function iniciarTipoJuicioETL() {
    extraerDatos();
}

module.exports = {
    iniciarTipoJuicioETL
};