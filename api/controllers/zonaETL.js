const modeloZonaOri = require('../models/origen/modeloZona');
const moeloZonaDes = require('../models/destino/modeloZona');
const { conexionDestinoDB } = require('../db/conexion');

async function extraerDatos() {
    try {
        const zonas = await modeloZonaOri.Zona.findAll();
        if (zonas) {
            transformarDatos(zonas);
        } else {
            console.log("No se encontraron zonas en la base de datos de origen.");
            return [];
        }
    } catch (error) {
        console.error("Error al extraer datos:", error);
        throw error; // o manejar este error de acuerdo a tus necesidade
    }
}

function transformarDatos(zonas) {
    if (zonas) {
        cargarDatos(zonas.map(zona => ({
            id_zona: zona.id_zona,
            nombre_zona: zona.nombre_zona,
        }))
        );
    }
}

async function cargarDatos(zonasTransformadas) {
    try {
        await conexionDestinoDB.query('SET FOREIGN_KEY_CHECKS = 0');
        await moeloZonaDes.Zona.sync({ force: true });
        await moeloZonaDes.Zona.bulkCreate(zonasTransformadas);
        console.log('Datos cargados correctamente en la base de datos de destino.');
    } catch (error) {
        console.error('Error al conectar con la base de datos de destino:', error);
    }
}

function iniciarZonaETL() {
    extraerDatos();
}

module.exports = {
    iniciarZonaETL
};