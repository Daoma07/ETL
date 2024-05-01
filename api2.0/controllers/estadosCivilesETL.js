const modeloEstadoCivilOri = require('../models/origen/modeloEstadoCivil');
const modeloEstadoCivilDes = require('../models/destino/modeloEstadoCivil');
const { conexionDestinoDB, Sequelize } = require('../db/conexion');

async function extraerDatos() {
    try {
        const estadoCiviles = await modeloEstadoCivilOri.EstadoCivil.findAll();
        if (estadoCiviles) {
            transformarDatos(estadoCiviles);
        } else {
            console.log("No se encontraron estadoCiviles en la base de datos de origen.");
            return [];
        }
    } catch (error) {
        console.error("Error al extraer datos:", error);
        throw error;
    }
}

function transformarDatos(estadoCiviles) {
    if (estadoCiviles) {
        cargarDatos(estadoCiviles.map(estadoCivil => ({
            id_origen: estadoCivil.id_estado_civil,
            estado_civil: estadoCivil.estado_civil
        }))
        );
    }
}

async function cargarDatos(estadosCivilesTransformados) {
    try {
        // Obtener todos los registros existentes en la base de datos de destino
        const estadosCivilesDestino = await modeloEstadoCivilDes.EstadoCivil.findAll();

        // Identificar los IDs de los registros en la base de datos de destino
        const idsDestino = estadosCivilesDestino.map(estadoCivil => estadoCivil.id_estado_civil);

        // Crear una transacción para agrupar las operaciones de actualización y eliminación
        await conexionDestinoDB.transaction(async (t) => {
            // Actualizar o insertar registros existentes en la base de datos de destino
            for (const estadoCivilTransformado of estadosCivilesTransformados) {
                if (idsDestino.includes(estadoCivilTransformado.id_estado_civil)) {
                    // Si el registro existe, actualizarlo en lugar de insertarlo nuevamente
                    await modeloEstadoCivilDes.EstadoCivil.update(estadoCivilTransformado, {
                        where: { id_origen: estadoCivilTransformado.id_estado_civil },
                        transaction: t
                    });
                } else {
                    // Si el registro no existe, insertarlo en la base de datos de destino
                    await modeloEstadoCivilDes.EstadoCivil.create(estadoCivilTransformado, { transaction: t });
                }
            }
            // Eliminar registros en la base de datos de destino que no existen en los datos extraídos
            await modeloEstadoCivilDes.EstadoCivil.destroy({
                where: {
                    id_origen: { [Sequelize.Op.notIn]: estadosCivilesTransformados.map(estadoCivil => estadoCivil.id_estado_civil) }
                },
                transaction: t
            });
        });

    } catch (error) {
        console.error('Error al cargar datos:', error);
    }
}

function iniciarEstadoCivilETL() {
    extraerDatos();
}

module.exports = {
    iniciarEstadoCivilETL
};