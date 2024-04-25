const Excel = require('exceljs');

async function readExcel(filePath) {
    const workbook = new Excel.Workbook();

    try {
        await workbook.xlsx.readFile(filePath);
        const worksheet = workbook.getWorksheet(1);

        const data = [];

        worksheet.eachRow((row, rowNumber) => {
            if (rowNumber !== 1) {
                const rowData = {
                    marcaTemporal: row.getCell(1).value,
                    nombreAsesor: row.getCell(2).value,
                    nombreUsuario: row.getCell(3).value,
                    genero: row.getCell(4).value,
                    numeroTelefono: row.getCell(5).value,
                    colonia: row.getCell(6).value,
                    trabaja: row.getCell(7).value,
                    ingresoMensual: row.getCell(8).value,
                    motivoNegativa: row.getCell(9).value,
                    estadoCivil: row.getCell(10).value,
                    numeroHijos: row.getCell(11).value,
                    tipoJuicio: row.getCell(12).value,
                    resumenHechos: row.getCell(13).value,
                    conclusion: row.getCell(14).value,
                    usuarioRecibio: row.getCell(15).value,
                    cumpleRequisitos: row.getCell(16).value
                };
                data.push(rowData);
            }
        });

        return data;
    } catch (error) {
        console.error('Error al leer el archivo Excel:', error);
        throw error;
    }
}

module.exports = {
    readExcel
};
