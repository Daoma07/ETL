const modeloZonaOri = require('../models/origen/modeloZona');
const modeloZonaDes = require('../models/destino/modeloZona');
const { conexionDestinoDB, Sequelize } = require('../db/conexion');

async function extraerDatos() {
    try {
        const zonas = await modeloZonaOri.Zona.findAll();
        if (zonas) {
            transformarDatos(zonas);
        } else {
            console.log("No se encontraron zonas en la base de datos de origen.");
            return [];
        }
    } catch (error) {
        console.error("Error al extraer datos:", error);
        throw error; // o manejar este error de acuerdo a tus necesidade
    }
}

function transformarDatos(zonas) {
    if (zonas) {
        cargarDatos(zonas.map(zona => ({
            id_origen: zona.id_zona,
            nombre_zona: zona.nombre_zona,
        }))
        );
    }
}

async function cargarDatos(zonasTransformadas) {
    try {
        const zonasDestino = await modeloZonaDes.Zona.findAll();

        // Identificar los IDs de los registros en la base de datos de destino
        const idsDestino = zonasDestino.map(zona => zona.id_zona);

        // Crear una transacción para agrupar las operaciones de actualización y eliminación
        await conexionDestinoDB.transaction(async (t) => {
            // Actualizar o insertar registros existentes en la base de datos de destino
            for (const zonaTransformada of zonasTransformadas) {
                if (idsDestino.includes(zonaTransformada.id_zona)) {
                    // Si el registro existe, actualizarlo en lugar de insertarlo nuevamente
                    await modeloZonaDes.Zona.update(zonaTransformada, {
                        where: { id_origen: zonaTransformada.id_zona },
                        transaction: t
                    });
                } else {
                    // Si el registro no existe, insertarlo en la base de datos de destino
                    await modeloZonaDes.Zona.create(zonaTransformada, { transaction: t });
                }
            }

            // Eliminar registros en la base de datos de destino que no existen en los datos extraídos
            await modeloZonaDes.Zona.destroy({
                where: {
                    id_origen: { [Sequelize.Op.notIn]: zonasTransformadas.map(zona => zona.id_zona) }
                },
                transaction: t
            });
        });

    } catch (error) {
        console.error('Error al conectar con la base de datos de destino:', error);
    }
}

function iniciarZonaETL() {
    extraerDatos();
}

module.exports = {
    iniciarZonaETL
};