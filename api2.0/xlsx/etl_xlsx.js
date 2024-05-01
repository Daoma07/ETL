const { registarAsesorias } = require("./controllers/registroAsesoriasETL");
const { registarTurnos } = require("./controllers/registroTurnosETL");
let pathAsesorias = "./resources/Registro de asesorías Zona Centro 2023 (Respuestas) (3).xlsx";
let pathTurnos = "./resources/Registro de turno con asesores Zona Centro (Respuestas).xlsx";

registarTurnos(pathTurnos);

//registarAsesorias(pathAsesorias);


