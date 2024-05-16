const winston = require('winston');
const readline = require('readline');
const fs = require('fs');
// Configuración del logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ 
        maxsize: 512000,
        maxFiles: 3,
        filename: 'bitacora.log' })
  ]
});



// Función para registrar el final del ETL
function logEnd(fechaActualizacion) {
  logger.info(`${fechaActualizacion}`);
}

function getLastLog(filePath) {
    return new Promise((resolve, reject) => {
      const rl = readline.createInterface({
        input: fs.createReadStream(filePath),
        crlfDelay: Infinity
      });
  
      let lastLogEntry = '';
  
      rl.on('line', (line) => {
        // Save the current line as the last log entry
        lastLogEntry = line;
      });
  
      rl.on('close', () => {
        // Resolve with the last log entry once the file has been read completely
        resolve(lastLogEntry);
      });
  
      rl.on('error', (err) => {
        // Reject if there is an error reading the file
        reject(err);
      });
    });
  }
  
  // Example usage
//   const logFilePath = 'bitacora.log'; // Change this to the path of your log file
//   getLastLog(logFilePath)
//     .then((lastLog) => {
//       console.log('Last log entry:', lastLog);
//     })
//     .catch((err) => {
//       console.error('Error reading log file:', err);
//     });


module.exports = {
    logEnd, getLastLog
};
