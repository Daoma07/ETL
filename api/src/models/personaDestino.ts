import { DataTypes } from 'sequelize';
import { destinationDB } from '../db/connection';


export const PersonaDestino = destinationDB.define('persona',
    {
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





