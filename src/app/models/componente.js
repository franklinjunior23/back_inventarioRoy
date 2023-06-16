'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class COMPONENTE extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  COMPONENTE.init({
    id_dispositivo: DataTypes.STRING,
    config_mac: DataTypes.STRING,
    config_user: DataTypes.STRING,
    placa_modelo: DataTypes.STRING,
    placa_detalle: DataTypes.STRING,
    procesador_marca: DataTypes.STRING,
    placa_detalle: DataTypes.STRING,
    almacenamiento_cantidad: DataTypes.STRING,
    almacenamiento_detalle: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'COMPONENTE',
  });
  return COMPONENTE;
};