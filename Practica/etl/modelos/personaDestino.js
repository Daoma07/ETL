const { DataTypes } = require("sequelize");
const { conexionDestinoDB } = require('../utilidades/conexion');


const PersonaDestino = conexionDestinoDB.define('persona',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        telefono: {
            type: DataTypes.STRING(20),
            allowNull: false
        }
    }, {
    freezeTableName: true,
    timestamps: false
});

module.exports = { PersonaDestino };