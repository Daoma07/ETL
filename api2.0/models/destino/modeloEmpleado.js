const { Empleado, Asesoria } = require("../../utilities/modeloBasesDestino");
/**
 * Modelo de Empleado
 */
Asesoria.belongsTo(Empleado, { foreignKey: "id_empleado" });

module.exports = { Empleado, Asesoria }; 