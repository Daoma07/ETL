const { Asesorado, Genero, EstadoCivil } = require("../../utilities/modeloBasesDestino");

/*
* Modelo de asesorado el cual contiene los atributos de un asesorado y establece las relaciones con los modelos de motivo y estado civil
*/
Asesorado.belongsTo(Genero, { foreignKey: "id_genero" });
Asesorado.belongsTo(EstadoCivil, { foreignKey: "id_estado_civil" });

module.exports = { Asesorado, EstadoCivil, Genero };