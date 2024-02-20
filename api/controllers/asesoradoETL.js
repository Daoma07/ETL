const modeloAsesoradoOri = require('../models/origen/modeloAsesorado');
const modeloAsesoradoDes = require('../models/destino/modeloAsesorado');
const modeloCodigoPostal = require('../models/direccion/codigosPostales.models');
const modeloEstado = require('../models/direccion/estados.models');
const modeloMunicipio = require('../models/direccion/municipio.models');
const modeloDomicilion = require('../models/origen/modeloDomicilio');
const modeloColonia = require('../models/direccion/colonias.models');
const modeloCiudad = require('../models/direccion/ciudades.models');
const modeloPersona = require('../models/origen/modeloPersona');
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

function transformarDatos(asesorados) {
    if (asesorados) {
        var newAsesores=[]
        asesorados.forEach(asesorado => {
            var direccion = obtenerDireccion(asesorado.id_asesorado);
            let asesorado_map= {
                id_asesorado: asesorado.id_asesorado,
                id_estado_civil: asesorado.id_estado_civil,
                numero_hijos: asesorado.numero_hijos,
                ingreso_mensual: asesorado.ingreso_mensual,
                id_genero: asesorado.id_genero,
                estado: asesorado.estado,
                municipio: asesorado.municipio,
                ciudad: asesorado.ciudad,
                codigo_postal: asesorado.codigo_postal,
                edad: obtenerEdad (asesorado.id_asesorado)
    
            }
            newAsesores.push(asesorado_map)
        });
        
        cargarDatos(asesorados.map(asesorado => (
            
            {
            id_asesorado: asesorado.id_asesorado,
            id_estado_civil: asesorado.id_estado_civil,
            numero_hijos: asesorado.numero_hijos,
            ingreso_mensual: asesorado.ingreso_mensual,
            id_genero: asesorado.id_genero,
            estado: asesorado.estado,
            municipio: asesorado.municipio,
            ciudad: asesorado.ciudad,
            codigo_postal: asesorado.codigo_postal,
            edad: obtenerEdad (asesorado.id_asesorado)

        }))
        );
    }
}

 async function  obtenerEdad(id_asesorado) {
    const persona = await modeloPersona.Persona.findById(id_asesorado);
    return persona.edad;
    
}

async function  obtenerDireccion(id_domicilio) {
    const domicilio = await modeloDomicilion.Domicilio.findById(id_domicilio);
    const colonia = await modeloColonia.Colonia.findById(domicilio.id_colonia);
    const codigo_postal =await modeloCodigoPostal.CodigoPostal.findById(colonia.id_codigo_postal);
    const ciudad =await modeloCiudad.Ciudad.findById(colonia.id_ciudad);
    const municipio =await modeloMunicipio.Ciudad.findById(colonia.id_ciudad);
    return direccion = {
        codigo_postal: ,
        municipo: ,
        estado: ,
        ciudad: 
      };
   
    
    return persona.edad;
    
}



async function cargarDatos(estadiCivilesTransformados) {
    try {

        await conexionDestinoDB.query('SET FOREIGN_KEY_CHECKS = 0');
        await modeloAsesoradoDes.EstadoCivil.sync({ force: true });
        await modeloAsesoradoDes.EstadoCivil.bulkCreate(estadiCivilesTransformados);
    } catch (error) {
        console.error('Error al conectar con la base de datos de destino:', error);
    }
}

function iniciarEstadoCivilETL() {
    extraerDatos();
}

module.exports = {
    iniciarEstadoCivilETL
};