const modeloAsesoradoOri = require('../models/origen/modeloAsesorado');
const modeloAsesoradoDes = require('../models/destino/modeloAsesorado');
const modeloCodigoPostal = require('../models/direccion/codigosPostales.models');
const modeloEstado = require('../models/direccion/estados.models');
const modeloMunicipio = require('../models/direccion/municipios.models');
const modeloDomicilion = require('../models/origen/modeloDomicilio');
const modeloColonia = require('../models/direccion/colonias.models');
const modeloCiudad = require('../models/direccion/ciudades.models');
const modeloPersonaOri = require('../models/origen/modeloPersona');
const modeloGenero = require('../models/origen/modeloGenero');
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

async function transformarDatos(asesorados) {
    if (asesorados) {
        var newAsesores = [];
        for (let i = 0; i < asesorados.length; i++) {
            const asesorado = asesorados[i];
            var direccion = await obtenerDireccion(asesorado.id_asesorado);
            var genero = await obtenerGenero(asesorado.id_asesorado);
            var edad = await obtenerEdad(asesorado.id_asesorado);
            let asesorado_map = {
                id_asesorado: asesorado.id_asesorado,
                id_estado_civil: asesorado.id_estado_civil,
                numero_hijos: asesorado.numero_hijos,
                ingreso_mensual: asesorado.ingreso_mensual,
                id_genero: genero,
                estado: direccion.estado,
                municipio: direccion.municipio,
                ciudad: direccion.ciudad,
                codigo_postal: direccion.codigo_postal,
                edad: edad

            }
            newAsesores.push(asesorado_map)
        }

        await cargarDatos(newAsesores);
    }
}


async function obtenerEdad(id_asesorado) {
    //const persona = await modeloPersonaOri.Persona.findById(id_asesorado);
    const persona = await modeloPersonaOri.Persona.findByPk(id_asesorado);
    return persona.edad;

}

async function obtenerGenero(id_asesorado) {
    //const persona = await modeloPersonaOri.Persona.findById(id_asesorado);
    const persona = await modeloPersonaOri.Persona.findByPk(id_asesorado);
    return persona.id_genero;

}

async function obtenerDireccion(id_asesorado) {
    const persona = await modeloPersonaOri.Persona.findByPk(id_asesorado);
    const domicilio = await modeloDomicilion.Domicilio.findByPk(persona.id_domicilio);
    const colonia = await modeloColonia.Colonia.findByPk(domicilio.id_colonia);
    const codigo_postal = await modeloCodigoPostal.CodigoPostal.findByPk(colonia.id_codigo_postal);
    const ciudad = await modeloCiudad.Ciudad.findByPk(colonia.id_ciudad);
    const municipio = await modeloMunicipio.Municipio.findByPk(codigo_postal.id_municipio);
    const estado = await modeloEstado.Estado.findByPk(municipio.id_estado);
    return direccion = {
        codigo_postal: codigo_postal.codigo_postal,
        municipio: municipio.nombre_municipio,
        estado: estado.nombre_estado,
        ciudad: ciudad.nombre_ciudad
    };
}



async function cargarDatos(asesoresTransformados) {
    try {

        await conexionDestinoDB.query('SET FOREIGN_KEY_CHECKS = 0');
        await modeloAsesoradoDes.Asesorado.sync({ force: true });
        await modeloAsesoradoDes.Asesorado.bulkCreate(asesoresTransformados);
    } catch (error) {
        console.error('Error al conectar con la base de datos de destino:', error);
    }
}

function iniciarAsesoradoETL() {
    extraerDatos();
}

module.exports = {
    iniciarAsesoradoETL
};