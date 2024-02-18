import { DataTypes, Model } from 'sequelize';
import { originDB } from '../db/connection';

class PersonaOrigen extends Model { }

PersonaOrigen.init(
  {
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
  sequelize: originDB,
  modelName: 'Persona',
  freezeTableName: true,
  timestamps: false
});

export { PersonaOrigen };

