'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sucursal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      sucursal.belongsTo(models.empresa,{
        foreignKey:'id_sucursal',
        targetKey:'id'
      })

      sucursal.hasMany(models.personal,{
        foreignKey:'id_sucursal'
      })

      sucursal.hasMany(models.dispositivo,{
        foreignKey:'id_sucursal'
      })
      // define association here
    }
  }
  sucursal.init({
    nombre: DataTypes.STRING,
    id_empresa: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'sucursal',
  });
  return sucursal;
};