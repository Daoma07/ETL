const modeloDistritoJudicialOri = require('../models/origen/modeloDistritoJudicial');
const modeloDistritoJudicialDes = require('../models/destino/modeloDistritoJudicial');
const { conexionDestinoDB, Sequelize } = require('../db/conexion');

async function extraerDatos() {
    try {
        const distritosJudiciales = await modeloDistritoJudicialOri.DistritoJudicial.findAll();
        if (distritosJudiciales) {
            transformarDatos(distritosJudiciales);
        } else {
            console.log("No se encontraron distritosJudiciales en la base de datos de origen.");
            return [];
        }
    } catch (error) {
        console.error("Error al extraer datos:", error);
        throw error;
    }
}

function transformarDatos(distritosJudiciales) {
    if (distritosJudiciales) {
        cargarDatos(distritosJudiciales.map(distritoJudicial => ({
            id_distrito_judicial: distritoJudicial.id_distrito_judicial,
            nombre_distrito_judicial: distritoJudicial.nombre_distrito_judicial
        }))
        );
    }
}

async function cargarDatos(distritosJudicialesTransformados) {
    try {
        // Obtener todos los registros existentes en la base de datos de destino
        const distritosJudicialesDestino = await modeloDistritoJudicialDes.DistritoJudicial.findAll();

        // Identificar los IDs de los registros en la base de datos de destino
        const idsDestino = distritosJudicialesDestino.map(distritoJudicial => distritoJudicial.id_distrito_judicial);

        // Crear una transacción para agrupar las operaciones de actualización y eliminación
        await conexionDestinoDB.transaction(async (t) => {
            // Actualizar o insertar registros existentes en la base de datos de destino
            for (const distritoJudicialTransformado of distritosJudicialesTransformados) {
                if (idsDestino.includes(distritoJudicialTransformado.id_distrito_judicial)) {
                    // Si el registro existe, actualizarlo en lugar de insertarlo nuevamente
                    await modeloDistritoJudicialDes.DistritoJudicial.update(distritoJudicialTransformado, {
                        where: { id_distrito_judicial: distritoJudicialTransformado.id_distrito_judicial },
                        transaction: t
                    });
                } else {
                    // Si el registro no existe, insertarlo en la base de datos de destino
                    await modeloDistritoJudicialDes.DistritoJudicial.create(distritoJudicialTransformado, { transaction: t });
                }
            }
            // Eliminar registros en la base de datos de destino que no existen en los datos extraídos
            await modeloDistritoJudicialDes.DistritoJudicial.destroy({
                where: {
                    id_distrito_judicial: { [Sequelize.Op.notIn]: distritosJudicialesTransformados.map(distritoJudicial => distritoJudicial.id_distrito_judicial) }
                },
                transaction: t
            });
        });

    } catch (error) {
        console.error('Error al cargar datos:', error);
    }
}

function inciarDistritoJudicialETL() {
    extraerDatos();
}

module.exports = {
    inciarDistritoJudicialETL
};
