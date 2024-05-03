const { conexionDestinoDB } = require("../db/conexion");

const { DataTypes } = require("sequelize");

/**
 * @typedef {Object} EstadoCivil
 * @property {number} id_estado_civil
 * @property {string} estado_civil
  */
const EstadoCivil = conexionDestinoDB.define(
    "estados_civiles",
    {
        id_estado_civil: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        estado_civil: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [0, 50],
            },
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

/**
 * @typedef {Object} Genero
 * @property {number} id_genero
 * @property {string} descripcion_genero
 * */
const Genero = conexionDestinoDB.define(
    "generos",
    {
        id_genero: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        descripcion_genero: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [0, 25],
            },
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
        name: {
            singular: "genero",
            plural: "generos",
        },
    }
);

const DistritoJudicial = conexionDestinoDB.define(
    "distritos_judiciales",
    {
        id_distrito_judicial: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        nombre_distrito_judicial: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [0, 100],
            },
        }
    },
    {
        freezeTableName: true,
        timestamps: false,
        name: {
            singular: "distrito_judicial",
            plural: "distritos_judiciales",
        },
    }
);

const Asesorado = conexionDestinoDB.define(
    "asesorados",
    {
        id_asesorado: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_estado_civil: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        numero_hijos: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: null,
        },
        id_genero: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        colonia: {
            type: DataTypes.STRING(500),
            allowNull: true,
        }
    },
    {
        freezeTableName: true,
        timestamps: false,
        name: {
            singular: "asesorado",
            plural: "asesorados",
        },
    }
);

const Asesoria = conexionDestinoDB.define(
    "asesorias",
    {
        id_asesoria: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        estatus_requisitos: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: null,
        },
        fecha_registro: {
            type: DataTypes.DATEONLY,
            allowNull: true,
            defaultValue: null,
        },
        id_empleado: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        id_asesorado: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        id_tipo_juicio: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        id_motivo: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }
    },
    {
        freezeTableName: true,
        timestamps: false,
        name: {
            singular: "asesoria",
            plural: "asesorias",
        },
    }
);

const Motivo = conexionDestinoDB.define(
    "motivos",
    {
        id_motivo: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        descripcion_motivo: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [0, 75],
            },
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
        name: {
            singular: "motivo",
            plural: "motivos",
        },
    }
);


const Empleado = conexionDestinoDB.define(
    "empleados",
    {
        id_empleado: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        tipo_empleado: {
            type: DataTypes.STRING(100),
            allowNull: false,
        }
    },
    {
        freezeTableName: true,
        timestamps: false,
        name: {
            singular: "empleado",
            plural: "empleados",
        },
    }
);

const Asesor = conexionDestinoDB.define(
    "asesores",
    {
        id_asesor: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        nombre_asesor: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [0, 100],
            },
        }
    },
    {
        freezeTableName: true,
        timestamps: false,
        name: {
            singular: "asesor",
            plural: "asesores",
        },
    }
);

const Defensor = conexionDestinoDB.define(
    "defensores",
    {
        id_defensor: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        nombre_defensor: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [0, 100],
            },
        }
    },
    {
        freezeTableName: true,
        timestamps: false,
        name: {
            singular: "defensor",
            plural: "defensores",
        },
    }
);

const Turno = conexionDestinoDB.define(
    "turnos",
    {
        id_turno: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        fecha_turno: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                isDate: true,
            },
        },
        hora_turno: {
            type: DataTypes.TIME,
            allowNull: false,
            validate: {
                is: /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/
            },


        }
    },
    {
        freezeTableName: true,
        timestamps: false,
        name: {
            singular: "turno",
            plural: "turnos",
        },
    }
);

const TipoJuicio = conexionDestinoDB.define(
    "tipos_juicios",
    {
        id_tipo_juicio: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        tipo_juicio: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [0, 100],
            },
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

(async () => {
    await conexionDestinoDB.sync({ force: true }); // This will drop the table if it already exists
    console.log("Creacion de Tablas completada!");
  })();

module.exports = {
    Turno,
    Empleado, DistritoJudicial,
    Defensor,
    Asesorado,
    Asesoria,
    EstadoCivil,
    Asesor,
    Genero,
    Motivo,
    TipoJuicio
};
