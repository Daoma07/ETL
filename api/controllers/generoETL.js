const modeloGeneroOri = require('../models/origen/modeloGenero');
const modeloGeneroDes = require('../models/destino/modeloGenero');
const { conexionDestinoDB } = require('../db/conexion');

async function extraerDatos() {
    try {
        const generos = await modeloGeneroOri.Genero.findAll();
        if (generos) {
            transformarDatos(generos);
        } else {
            console.log("No se encontraron generos en la base de datos de origen.");
            return [];
        }
    } catch (error) {
        console.error("Error al extraer datos:", error);
        throw error;
    }
}

function transformarDatos(generos) {
    if (generos) {
        cargarDatos(generos.map(genero => ({
            id_genero: genero.id_genero,
            descripcion_genero: genero.descripcion_genero
        }))
        );
    }
}

async function cargarDatos(generosTransformados) {
    try {
        await conexionDestinoDB.query('SET FOREIGN_KEY_CHECKS = 0');
        await modeloGeneroDes.Genero.sync({ force: true });
        await modeloGeneroDes.Genero.bulkCreate(generosTransformados);
    } catch (error) {
        console.error('Error al conectar con la base de datos de destino:', error);
    }
}

function iniciarGeneroETL() {
    extraerDatos();
}

module.exports = {
    iniciarGeneroETL
};
