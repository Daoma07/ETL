const { DataTypes } = require("sequelize");
const { conexionOrigenDB } = require('../utilidades/conexion');

const PersonaOrigen = conexionOrigenDB.define('persona',
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
        edad: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        apellido: {
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

module.exports = { PersonaOrigen };
