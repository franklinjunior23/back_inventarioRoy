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
      // define association here
      informe.belongsTo(models.dispositivos,{
        foreignKey:'id_dispositivo',
        targetKey:'id'
      })
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