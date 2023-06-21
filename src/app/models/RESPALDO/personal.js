'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class personal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      personal.belongsTo(models.sucursal,{
        foreignKey:'id_sucursal',
        targetKey:'id'
      })
      personal.hasMany(models.dispositivo,{
        foreignKey:'id_empleado'
      })
      // define association here
    }
  }
  personal.init({
    id_sucursal:DataTypes.STRING,
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    tipo_usuario: DataTypes.STRING,
    nivel_red: DataTypes.STRING,
    usuario: DataTypes.STRING,
    contraseña: DataTypes.STRING,
    anydesk_id: DataTypes.STRING,
    anydesk_contraseña: DataTypes.STRING,
    email_tipo: DataTypes.STRING,
    email_dirrecion: DataTypes.STRING,
    email_contraseña: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'personal',
  });
  return personal;
};