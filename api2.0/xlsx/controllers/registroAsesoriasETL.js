const { readExcel } = require("../conversion/asesoriasConvesion");
const { verificarGenero, verificarEstadoCivil, registarAsesorado,
    verificarEmpleado, verificarMotivo, registarAsesoria, verificarTipoJuicio } = require("../serviciosDB/servicios")


async function registarAsesorias(path) {
    try {
        const data = await readExcel(path);
        console.log("Procesando datos de asesorias...");
        for (const row of data) {
            try {
                const genero = await verificarGenero(row.genero);
                const estadoCivil = await verificarEstadoCivil(row.estadoCivil);
                const colonia = row.colonia;
                const numeroHijos = verificarNumeroHijos(row.numeroHijos);
                const asesorado = await registarAsesorado(numeroHijos, colonia, estadoCivil, genero);
                const tipoJuicio = await verificarTipoJuicio(row.tipoJuicio);
                const nombreAsesor = await verificarEmpleado(row.nombreAsesor);
                const motivo = await verificarMotivo(row.motivoNegativa);
                const cumpleRequisitos = verificarRequisitos(row.cumpleRequisitos);
                const marcaTemporal = extraerFecha(row.marcaTemporal);
                const asesoria = await registarAsesoria(cumpleRequisitos, marcaTemporal, tipoJuicio, asesorado, motivo, nombreAsesor);

                /*
                const nombreUsuario = row.nombreUsuario;
                const numeroTelefono = row.numeroTelefono;
                const trabaja = row.trabaja;
                const ingresoMensual = row.ingresoMensual;
                const resumenHechos = row.resumenHechos;
                const conclusion = row.conclusion;
                const usuarioRecibio = row.usuarioRecibio;
                */

            } catch (error) {
                console.error(error);
            }
        }
        console.log("Proceso terminado de asesorias");
    } catch (error) {
        console.error(error);
    }
}


function verificarNumeroHijos(numeroHijos) {
    if (numeroHijos[0] === "S") {
        return numeroHijos = parseInt(numeroHijos[0]);
    } else {
        return numeroHijos = parseInt(numeroHijos[0]);
    }
}

function verificarRequisitos(cumpleRequesitos) {
    return cumpleRequesitos[0] === "S" ? 1 : 0;
}


function extraerFecha(fecha) {
    if (typeof fecha === 'string') {
        const partes = fecha.split(" ");
        const fechaFormateada = new Date(partes[0]);
        if (!isNaN(fechaFormateada.getTime())) {
            return fechaFormateada;
        }
    }
    return null;
}


module.exports = {
    registarAsesorias
};