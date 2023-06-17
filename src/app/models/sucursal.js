'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SUCURSAL extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      SUCURSAL.belongsTo(models.EMPRESA,{
        foreignKey:'id_empresa',
        targetKey:'id'
      })
      SUCURSAL.hasMany(models.EMPLEADO,{
        foreignKey:'id_sucursal'
      })
      SUCURSAL.hasOne(models.INFORME,{
        foreignKey:'id_sucursal'
      })
      // define association here
    }
  }
  SUCURSAL.init({
    id_empresa: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SUCURSAL',
  });
  return SUCURSAL;
};