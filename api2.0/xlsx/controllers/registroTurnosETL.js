
const { readExcel } = require("../conversion/turnosConversion");
const { Turno } = require('../../models/destino/modeloTurno');
const { registarTurno } = require("../serviciosDB/servicios")
const { Op } = require('sequelize');



async function registarTurnos(path) {
    try {
        const data = await readExcel(path);
        console.log("Procesando datos de turnos...");
        for (const row of data) {
            try {                   
            const fechaTurno =  extraerFecha(row.marcaTemporal);
            const horaTurno =  extraerHora(row.horaAtencion);
            const idAsesoria = null;
                               
            const turno = registarTurno(fechaTurno, horaTurno, idAsesoria);
                
            } catch (error) {
                console.error(error);
            }
        }
    } catch (error) {
        console.error(error);
    }
}



//Formato para la fecha de turno
function extraerFecha(fecha) {
    if (typeof fecha === 'object'&& fecha instanceof Date) {
        const year = fecha.getFullYear();
        const month = (fecha.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 because months are zero-indexed
        const day = fecha.getDay().toString().padStart(2, '0');
        const hour = fecha.getHours().toString().padStart(2, '0');
        const minute = fecha.getMinutes().toString().padStart(2, '0');
        const second = fecha.getSeconds().toString().padStart(2, '0');
        return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
        
    }
    return null;
}

//Formato para la hora de turno
function extraerHora(hora) {
    if (typeof hora === 'object'&& hora instanceof Date) {
    const hours = hora.getHours().toString().padStart(2, '0');
    const minutes = hora.getMinutes().toString().padStart(2, '0');
    const seconds = hora.getSeconds().toString().padStart(2, '0');
    return hours+":"+minutes+":"+seconds
    } 
    return null;
    
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
