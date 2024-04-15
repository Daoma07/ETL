//import cron from 'node-cron'
const cron = require('node-cron')
const { iniciarAsesorETL } = require("../controllers/asesorETL");
const { iniciarDefensorETL } = require("../controllers/defensorETL");
const { iniciarEmpleadoETL } = require("../controllers/empleadoETL");
const { iniciarTurnoETL } = require("../controllers/turnoETL");
const { iniciarTipoJuicioETL } = require("../controllers/tipoJuicioETL");
const { iniciarEstadoCivilETL } = require("../controllers/estadosCivilesETL");
const { iniciarGeneroETL } = require("../controllers/generoETL");
const { iniciarMunicipioDistritoETL } = require("../controllers/municipioDistritoETL");
const { iniciarMotivoETL } = require("../controllers/motivoETL");
const { inciarDistritoJudicialETL } = require("../controllers/distritoJudicialETL");
const { iniciarAsesoradoETL } = require("../controllers/asesoradoETL");
const { iniciarAsesoriaETL } = require("../controllers/asesoriasETL");
const { iniciarZonaETL } = require("../controllers/zonaETL");

function main() {
    cron.schedule(' */10 * * * * *', () => {
        etl();
    })
}

async function etl() {

    try {
        iniciarZonaETL();
        iniciarAsesorETL();
        iniciarDefensorETL();
        iniciarEmpleadoETL();
        iniciarTurnoETL();
        //iniciarTipoJuicioETL();
        // iniciarEstadoCivilETL();
        // iniciarGeneroETL();
        // iniciarMunicipioDistritoETL();
        // iniciarMotivoETL();
        // inciarDistritoJudicialETL();
        // iniciarAsesoradoETL();
        // iniciarAsesoriaETL();
        console.log("App Corriendo.....");
    } catch (error) {
        console.error('Error en el proceso ETL:', error);

    }
}

module.exports = { main };





