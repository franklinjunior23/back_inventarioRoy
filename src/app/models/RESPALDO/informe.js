'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class informe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      informe.belongsTo(models.dispositivo,{
        foreignKey:'id_dispositivo',
        targetKey:'id'
      })
      // define association here
    }
  }
  informe.init({
    id_dispositivo: DataTypes.STRING,
    accion: DataTypes.STRING,
    fecha: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'informe',
  });
  return informe;
};