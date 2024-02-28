const modeloDistritoJudicialOri = require('../models/origen/modeloDistritoJudicial');
const modeloDistritoJudicialDes = require('../models/destino/modeloDistritoJudicial');
const { conexionDestinoDB } = require('../db/conexion');

async function extraerDatos() {
    try {
        const distritosJudiciales = await modeloDistritoJudicialOri.DistritoJudicial.findAll();
        if (distritosJudiciales) {
            transformarDatos(distritosJudiciales);
        } else {
            console.log("No se encontraron distritosJudiciales en la base de datos de origen.");
            return [];
        }
    } catch (error) {
        console.error("Error al extraer datos:", error);
        throw error;
    }
}

function transformarDatos(distritosJudiciales) {
    if (distritosJudiciales) {
        cargarDatos(distritosJudiciales.map(distritoJudicial => ({
            id_distrito_judicial: distritoJudicial.id_distrito_judicial,
            nombre_distrito_judicial: distritoJudicial.nombre_distrito_judicial
        }))
        );
    }
}

async function cargarDatos(distritoJudicialTransformados) {
    try {

        await conexionDestinoDB.query('SET FOREIGN_KEY_CHECKS = 0');
        await modeloDistritoJudicialDes.DistritoJudicial.sync({ force: true });
        await modeloDistritoJudicialDes.DistritoJudicial.bulkCreate(distritoJudicialTransformados);

    } catch (error) {
        console.error('Error al conectar con la base de datos de destino:', error);
    }
}

function inciarDistritoJudicialETL() {
    extraerDatos();
}

module.exports = {
    inciarDistritoJudicialETL
};
