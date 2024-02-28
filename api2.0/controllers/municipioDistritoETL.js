const modeloMunicipioDistroOri = require('../models/origen/modeloMunicipioDistro');
const modeloMunicipioDistroDes = require('../models/destino/modeloMunicipioDistro');
const { conexionDestinoDB } = require('../db/conexion');

async function extraerDatos() {
    try {
        const municipioDistritos = await modeloMunicipioDistroOri.MunicipioDistro.findAll();
        if (municipioDistritos) {
            transformarDatos(municipioDistritos);
        } else {
            console.log("No se encontraron municipioDistritos en la base de datos de origen.");
            return [];
        }
    } catch (error) {
        console.error("Error al extraer datos:", error);
        throw error;
    }
}

function transformarDatos(municipioDistritos) {
    if (municipioDistritos) {
        cargarDatos(municipioDistritos.map(municipioDistrito => ({
            id_municipio_distrito: municipioDistrito.id_municipio_distrito,
            nombre_municipio: municipioDistrito.nombre_municipio
        }))
        );
    }
}

async function cargarDatos(municipioDistrosTransformados) {
    try {
        await conexionDestinoDB.query('SET FOREIGN_KEY_CHECKS = 0');
        await modeloMunicipioDistroDes.MunicipioDistro.sync({ force: true });
        await modeloMunicipioDistroDes.MunicipioDistro.bulkCreate(municipioDistrosTransformados);
    } catch (error) {
        console.error('Error al conectar con la base de datos de destino:', error);
    }
}

function iniciarMunicipioDistritoETL() {
    extraerDatos();
}

module.exports = {
    iniciarMunicipioDistritoETL
};
