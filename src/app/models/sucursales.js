'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sucursales extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      sucursales.belongsTo(models.empresas,{
        foreignKey:'id_empresa',
        targetKey:'id'
      })

      sucursales.hasMany(models.empleados,{
        foreignKey:'id_sucursal'
      })

      sucursales.hasMany(models.dispositivos,{
        foreignKey:'id_sucursal'
      })
      // define association here
    }
  }
  sucursales.init({
    nombre: DataTypes.STRING,
    id_empresa: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'sucursales',
  });
  return sucursales;
};