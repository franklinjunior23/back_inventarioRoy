'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class empresas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      empresas.hasMany(models.sucursales,{
        foreignKey:'id_empresa'
      })
      // define association here
    }
  }
  empresas.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'empresas',
  });
  return empresas;
};