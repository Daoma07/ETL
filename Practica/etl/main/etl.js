const { conexionOrigenDB, conexionDestinoDB } = require('../utilidades/conexion');
const { PersonaOrigen } = require('../modelos/personaOrigen');
const {PersonaDestino} = require('../modelos/personaDestino')

async function extraerDatos() {
    try {
        const personas = await PersonaOrigen.findAll();
        if (personas) {
            return transformarDatos(personas);
        } else {
            console.log("No se encontraron personas en la base de datos de origen.");
            return []; 
        }
    } catch (error) {
        console.error("Error al extraer datos:", error);
        throw error; // o manejar este error de acuerdo a tus necesidade
    }
}

function transformarDatos(personas) {
    if (personas) {
        return personas.map(persona => ({
            nombre: persona.nombre,
            telefono: persona.telefono
        }));
    }
}

async function cargarDatos(personasTransformadas) {
    try {
        await conexionDestinoDB.authenticate();
        console.log('Conexión establecida correctamente con la base de datos de destino.');

        await PersonaDestino.sync({ force: true });

        await PersonaDestino.bulkCreate(personasTransformadas);
        console.log('Datos cargados correctamente en la base de datos de destino.');
    } catch (error) {
        console.error('Error al conectar con la base de datos de destino:', error);
    }
}

module.exports = {
    extraerDatos,
    transformarDatos,
    cargarDatos
};
