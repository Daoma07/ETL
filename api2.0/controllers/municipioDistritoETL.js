const modeloMunicipioDistroOri = require('../models/origen/modeloMunicipioDistro');
const modeloMunicipioDistroDes = require('../models/destino/modeloMunicipioDistro');
const { conexionDestinoDB, Sequelize } = require('../db/conexion');

async function extraerDatos() {
    try {
        const municipioDistritos = await modeloMunicipioDistroOri.MunicipioDistro.findAll();
        if (municipioDistritos) {
            transformarDatos(municipioDistritos);
        } else {
            console.log("No se encontraron municipioDistritos en la base de datos de origen.");
            return [];
        }
    } catch (error) {
        console.error("Error al extraer datos:", error);
        throw error;
    }
}

function transformarDatos(municipioDistritos) {
    if (municipioDistritos) {
        cargarDatos(municipioDistritos.map(municipioDistrito => ({
            id_origen: municipioDistrito.id_municipio_distrito,
            nombre_municipio: municipioDistrito.nombre_municipio
        }))
        );
    }
}

async function cargarDatos(municipiosDistritosTransformados) {
    try {
        // Obtener todos los registros existentes en la base de datos de destino
        const municipiosDistritosDestino = await modeloMunicipioDistroDes.MunicipioDistro.findAll();

        // Identificar los IDs de los registros en la base de datos de destino
        const idsDestino = municipiosDistritosDestino.map(municipioDistrito => municipioDistrito.id_origen);

        // Crear una transacción para agrupar las operaciones de actualización y eliminación
        await conexionDestinoDB.transaction(async (t) => {
            // Actualizar o insertar registros existentes en la base de datos de destino
            for (const municipioDistritoTransformado of municipiosDistritosTransformados) {
                if (idsDestino.includes(municipioDistritoTransformado.id_origen)) {
                    // Si el registro existe, actualizarlo en lugar de insertarlo nuevamente
                    await modeloMunicipioDistroDes.MunicipioDistro.update(municipioDistritoTransformado, {
                        where: { id_origen: municipioDistritoTransformado.id_origen },
                        transaction: t
                    });
                } else {
                    // Si el registro no existe, insertarlo en la base de datos de destino
                    await modeloMunicipioDistroDes.MunicipioDistro.create(municipioDistritoTransformado, { transaction: t });
                }
            }
            // Eliminar registros en la base de datos de destino que no existen en los datos extraídos
            await modeloMunicipioDistroDes.MunicipioDistro.destroy({

                where: {
                    [Sequelize.Op.and]:[
                        {id_origen: {[Sequelize.Op.notIn]: municipiosDistritosTransformados.map(municipioDistrito => municipioDistrito.id_origen)}},
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

function iniciarMunicipioDistritoETL() {
    extraerDatos();
}

module.exports = {
    iniciarMunicipioDistritoETL
};
