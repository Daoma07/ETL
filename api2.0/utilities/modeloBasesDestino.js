const { conexionDestinoDB } = require("../db/conexion");

const { DataTypes } = require("sequelize");

/**
 * @typedef {Object} Zona
 * @property {number} id_zona
 * @property {string} nombre_zona
 *  */
const Zona = conexionDestinoDB.define(
    "zonas",
    {
        id_zona: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        nombre_zona: {
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
        name: {
            singular: "zona",
            plural: "zonas",
        },
    }
);

/**
 * @typedef {Object} TipoJuicio 
 * @property {number} id_tipo_juicio
 *  @property {string} tipo_juicio
 * */
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

/**
 * @typedef {Object} Motivo
 * @property {number} id_motivo
 * @property {string} descripcion_motivo
 * */
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





/**
 * @typedef {Object} Turno
 * @property {number} id_turno
 * @property {Date} fecha_turno
 * @property {Time} hora_turno
 * */
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
                is: /^([01]\d|2[0-3]):([0-5]\d)$/,
            },
        },
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

/**
 * @typedef {Object} Asesorado
 * @property {number} id_asesorado
 * @property {boolean} estatus_trabajo
 * @property {number} id_motivo
 * @property {number} id_estado_civil
 * @property {number} numero_hijos
 * @property {number} ingreso_mensual
 * */
const Asesorado = conexionDestinoDB.define(
    "asesorados",
    {
        id_asesorado: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
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
        ingreso_mensual: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: null,
        },
        id_genero: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        estado: {
            type: DataTypes.STRING(60),
            allowNull: false,
        },
        municipio: {
            type: DataTypes.STRING(60),
            allowNull: false,
        },
        ciudad: {
            type: DataTypes.STRING(60),
            allowNull: false,
        },
        codigo_postal: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        edad: {
            type: DataTypes.INTEGER,
            allowNull: false,
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






/**
 * @typedef {Object} MunicipioDistro
 * @property {number} id_municipio_distrito
 * @property {string} nombre_municipio
 * @property {number} id_distrito_judicial
 * */
const MunicipioDistro = conexionDestinoDB.define(
    "municipios_distritos",
    {
        // Define the "municipios" table
        id_municipio_distrito: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        nombre_municipio: {
            type: DataTypes.STRING(100),
            allowNull: false, // Don't allow null
        },
    },
    {
        timestamps: false, // Don't include timestamps
        freezeTableName: true, // Use the same table name
        tableName: "municipios_distritos", // Use the same table name
        underscored: true, // Use snake_case not camelCase
        name: {
            singular: "municipio_distrito",
            plural: "municipios_distritos",
        },
    }
);

/**
 * @typedef {Object} Empleado
 * @property {number} id_empleado
 * @property {string} tipo_empleado
 * */

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
            allowNull: false, // Don't allow null
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

/**
 * @typedef {Object} Asesor
 * @property {number} id_asesor
 * @property {string} nombre_asesor
 * @property {number} id_zona
 * */
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

/**
 * @typedef {Object} Defensor
 * @property {number} id_defensor
 * @property {string} nombre_defensor
 * */

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

/**
 *  @typedef {Object} DistritoJudicial
 * @property {number} id_distrito_judicial
 * @property {string} nombre_distrito_judicial
 * @property {number} id_zona
 * @property {number} id_municipio_distrito
 * */
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
        id_turno: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: null,
        },
        id_asesorado: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        id_tipo_juicio: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        estado: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        municipio: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        id_motivo: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        id_distrito_judicial: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        id_zona: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        id_municipio_distrito: {
            type: DataTypes.INTEGER,
            allowNull: false,
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
//Module exports
module.exports = {
    Turno,
    Empleado, DistritoJudicial,
    MunicipioDistro, Defensor,
    Asesorado,
    Asesoria,
    EstadoCivil,
    Asesor,
    Genero,
    Zona,
    Motivo,
    TipoJuicio,
};
