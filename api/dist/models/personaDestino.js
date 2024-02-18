"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonaDestino = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = require("../db/connection");
exports.PersonaDestino = connection_1.destinationDB.define('persona', {
    nombre: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false
    },
    telefono: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false
});
