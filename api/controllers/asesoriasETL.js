const modeloAsesoriasOri = require('../models/origen/modeloAsesoria');
const modeloAsesoriasDes = require('../models/destino/modeloAsesoria');
const modeloAsesorado = require('../models/origen/modeloAsesorado');
const modeloCodigoPostal = require('../models/direccion/codigosPostales.models');
const modeloEstado = require('../models/direccion/estados.models');
const modeloMunicipio = require('../models/direccion/municipios.models');
const modeloDomicilion = require('../models/origen/modeloDomicilio');
const modeloColonia = require('../models/direccion/colonias.models');
const modeloCiudad = require('../models/direccion/ciudades.models');
const modeloEmpleado = require('../models/origen/modeloEmpleado');
const modeloPersonaOri = require('../models/origen/modeloPersona');
const modeloDistritoJudicial = require('../models/origen/modeloDistritoJudicial');
const { conexionDestinoDB } = require('../db/conexion');

async function extraerDatos() {
    try {
        const asesorias = await modeloAsesoriasOri.Asesoria.findAll();
        if (asesorias) {
            transformarDatos(asesorias);
        } else {
            console.log("No se encontraron asesorias en la base de datos de origen.");
            return [];
        }
    } catch (error) {
        console.error("Error al extraer datos:", error);
        throw error;
    }
}

async function transformarDatos(asesorias) {
    if (asesorias) {
        var newAsesores = [];
        for (let i = 0; i < asesorias.length; i++) {
            const asesoria = asesorias[i];
            var direccion = await obtenerDireccion(asesoria.id_asesorado);
            var asesorado = await modeloAsesorado.Asesorado.findByPk(asesoria.id_asesorado);
            var empleado = await modeloEmpleado.Empleado.findByPk(asesoria.id_empleado);
            var distritoJudicial = await modeloDistritoJudicial.DistritoJudicial.findByPk(empleado.id_distrito_judicial);
            let asesorado_map = {
                id_asesoria: asesoria.id_asesoria,
                estatus_requisitos: asesoria.estatus_requisitos,
                fecha_registro: asesoria.fecha_registro,
                id_empleado: asesoria.id_empleado,
                id_turno: asesoria.id_turno,
                id_asesorado: asesoria.id_asesorado,
                id_tipo_juicio: asesoria.id_tipo_juicio,
                estado: direccion.estado,
                municipio: direccion.municipio,
                id_motivo: asesorado.id_motivo,
                id_distrito_judicial: empleado.id_distrito_judicial,
                id_zona: distritoJudicial.id_zona,
                id_municipio_distrito: distritoJudicial.id_municipio_distrito

            }
            newAsesores.push(asesorado_map)
        }

        await cargarDatos(newAsesores);
    }
}





async function obtenerDireccion(id_asesoria) {
    const persona = await modeloPersonaOri.Persona.findByPk(id_asesoria);
    const domicilio = await modeloDomicilion.Domicilio.findByPk(persona.id_domicilio);
    const colonia = await modeloColonia.Colonia.findByPk(domicilio.id_colonia);
    const codigo_postal = await modeloCodigoPostal.CodigoPostal.findByPk(colonia.id_codigo_postal);
    const ciudad = await modeloCiudad.Ciudad.findByPk(colonia.id_ciudad);
    const municipio = await modeloMunicipio.Municipio.findByPk(codigo_postal.id_municipio);
    const estado = await modeloEstado.Estado.findByPk(municipio.id_estado);
    return direccion = {
        municipio: municipio.nombre_municipio,
        estado: estado.nombre_estado,
    };
}



async function cargarDatos(asesoresTransformados) {
    try {

        await conexionDestinoDB.query('SET FOREIGN_KEY_CHECKS = 0');
        await modeloAsesoriasDes.Asesoria.sync({ force: true });
        await modeloAsesoriasDes.Asesoria.bulkCreate(asesoresTransformados);
    } catch (error) {
        console.error('Error al conectar con la base de datos de destino:', error);
    }
}

function iniciarAsesoriaETL() {
    extraerDatos();
}

module.exports = {
    iniciarAsesoriaETL
};