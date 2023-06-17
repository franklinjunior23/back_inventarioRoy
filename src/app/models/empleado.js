'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EMPLEADO extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      EMPLEADO.belongsTo(models.SUCURSAL,{
        foreignKey:'id_sucursal',
        targetKey:'id'
      })
      
      EMPLEADO.hasOne(models.DISPOSITIVO,{
        foreignKey:'id_empleado'
      })
      // define association here
    }
  }
  EMPLEADO.init({
    id_sucursal: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    apellidos: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'EMPLEADO',
  });
  return EMPLEADO;
};