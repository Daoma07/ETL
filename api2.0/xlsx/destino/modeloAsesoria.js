const { Asesoria, Asesorado,
  TipoJuicio, Motivo,
  Empleado } = require("../utilities/modeloBasesDestinoExcel");

/*
* Modelo de asesoria el cual contiene los atributos de una asesoria y establece
 las relaciones con los modelos de asesor, turno,tipo de juicio, asesorado y detalle asesoria catalogo
*/
Asesoria.belongsTo(Empleado, { foreignKey: "id_empleado" });
Asesoria.belongsTo(Asesorado, { foreignKey: "id_asesorado" });
Asesoria.belongsTo(TipoJuicio, { foreignKey: "id_tipo_juicio" });
Asesoria.belongsTo(Motivo, { foreignKey: "id_motivo" });



module.exports = {
  Asesoria
  , Asesorado, Empleado,
  TipoJuicio, Motivo
};