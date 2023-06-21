'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dispositivos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      dispositivos.belongsTo(models.sucursales,{
        foreignKey:'id_sucursal',
        targetKey:'id'
      })
      dispositivos.hasMany(models.componentes,{
        foreignKey:'id_dispositivo'
      })
      dispositivos.hasMany(models.informe,{
        foreignKey:'id_dispositivo'
      })
      // define association here
    }
  }
  dispositivos.init({
    id_sucursal: DataTypes.INTEGER,
    id_empleado: DataTypes.STRING,
    tipo: DataTypes.STRING,
    marca: DataTypes.STRING,
    modelo: DataTypes.STRING,
    serie: DataTypes.STRING,
    conexion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'dispositivos',
  });
  return dispositivos;
};