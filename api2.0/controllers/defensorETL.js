const modeloDefensorOri = require('../models/origen/modeloDefensor');
const modeloDefensorDes = require('../models/destino/modeloDefensor');
const { conexionDestinoDB, Sequelize } = require('../db/conexion');

async function extraerDatos() {
    try {
        const defensores = await modeloDefensorOri.Defensor.findAll();
        if (defensores) {
            transformarDatos(defensores);
        } else {
            console.log("No se encontraron defensores en la base de datos de origen.");
            return [];
        }
    } catch (error) {
        console.error("Error al extraer datos:", error);
        throw error;
    }
}

function transformarDatos(defensores) {
    if (defensores) {
        cargarDatos(defensores.map(defensor => ({
            id_origen: defensor.id_defensor,
            nombre_defensor: defensor.nombre_defensor
        }))
        );
    }
}

async function cargarDatos(defensoresTransformados) {
    try {
        // Obtener todos los registros existentes en la base de datos de destino
        const defensoresDestino = await modeloDefensorDes.Defensor.findAll();

        // Identificar los IDs de los registros en la base de datos de destino
        const idsDestino = defensoresDestino.map(defensor => defensor.id_defensor);

        // Crear una transacción para agrupar las operaciones de actualización y eliminación
        await conexionDestinoDB.transaction(async (t) => {
            // Actualizar o insertar registros existentes en la base de datos de destino
            for (const defensorTransformado of defensoresTransformados) {
                if (idsDestino.includes(defensorTransformado.id_defensor)) {
                    // Si el registro existe, actualizarlo en lugar de insertarlo nuevamente
                    await modeloDefensorDes.Defensor.update(defensorTransformado, {
                        where: { id_origen: defensorTransformado.id_defensor },
                        transaction: t
                    });
                } else {
                    // Si el registro no existe, insertarlo en la base de datos de destino
                    await modeloDefensorDes.Defensor.create(defensorTransformado, { transaction: t });
                }
            }
            // Eliminar registros en la base de datos de destino que no existen en los datos extraídos
            await modeloDefensorDes.Defensor.destroy({
                where: {
                    id_origen: { [Sequelize.Op.notIn]: defensoresTransformados.map(defensor => defensor.id_defensor) }
                },
                transaction: t
            });
        });

    } catch (error) {
        console.error('Error al cargar datos:', error);
    }
}

function iniciarDefensorETL() {
    extraerDatos();
}

module.exports = {
    iniciarDefensorETL
};
