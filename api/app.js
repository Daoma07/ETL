const { iniciarAsesorETL } = require("./controllers/asesorETL");
const { iniciarDefensorETL } = require("./controllers/defensorETL");
const { iniciarEmpleadoETL } = require("./controllers/empleadoETL");
const { iniciarTurnoETL } = require("./controllers/turnoETL");
const { iniciarTipoJuicioETL } = require("./controllers/tipoJuicioETL");
const { iniciarEstadoCivilETL } = require("./controllers/estadosCivilesETL");
const { iniciarGeneroETL } = require("./controllers/generoETL");
const { iniciarMunicipioDistritoETL } = require("./controllers/municipioDistritoETL");
const { iniciarMotivoETL } = require("./controllers/motivoETL");
const { inciarDistritoJudicialETL } = require("./controllers/distritoJudicialETL");

async function main() {
    try {
        inciarDistritoJudicialETL();
        console.log("App Corriendo.....");
    } catch (error) {
        console.error('Error en el proceso ETL:', error);

    }
}

const intervalo = 6000; // 1 minuto = 60000 milisegundos
setInterval(main, intervalo);
