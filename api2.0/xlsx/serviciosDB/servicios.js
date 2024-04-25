const { Motivo } = require('../../models/destino/modeloMotivo');
const { Genero } = require('../../models/destino/modeloGenero');
const { EstadoCivil } = require('../../models/destino/modeloEstadoCivil');
const { Empleado } = require('../../models/destino/modeloEmpleado');
const { Asesor } = require('../../models/destino/modeloAsesor');
const { TipoJuicio } = require('../../models/destino/modeloTipoJuicio');
const { Asesorado } = require('../../models/destino/modeloAsesorado');
const { Asesoria } = require('../../models/destino/modeloAsesoria');
const { Op } = require('sequelize');

// Función que verifica y registra los motivos
async function verificarMotivo(descripcion) {
    try {
        let motivo = await Motivo.findOne({
            where: {
                descripcion_motivo: descripcion
            }
        });

        if (motivo) {
            return motivo.id_motivo;
        }
        return null;
    } catch (error) {
        throw error;
    }
}

// Función que verifica y registra los empleados
async function verificarEmpleado(nombreAsesor) {
    try {
        let asesor = await Asesor.findOne({
            where: {
                nombre_asesor: nombreAsesor
            }
        });

        if (asesor) {
            return asesor.id_asesor;
        } else {
            return Empleado.create({ tipo_empleado: "asesor" })
                .then(empleado => {
                    return Asesor.create({ id_asesor: empleado.id_empleado, nombre_asesor: nombreAsesor })
                        .then(asesor => {
                            return asesor.id_asesor;
                        });
                })
                .catch(error => {
                    console.error("Error al crear empleado:", error);
                    throw error;
                });
        }

    } catch (error) {
        throw error;
    }
}

//Verificar el tipo de juicio
async function verificarTipoJuicio(tipoJuicio) {
    try {
        let juicio = await TipoJuicio.findOne({
            where: {
                tipo_juicio: tipoJuicio
            }
        });

        if (juicio) {
            return juicio.id_tipo_juicio;
        } else {
            return TipoJuicio.create({ tipo_juicio: tipoJuicio })
                .then(tipoJuicio => {
                    return tipoJuicio.id_tipo_juicio;
                })
                .catch(error => {
                    console.error("Error al crear el tipo de juicio:", error);
                    throw error;
                });
        }

    } catch (error) {
        throw error;
    }
}



// Función que verifica y registra los generos
async function verificarGenero(genero) {
    try {
        genero = escaparSlash(genero)
        let tipoGenero = await Genero.findOne({ where: { descripcion_genero: genero } });

        if (tipoGenero) {
            return tipoGenero.id_genero;
        } else {
            tipoGenero = await Genero.findOne({ where: { descripcion_genero: "No Binario" } });
            return tipoGenero.id_genero;
        }
    } catch (error) {
        throw error;
    }
}

// Función que verifica y registra los estado civil
async function verificarEstadoCivil(estadoCivil) {
    try {
        estadoCivil = escaparSlash(estadoCivil);
        let tipoEstadoCivil = await EstadoCivil.findOne({
            where: {
                estado_civil: estadoCivil
            }
        });
        if (tipoEstadoCivil) {
            return tipoEstadoCivil.id_estado_civil;
        }
        return null;
    } catch (error) {
        throw error;
    }
}

//Funcion para agregar asesorados
async function registarAsesorado(numHijos, colonia, id_estado_civil, id_genero) {
    try {
        const asesorado = await Asesorado.create({
            numero_hijos: numHijos, colonia: colonia,
            id_estado_civil: id_estado_civil, id_genero: id_genero
        });
        return asesorado.id_asesorado;
    } catch (error) {
        console.error("Error al crear el asesorado:", error);
        throw error;
    }
}

//Funcion para agregar asesorias
async function registarAsesoria(estatus_requisitos, fecha_registro, id_tipo_juicios,
    id_asesorado, id_motivo, id_empleado) {
    try {
        const asesoria = await Asesoria.create({
            estatus_requisitos: estatus_requisitos,
            fecha_registro: fecha_registro,
            id_tipo_juicio: id_tipo_juicios,
            id_asesorado: id_asesorado,
            id_motivo: id_motivo,
            id_empleado: id_empleado
        });
        return asesoria.id_asesoria;
    } catch (error) {
        console.error("Error al crear la asesoria:", error);
        throw error;
    }
}

//Formato para los datos
function escaparSlash(descripcion) {
    return descripcion.replace(/\/\w/, (match) => {
        return `(${match[1]})`;
    });
}

module.exports = {
    registarAsesoria, registarAsesorado, verificarEstadoCivil, verificarGenero, verificarTipoJuicio,
    verificarEmpleado, verificarMotivo
};


/*

let motivo = escaparSlash("Ama de casa");
console.log(motivo);
verificarMotivo(motivo)
    .then(id => {
        console.log(id);
    })
    .catch(error => {
        console.error(error);
    });


verificarGenero("Masculino")
    .then(id => {
        console.log(id);
    })
    .catch(error => {
        console.error(error);
    });

let estadoCivil = escaparSlash("Viudo(a)");
verificarEstadoCivil(estadoCivil)
    .then(id => {
        console.log(id);
    })
    .catch(error => {
        console.error(error);
    });

verificarEmpleado("JOSE BALVANEDO CIFUENTES RODRIGUEZ")
    .then(id => {
        console.log(id);
    })
    .catch(error => {
        console.error(error);
    });


verificarTipoJuicio("Consignacion de Pension")
    .then(id => {
        console.log(id);
    })
    .catch(error => {
        console.error(error);
    });


*/
