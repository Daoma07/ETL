const modeloAsesorOri = require('../models/origen/modeloAsesor');
const modeloAsesorDes = require('../models/destino/modeloAsesor');

async function extraerDatos() {
    try {
        const asesores = await modeloAsesorOri.Asesor.findAll();
        if (asesores) {
            transformarDatos(asesores);
        } else {
            console.log("No se encontraron asesores en la base de datos de origen.");
            return [];
        }
    } catch (error) {
        console.error("Error al extraer datos:", error);
        throw error; 
    }
}

function transformarDatos(asesores) {
    if (asesores) {
        cargarDatos(asesores.map(asesor => ({
            id_asesor: asesor.id_asesor,
            nombre_asesor: asesor.nombre_asesor
        }))
        );
    }
}

async function cargarDatos(asesoresTransformadas) {
    try {

        await modeloAsesorDes.Asesor.sync({ force: true });
        await modeloAsesorDes.Asesor.bulkCreate(asesoresTransformadas);
    } catch (error) {
        console.error('Error al conectar con la base de datos de destino:', error);
    }
}

function iniciarAsesorETL() {
    extraerDatos();
}

module.exports = {
    iniciarAsesorETL
};
