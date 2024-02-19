const { iniciarAsesorETL } = require("./controllers/asesorETL");
const { iniciarDefensorETL } = require("./controllers/defensorETL");
const { iniciarEmpleadoETL } = require("./controllers/empleadoETL");
async function main() {
    try {
        iniciarEmpleadoETL();
    } catch (error) {
        console.error('Error en el proceso ETL:', error);

    }
}

const intervalo = 6000; // 1 minuto = 60000 milisegundos
setInterval(main, intervalo);
