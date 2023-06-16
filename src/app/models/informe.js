'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class INFORME extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  INFORME.init({
    nombre: DataTypes.STRING,
    id_sucursal: DataTypes.INTEGER,
    id_dispositivo: DataTypes.STRING,
    accion: DataTypes.STRING,
    fecha: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'INFORME',
  });
  return INFORME;
};