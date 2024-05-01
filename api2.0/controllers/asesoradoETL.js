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
const { conexionDestinoDB, Sequelize } = require('../db/conexion');

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
                edad: edad,
                id_origen: asesorado.id_asesorado
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



async function cargarDatos(asesoradosTransformados) {
    try {
        // Obtener todos los registros existentes en la base de datos de destino
        const asesoradosDestino = await modeloAsesoradoDes.Asesorado.findAll();

        // Identificar los IDs de los registros en la base de datos de destino
        const idsDestino = asesoradosDestino.map(asesorado => asesorado.id_origen);

        // Crear una transacción para agrupar las operaciones de actualización y eliminación
        await conexionDestinoDB.transaction(async (t) => {
            // Actualizar o insertar registros existentes en la base de datos de destino
            for (const asesoradoTransformado of asesoradosTransformados) {
                if (idsDestino.includes(asesoradoTransformado.id_asesorado)) {
                    // Si el registro existe, actualizarlo en lugar de insertarlo nuevamente
                    await modeloAsesoradoDes.Asesorado.update(asesoradoTransformado, {
                        where: { id_origen: asesoradoTransformado.id_asesorado },
                        transaction: t
                    });
                } else {
                    // Si el registro no existe, insertarlo en la base de datos de destino
                    await modeloAsesoradoDes.Asesorado.create(asesoradoTransformado, { transaction: t });
                }
            }
            // Eliminar registros en la base de datos de destino que no existen en los datos extraídos
            await modeloAsesoradoDes.Asesorado.destroy({
                where: {
                    id_origen: { [Sequelize.Op.notIn]: asesoradosTransformados.map(asesorado => asesorado.id_asesorado) }
                },
                transaction: t
            });
        });

    } catch (error) {
        console.error('Error al cargar datos:', error);
    }
}

function iniciarAsesoradoETL() {
    extraerDatos();
}

module.exports = {
    iniciarAsesoradoETL
};