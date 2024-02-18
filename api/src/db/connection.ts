import { Sequelize, Dialect } from "sequelize";

const originConfigDB = {
    dialect: 'mysql' as Dialect,
    host: 'localhost',
    username: 'root',
    password: 'daniel2002',
    database: 'origen'
}


const destinationConfigDB = {
    dialect: 'mysql' as Dialect,
    host: 'localhost',
    username: 'root',
    password: 'daniel2002',
    database: 'destino'
}

const originDB = new Sequelize(originConfigDB);
const destinationDB = new Sequelize(destinationConfigDB);

export { originDB, destinationDB };