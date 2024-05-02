const { Empleado, Asesoria } = require("../utilities/modeloBasesDestinoExcel");
/**
 * Modelo de Empleado
 */
Asesoria.belongsTo(Empleado, { foreignKey: "id_empleado" });

module.exports = { Empleado, Asesoria }; 