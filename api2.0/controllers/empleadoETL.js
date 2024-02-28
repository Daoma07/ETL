const modeloEmpleadoOri = require('../models/origen/modeloEmpleado');
const modeloEmpleadoDes = require('../models/destino/modeloEmpleado');
const { conexionDestinoDB } = require('../db/conexion');
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

        await conexionDestinoDB.query('SET FOREIGN_KEY_CHECKS = 0');
        await modeloEmpleadoDes.Empleado.sync({ force: true });
        await modeloEmpleadoDes.Empleado.bulkCreate(empleadosTransformados);

    } catch (error) {
        console.error('Error al conectar con la base de datos de destino:', error);
    }
}

function iniciarEmpleadoETL() {
    extraerDatos();
}

module.exports = {
    iniciarEmpleadoETL
};
