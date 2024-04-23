const { readExcel } = require('./conversion/asesoriasConvesion');

let pathAsesorias = "./resources/Registro de asesorías Zona Centro 2023 (Respuestas) (3).xlsx";

readExcel(pathAsesorias)
    .then(data => { const dataArray = data; })
    .catch(error => console.error(error));



