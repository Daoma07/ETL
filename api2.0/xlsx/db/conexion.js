const destinoDB = require('../config/destinoDBexcel.json');
//const origenDB = require('../config/origenDB.json');
//const codigosPostalesDB = require('../config/codigosPostalesDB.json');
const { Sequelize } = require('sequelize');

// Conexion a la base de datos destino
const conexionDestinoDB = new Sequelize(
    destinoDB.database.databaseName,
    destinoDB.database.username,
    destinoDB.database.password,
    {
        host: destinoDB.database.host,
        port: destinoDB.database.port,
        dialect: 'mysql',
        logging: false,
    }
);

// Conexion a la base de datos origen
// const conexionOrigenDB = new Sequelize(
//     origenDB.database.databaseName,
//     origenDB.database.username,
//     origenDB.database.password,
//     {
//         host: origenDB.database.host,
//         port: origenDB.database.port,
//         dialect: 'mysql',
//         logging: false,
//     }
// );

// // Conexion a la base de datos origen
// const conexionCodigosPostalesDB = new Sequelize(
//     codigosPostalesDB.database.databaseName,
//     codigosPostalesDB.database.username,
//     codigosPostalesDB.database.password,
//     {
//         host: codigosPostalesDB.database.host,
//         port: codigosPostalesDB.database.port,
//         dialect: 'mysql',
//         logging: false,
//     }
// );

// Exportar la conexion
module.exports = {
    conexionDestinoDB,
    //conexionOrigenDB,
    //conexionCodigosPostalesDB,
    Sequelize
};
