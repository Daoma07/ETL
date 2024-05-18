const modeloEmpleadoOri = require('../models/origen/modeloEmpleado');
const modeloEmpleadoDes = require('../models/destino/modeloEmpleado');
const { conexionDestinoDB, Sequelize } = require('../db/conexion');

async function extraerDatos() {
    try {
        const empleados = await modeloEmpleadoOri.Empleado.findAll();
        if (empleados) {
            transformarDatos(empleados);
        } else {
            console.log("No se encontraron empleados en la base de datos de origen.");
            return [];
        }
    } catch (error) {
        console.error("Error al extraer datos:", error);
        throw error;
    }
}

function transformarDatos(empleados) {
    if (empleados) {
        cargarDatos(empleados.map(empleado => ({
            id_empleado: empleado.id_empleado,
            tipo_empleado: empleado.tipo_empleado
        }))
        );
    }
}


async function cargarDatos(empleadosTransformados) {
    try {
        // Obtener todos los registros existentes en la base de datos de destino
        const empleadosDestino = await modeloEmpleadoDes.Empleado.findAll();

        // Identificar los IDs de los registros en la base de datos de destino
        const idsDestino = empleadosDestino.map(empleado => empleado.id_empleado);

        // Crear una transacción para agrupar las operaciones de actualización y eliminación
        await conexionDestinoDB.transaction(async (t) => {
            // Actualizar o insertar registros existentes en la base de datos de destino
            for (const empleadoTransformado of empleadosTransformados) {
                if (idsDestino.includes(empleadoTransformado.id_empleado)) {
                    // Si el registro existe, actualizarlo en lugar de insertarlo nuevamente
                    await modeloEmpleadoDes.Empleado.update(empleadoTransformado, {
                        where: { id_empleado: empleadoTransformado.id_empleado },
                        transaction: t
                    });
                } else {
                    // Si el registro no existe, insertarlo en la base de datos de destino
                    await modeloEmpleadoDes.Empleado.create(empleadoTransformado, { transaction: t });
                }
            }
            // Eliminar registros en la base de datos de destino que no existen en los datos extraídos
            await modeloEmpleadoDes.Empleado.destroy({
                where: {
                    id_empleado: { [Sequelize.Op.notIn]: empleadosTransformados.map(empleado => empleado.id_empleado) }
                },
                transaction: t
            });
        });
    
    } catch (error) {
        console.error('Error al cargar datos:', error);
    }
}

function iniciarEmpleadoETL() {
    extraerDatos();
}

module.exports = {
    iniciarEmpleadoETL
};
