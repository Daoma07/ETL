const modeloGeneroOri = require('../models/origen/modeloGenero');
const modeloGeneroDes = require('../models/destino/modeloGenero');
const { conexionDestinoDB, Sequelize } = require('../db/conexion');

async function extraerDatos() {
    try {
        const generos = await modeloGeneroOri.Genero.findAll();
        if (generos) {
            transformarDatos(generos);
        } else {
            console.log("No se encontraron generos en la base de datos de origen.");
            return [];
        }
    } catch (error) {
        console.error("Error al extraer datos:", error);
        throw error;
    }
}

function transformarDatos(generos) {
    if (generos) {
        cargarDatos(generos.map(genero => ({
            id_genero: genero.id_genero,
            descripcion_genero: genero.descripcion_genero
        }))
        );
    }
}

async function cargarDatos(generosTransformados) {
    try {
        // Obtener todos los registros existentes en la base de datos de destino
        const generosDestino = await modeloGeneroDes.Genero.findAll();

        // Identificar los IDs de los registros en la base de datos de destino
        const idsDestino = generosDestino.map(genero => genero.id_genero);

        // Crear una transacción para agrupar las operaciones de actualización y eliminación
        await conexionDestinoDB.transaction(async (t) => {
            // Actualizar o insertar registros existentes en la base de datos de destino
            for (const generoTransformado of generosTransformados) {
                if (idsDestino.includes(generoTransformado.id_genero)) {
                    // Si el registro existe, actualizarlo en lugar de insertarlo nuevamente
                    await modeloGeneroDes.Genero.update(generoTransformado, {
                        where: { id_genero: generoTransformado.id_genero },
                        transaction: t
                    });
                } else {
                    // Si el registro no existe, insertarlo en la base de datos de destino
                    await modeloGeneroDes.Genero.create(generoTransformado, { transaction: t });
                }
            }
            // Eliminar registros en la base de datos de destino que no existen en los datos extraídos
            await modeloGeneroDes.Genero.destroy({
                where: {
                    id_genero: { [Sequelize.Op.notIn]: generosTransformados.map(genero => genero.id_genero) }
                },
                transaction: t
            });
        });
    
    } catch (error) {
        console.error('Error al cargar datos:', error);
    }
}

function iniciarGeneroETL() {
    extraerDatos();
}

module.exports = {
    iniciarGeneroETL
};
