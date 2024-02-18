const destinoDB = require('../configuracion/destinoDB.json');
const origenDB = require('../configuracion/origenDB.json');
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
const conexionOrigenDB = new Sequelize(
    origenDB.database.databaseName,
    origenDB.database.username,
    origenDB.database.password,
    {
        host: origenDB.database.host,
        port: origenDB.database.port,
        dialect: 'mysql',
        logging: false,
    }
);


// Exportar la conexion
module.exports = {
    conexionDestinoDB,
    conexionOrigenDB
};
