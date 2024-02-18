const { extraerDatos } = require("./main/etl");
const { transformarDatos } = require("./main/etl");
const { cargarDatos } = require("./main/etl");

async function main () {
    try {
        const personas = await extraerDatos();
        const personasTransformadas = transformarDatos(personas);
        await cargarDatos(personasTransformadas);
    } catch (error) {
        console.error('Error en el proceso ETL:', error);

    }
}

const intervalo = 60000; // 1 minuto = 60000 milisegundos
setInterval(main, intervalo);
