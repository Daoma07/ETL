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
const { logEnd,getLastLog } = require("./logger");
 function main() {
    cron.schedule(' */10 * * * * *', () => {
        etl();
        
        
    })
}

async function etl() {

    try {
        //let lastLog = await getLastLog("./bitacora.log");
        //console.log(lastLog);
    iniciarZonaETL();
    console.log("Zona ETL completed");

    iniciarAsesorETL();
    console.log("Asesor ETL completed");

    iniciarDefensorETL();
    console.log("Defensor ETL completed");

    iniciarEmpleadoETL();
    console.log("Empleado ETL completed");

    iniciarTurnoETL();
    console.log("Turno ETL completed");

    iniciarTipoJuicioETL();
    console.log("Tipo Juicio ETL completed");

    iniciarEstadoCivilETL();
    console.log("Estado Civil ETL completed");

    iniciarGeneroETL();
    console.log("Genero ETL completed");

    iniciarMunicipioDistritoETL();
    console.log("Municipio Distrito ETL completed");

    iniciarMotivoETL();
    console.log("Motivo ETL completed");

    inciarDistritoJudicialETL();
    console.log("Distrito Judicial ETL completed");

    iniciarAsesoradoETL();
    console.log("Asesorado ETL completed");

    iniciarAsesoriaETL();
    console.log("Asesoria ETL completed");

    
        //console.log("App Corriendo.....");
        
    } catch (error) {
        console.error('Error en el proceso ETL:', error);

    }
}
function getDate(){
//Create a new Date object, which represents the current date and time
const currentDate = new Date();

// Get the individual components of the date and time
const year = currentDate.getFullYear(); // Year (e.g., 2024)
const month = currentDate.getMonth() + 1; // Month (0-11, so we add 1)
const day = currentDate.getDate(); // Day of the month (1-31)
const hours = currentDate.getHours(); // Hours (0-23)
const minutes = currentDate.getMinutes(); // Minutes (0-59)
const seconds = currentDate.getSeconds(); // Seconds (0-59)

// Format the date and time as a string
const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

return formattedDateTime;
}


module.exports = { main };





