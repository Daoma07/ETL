const modeloDefensorOri = require('../models/origen/modeloDefensor');
const modeloDefensorDes = require('../models/destino/modeloDefensor');

async function extraerDatos() {
    try {
        const defensores = await modeloDefensorOri.Defensor.findAll();
        if (defensores) {
            transformarDatos(defensores);
        } else {
            console.log("No se encontraron defensores en la base de datos de origen.");
            return [];
        }
    } catch (error) {
        console.error("Error al extraer datos:", error);
        throw error; // o manejar este error de acuerdo a tus necesidade
    }
}

function transformarDatos(defensores) {
    if (defensores) {
        cargarDatos(defensores.map(defensor => ({
            id_defensor: defensor.id_defensor,
            nombre_defensor: defensor.nombre_defensor
        }))
        );
    }
}

async function cargarDatos(defensoresTransformados) {
    try {

        await modeloDefensorDes.Defensor.sync({ force: true });

        await modeloDefensorDes.Defensor.bulkCreate(defensoresTransformados);
        console.log('Datos cargados correctamente en la base de datos de destino.');
    } catch (error) {
        console.error('Error al conectar con la base de datos de destino:', error);
    }
}

function iniciarDefensorETL() {
    extraerDatos();
}

module.exports = {
    iniciarDefensorETL
};
