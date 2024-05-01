const modeloMotivoOri = require('../models/origen/modeloMotivo');
const modeloMotivoDes = require('../models/destino/modeloMotivo');
const { conexionDestinoDB, Sequelize } = require('../db/conexion');

async function extraerDatos() {
    try {
        const motivos = await modeloMotivoOri.Motivo.findAll();
        if (motivos) {
            transformarDatos(motivos);
        } else {
            console.log("No se encontraron motivos en la base de datos de origen.");
            return [];
        }
    } catch (error) {
        console.error("Error al extraer datos:", error);
        throw error;
    }
}

function transformarDatos(motivos) {
    if (motivos) {
        cargarDatos(motivos.map(motivo => ({
            id_origen: motivo.id_motivo,
            descripcion_motivo: motivo.descripcion_motivo
        }))
        );
    }
}

async function cargarDatos(motivosTransformados) {
    try {
        // Obtener todos los registros existentes en la base de datos de destino
        const motivosDestino = await modeloMotivoDes.Motivo.findAll();

        // Identificar los IDs de los registros en la base de datos de destino
        const idsDestino = motivosDestino.map(motivo => motivo.id_origen);

        // Crear una transacción para agrupar las operaciones de actualización y eliminación
        await conexionDestinoDB.transaction(async (t) => {
            // Actualizar o insertar registros existentes en la base de datos de destino
            for (const motivoTransformado of motivosTransformados) {
                if (idsDestino.includes(motivoTransformado.id_origen)) {
                    // Si el registro existe, actualizarlo en lugar de insertarlo nuevamente
                    await modeloMotivoDes.Motivo.update(motivoTransformado, {
                        where: { id_origen: motivoTransformado.id_origen },
                        transaction: t
                    });
                } else {
                    // Si el registro no existe, insertarlo en la base de datos de destino
                    await modeloMotivoDes.Motivo.create(motivoTransformado, { transaction: t });
                }
            }
            // Eliminar registros en la base de datos de destino que no existen en los datos extraídos
            await modeloMotivoDes.Motivo.destroy({
                
                where: {
                    [Sequelize.Op.and]:[
                        {id_origen: {[Sequelize.Op.notIn]: motivosTransformados.map(motivo => motivo.id_origen)}},
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

function iniciarMotivoETL() {
    extraerDatos();
}

module.exports = {
    iniciarMotivoETL
};
