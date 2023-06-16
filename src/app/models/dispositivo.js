'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DISPOSITIVO extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DISPOSITIVO.init({
    id_sucursal: DataTypes.INTEGER,
    id_empleado: DataTypes.STRING,
    tipo: DataTypes.STRING,
    marca: DataTypes.STRING,
    modelo: DataTypes.STRING,
    serie: DataTypes.STRING,
    conexion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DISPOSITIVO',
  });
  return DISPOSITIVO;
};