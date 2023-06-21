'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class componente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      componente.belongsTo(models.dispositivo,{
        foreignKey:'id_dispositivo',
        targetKey:'id'
      })
      // define association here
    }
  }
  componente.init({
    id_dispositivo: DataTypes.STRING,
    config_mac: DataTypes.STRING,
    config_ip: DataTypes.STRING,
    config_user: DataTypes.STRING,
    config_contraseña: DataTypes.STRING,
    placa_modelo: DataTypes.STRING,
    placa_detalle: DataTypes.STRING,
    procesador_marca: DataTypes.STRING,
    procesador_modelo: DataTypes.STRING,
    ram_cantidad: DataTypes.INTEGER,
    ram_modulo: DataTypes.STRING,
    almacenamiento_cantidad: DataTypes.INTEGER,
    almacenamiento_detalle: DataTypes.STRING,
    video: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'componente',
  });
  return componente;
};