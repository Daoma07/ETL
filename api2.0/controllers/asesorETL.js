const modeloAsesorOri = require('../models/origen/modeloAsesor');
const modeloAsesorDes = require('../models/destino/modeloAsesor');
const { conexionDestinoDB, Sequelize } = require('../db/conexion');

async function extraerDatos() {
    try {
        const asesores = await modeloAsesorOri.Asesor.findAll();
        if (asesores) {
            transformarDatos(asesores);
        } else {
            console.log("No se encontraron asesores en la base de datos de origen.");
            return [];
        }
    } catch (error) {
        console.error("Error al extraer datos:", error);
        throw error;
    }
}

function transformarDatos(asesores) {
    if (asesores) {
        cargarDatos(asesores.map(asesor => ({
            id_asesor: asesor.id_asesor,
            nombre_asesor: asesor.nombre_asesor
        }))
        );
    }
}


async function cargarDatos(asesoresTransformadas) {
    try {
        // Obtener todos los registros existentes en la base de datos de destino
        const asesoresDestino = await modeloAsesorDes.Asesor.findAll();

        // Identificar los IDs de los registros en la base de datos de destino
        const idsDestino = asesoresDestino.map(asesor => asesor.id_asesor);

        // Crear una transacción para agrupar las operaciones de actualización y eliminación
        await conexionDestinoDB.transaction(async (t) => {
            // Actualizar o insertar registros existentes en la base de datos de destino
            for (const asesorTransformado of asesoresTransformadas) {
                if (idsDestino.includes(asesorTransformado.id_asesor)) {
                    // Si el registro existe, actualizarlo en lugar de insertarlo nuevamente
                    await modeloAsesorDes.Asesor.update(asesorTransformado, {
                        where: { id_asesor: asesorTransformado.id_asesor },
                        transaction: t
                    });
                } else {
                    // Si el registro no existe, insertarlo en la base de datos de destino
                    await modeloAsesorDes.Asesor.create(asesorTransformado, { transaction: t });
                }
            }
            // Eliminar registros en la base de datos de destino que no existen en los datos extraídos
            await modeloAsesorDes.Asesor.destroy({
                where: {
                    id_asesor: { [Sequelize.Op.notIn]: asesoresTransformadas.map(asesor => asesor.id_asesor) }
                },
                transaction: t
            });
        });
    
    } catch (error) {
        console.error('Error al cargar datos:', error);
    }
}

function iniciarAsesorETL() {
    extraerDatos();
}

module.exports = {
    iniciarAsesorETL
};
