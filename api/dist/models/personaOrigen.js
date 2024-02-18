"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonaOrigen = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = require("../db/connection");
class PersonaOrigen extends sequelize_1.Model {
}
exports.PersonaOrigen = PersonaOrigen;
PersonaOrigen.init({
    nombre: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false
    },
    edad: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    apellido: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false
    },
    telefono: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: false
    }
}, {
    sequelize: connection_1.originDB,
    modelName: 'Persona',
    freezeTableName: true,
    timestamps: false
});
