const Excel = require('exceljs');

async function readExcel(filePath) {
    const workbook = new Excel.Workbook();

    try {
        await workbook.xlsx.readFile(filePath); // Corregir esta línea
        const worksheet = workbook.getWorksheet(1);

        const data = [];

        worksheet.eachRow((row, rowNumber) => {
            if (rowNumber !== 1) {
                const rowData = {
                    marcaTemporal: row.getCell(1).value,
                    horaAtencion: row.getCell(3).value
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
