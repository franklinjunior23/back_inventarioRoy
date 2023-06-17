'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EMPRESA extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      EMPRESA.hasMany(models.SUCURSAL,{
        foreignKey:'id_empresa'
      })
    }
  }
  EMPRESA.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'EMPRESA',
  });
  return EMPRESA;
};