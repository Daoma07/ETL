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
    const intervalo = 6000; // 1 minuto = 60000 milisegundos
    setInterval(etl, intervalo);
}

async function etl() {

    try {
        await iniciarZonaETL();
        await wait(1000);
        await iniciarAsesorETL();
        await wait(1000);
        await iniciarDefensorETL();
        await wait(1000);
        await iniciarTurnoETL();
        await wait(1000);
        await iniciarTipoJuicioETL();
        await wait(1000);
        await iniciarTipoJuicioETL();
        await wait(1000);
        await iniciarEstadoCivilETL();
        await wait(1000);
        await iniciarMunicipioDistritoETL();
        await wait(1000);
        await inciarDistritoJudicialETL();
        await wait(1000);
        await iniciarAsesoradoETL();
        await wait(1000);
        await iniciarAsesoriaETL();
        await wait(1000);
        await iniciarEmpleadoETL();
        await wait(1000);
        await iniciarGeneroETL();
        await wait(1000);
        await iniciarMotivoETL();
        await wait(1000);
        console.log("App Corriendo.....");
    } catch (error) {
        console.error('Error en el proceso ETL:', error);

    }
}
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = { main };





