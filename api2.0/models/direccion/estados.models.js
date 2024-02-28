const { Estado, Municipio } = require('../../utilities/modeloBasesDireccion');

Estado.hasMany(Municipio, { foreignKey: 'id_estado' }); // 1:M (1 Estado tiene muchos Municipios) 

module.exports = {
    Estado,
    Municipio,
};

