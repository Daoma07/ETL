const { Asesoria, Turno, Asesorado,
  TipoJuicio, DistritoJudicial, Motivo,
  Zona, Empleado, MunicipioDistro } = require("../../utilities/modeloBasesDestino");

/*
* Modelo de asesoria el cual contiene los atributos de una asesoria y establece
 las relaciones con los modelos de asesor, turno,tipo de juicio, asesorado y detalle asesoria catalogo
*/
Asesoria.belongsTo(Empleado, { foreignKey: "id_empleado" });
Asesoria.belongsTo(Asesorado, { foreignKey: "id_asesorado" });
Asesoria.belongsTo(TipoJuicio, { foreignKey: "id_tipo_juicio" });
Asesoria.belongsTo(Motivo, { foreignKey: "id_motivo" });
Asesoria.belongsTo(DistritoJudicial, { foreignKey: "id_distrito_judicial" });
Asesoria.belongsTo(Zona, { foreignKey: "id_zona" });
Asesoria.belongsTo(MunicipioDistro, { foreignKey: "id_municipio_distrito" });



module.exports = {
  Asesoria
  , Turno, Asesorado, Empleado,
  TipoJuicio, Motivo,
  DistritoJudicial, Zona,
  MunicipioDistro
};