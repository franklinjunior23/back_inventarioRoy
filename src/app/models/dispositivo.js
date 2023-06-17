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
      DISPOSITIVO.belongsTo(models.EMPLEADO,{
        foreignKey:'id_sucursal',
        targetKey:'id'
      })
      DISPOSITIVO.belongsTo(models.SUCURSAL,{
        foreignKey:'id_sucursal',
        targetKey:'id'
      })
      DISPOSITIVO.hasOne(models.COMPONENTE,{
        foreignKey:'id_dispositivo'
      })
      DISPOSITIVO.hasMany(models.INFORME,{
        foreignKey:'id_dispositivo'
      })

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