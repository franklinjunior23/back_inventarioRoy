'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dispositivo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      dispositivo.belongsTo(models.sucursal,{
        foreignKey:'id_sucursal',
        targetKey:'id'
      })
      dispositivo.hasMany(models.componente,{
        foreignKey:'id_dispositivo'
      })
      dispositivo.hasMany(models.informe,{
        foreignKey:'id_dispositivo'
      })
      // define association here
    }
  }
  dispositivo.init({
    id_sucursal: DataTypes.INTEGER,
    id_empleado: DataTypes.STRING,
    tipo: DataTypes.STRING,
    marca: DataTypes.STRING,
    modelo: DataTypes.STRING,
    serie: DataTypes.STRING,
    conexion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'dispositivo',
  });
  return dispositivo;
};