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
const { conexionDestinoDB, Sequelize } = require('../db/conexion');

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
                id_origen: asesoria.id_asesoria,
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


async function cargarDatos(asesoriasTransformadas) {
    try {
        // Obtener todos los registros existentes en la base de datos de destino
        const asesoriasDestino = await modeloAsesoriasDes.Asesoria.findAll();

        // Identificar los IDs de los registros en la base de datos de destino
        const idsDestino = asesoriasDestino.map(asesoria => asesoria.id_asesoria);

        // Crear una transacción para agrupar las operaciones de actualización y eliminación
        await conexionDestinoDB.transaction(async (t) => {
            // Actualizar o insertar registros existentes en la base de datos de destino
            for (const asesoriaTransformada of asesoriasTransformadas) {
                if (idsDestino.includes(asesoriaTransformada.id_asesoria)) {
                    // Si el registro existe, actualizarlo en lugar de insertarlo nuevamente
                    await modeloAsesoriasDes.Asesoria.update(asesoriaTransformada, {
                        where: { id_origen: asesoriaTransformada.id_asesoria },
                        transaction: t
                    });
                } else {
                    // Si el registro no existe, insertarlo en la base de datos de destino
                    await modeloAsesoriasDes.Asesoria.create(asesoriaTransformada, { transaction: t });
                }
            }
            // Eliminar registros en la base de datos de destino que no existen en los datos extraídos
            await modeloAsesoriasDes.Asesoria.destroy({

                where: {
                    [Sequelize.Op.and]:[
                        {id_origen: {[Sequelize.Op.notIn]: asesoriasTransformadas.map(asesoria => asesoria.id_asesoria)}},
                        {id_origen: {[Sequelize.Op.not]: null}}
                    ]
                    
                },
                transaction: t
            });
        });

    } catch (error) {
        console.error('Error al cargar datos:', error);
    }
}

function iniciarAsesoriaETL() {
    extraerDatos();
}

module.exports = {
    iniciarAsesoriaETL
};