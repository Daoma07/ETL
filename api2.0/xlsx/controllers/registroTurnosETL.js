
const { readExcel } = require("../conversion/turnosConversion");
const { Turno } = require('../../models/destino/modeloTurno');
const { registarTurno } = require("../serviciosDB/servicios")
const { Op } = require('sequelize');



async function registarTurnos(path) {
    try {
        const data = await readExcel(path);

        for (const row of data) {
            try {
                console.log(row.marcaTemporal);
                console.log(row.horaAtencion);
                /*
                               
                               const fechaTurno = await formatFecha(row.marcaTemporal);
                               const horaTurno = await formatHora(row.horaAtencion);
                               const idAsesoria = null;
                               
                               const turno = registarTurno(fechaTurno, horaTurno, idAsesoria);
                               */

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
    } catch (error) {
        console.error(error);
    }
}



//Formato para la fecha de turno
function formatFecha(fecha) {
    var fechaParts = fecha.split(" ");
    return fechaParts[0];
}

//Formato para la hora de turno
function formatHora(hora) {

    // Dividir la hora en componentes de hora, minutos y segundos
    var horaPartes = hora.split(":");
    var horas = parseInt(horaPartes[0]);
    var minutos = parseInt(horaPartes[1]);
    var segundos = parseInt(horaPartes[2]);

    var AMPM = horaPartes[2].split(" ");
    // Verificar si es AM o PM
    if (AMPM[1] === "PM" && horas < 12) {
        horas = horas + 12;
    }
    if (AMPM[1] === "AM" && horas === 12) {
        horas = 0;
    }


    segundos = segundos < 10 ? "0" + segundos : segundos;
    return horas + ":" + minutos + ":" + segundos

}





module.exports = {
    registarTurnos
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
