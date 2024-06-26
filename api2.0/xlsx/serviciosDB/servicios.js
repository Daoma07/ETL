const { Motivo } = require('../destino/modeloMotivo');
const { Genero } = require('../destino/modeloGenero');
const { EstadoCivil } = require('../destino/modeloEstadoCivil');
const { Empleado } = require('../destino/modeloEmpleado');
const { Asesor } = require('../destino/modeloAsesor');
const { TipoJuicio } = require('../destino/modeloTipoJuicio');
const { Asesorado } = require('../destino/modeloAsesorado');
const { Asesoria } = require('../destino/modeloAsesoria');
const { Turno } = require('../destino/modeloTurno');
const { Op } = require('sequelize');

// Función que verifica y registra los motivos
async function verificarMotivo(descripcion) {
    try {
        let motivo = await Motivo.findOne({
            where: {
                descripcion_motivo: descripcion
            }
        });

        if (motivo == null) {
            motivo = await Motivo.create({
                descripcion_motivo: descripcion
            })
        }
        return motivo.id_motivo;
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
            tipoGenero = await Genero.create({ 
                descripcion_genero: genero
            });
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

        if (tipoEstadoCivil == null) {
            tipoEstadoCivil = await EstadoCivil.create({
                estado_civil: estadoCivil,
            });
        }
           
        return tipoEstadoCivil.id_estado_civil;
        
        
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

//Funcion para agregar asesorias
async function registarTurno(fecha_turno, hora_turno, id_asesoria) {
    try {
        const turno = await Turno.create({
            fecha_turno: fecha_turno,
            hora_turno: hora_turno,
            id_asesoria: id_asesoria
        });
        return turno;
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
    verificarEmpleado, verificarMotivo, registarTurno
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
