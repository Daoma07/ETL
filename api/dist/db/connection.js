"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.destinationDB = exports.originDB = void 0;
const sequelize_1 = require("sequelize");
const originConfigDB = {
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'daniel2002',
    database: 'origen'
};
const destinationConfigDB = {
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'daniel2002',
    database: 'destino'
};
const originDB = new sequelize_1.Sequelize(originConfigDB);
exports.originDB = originDB;
const destinationDB = new sequelize_1.Sequelize(destinationConfigDB);
exports.destinationDB = destinationDB;
