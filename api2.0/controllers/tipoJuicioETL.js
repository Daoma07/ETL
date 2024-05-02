const modeloTipoJuicioOri = require('../models/origen/modeloTipoJuicio');
const modeloTipoJuicioDes = require('../models/destino/modeloTipoJuicio');
const { conexionDestinoDB, Sequelize } = require('../db/conexion');

async function extraerDatos() {
    try {
        const tipoJuicios = await modeloTipoJuicioOri.TipoJuicio.findAll();
        if (tipoJuicios) {
            transformarDatos(tipoJuicios);
        } else {
            console.log("No se encontraron tipoJuicios en la base de datos de origen.");
            return [];
        }
    } catch (error) {
        console.error("Error al extraer datos:", error);
        throw error;
    }
}

function transformarDatos(tipoJuicios) {
    if (tipoJuicios) {
        cargarDatos(tipoJuicios.map(TipoJuicio => ({
            id_origen: TipoJuicio.id_tipo_juicio,
            tipo_juicio: TipoJuicio.tipo_juicio
        }))
        );
    }
}

async function cargarDatos(tipoJuiciosTransformados) {
    try {
        // Obtener todos los registros existentes en la base de datos de TipoJuicio
        const tipoJuiciosDestino = await modeloTipoJuicioDes.TipoJuicio.findAll();

        // Identificar los IDs de los registros en la base de datos de TipoJuicio
        const idsDestino = tipoJuiciosDestino.map(TipoJuicio => TipoJuicio.id_tipo_juicio);

        // Crear una transacción para agrupar las operaciones de actualización y eliminación
        await conexionDestinoDB.transaction(async (t) => {
            // Actualizar o insertar registros existentes en la base de datos de TipoJuicio
            for (const tipoJuicioTransformado of tipoJuiciosTransformados) {
                if (idsDestino.includes(tipoJuicioTransformado.id_tipo_juicio)) {
                    // Si el registro existe, actualizarlo en lugar de insertarlo nuevamente
                    await modeloTipoJuicioDes.TipoJuicio.update(tipoJuicioTransformado, {
                        where: { id_origen: tipoJuicioTransformado.id_tipo_juicio },
                        transaction: t
                    });
                } else {
                    // Si el registro no existe, insertarlo en la base de datos de TipoJuicio
                    await modeloTipoJuicioDes.TipoJuicio.create(tipoJuicioTransformado, { transaction: t });
                }
            }
            // Eliminar registros en la base de datos de TipoJuicio que no existen en los datos extraídos
            await modeloTipoJuicioDes.TipoJuicio.destroy({
                where: {
                    id_origen: { [Sequelize.Op.notIn]: tipoJuiciosTransformados.map(TipoJuicio => TipoJuicio.id_tipo_juicio) }
                },
                transaction: t
            });
        });

    } catch (error) {
        console.error('Error al cargar datos:', error);
    }
}

function iniciarTipoJuicioETL() {
    extraerDatos();
}

module.exports = {
    iniciarTipoJuicioETL
};