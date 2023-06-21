'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class empleados extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      empleados.belongsTo(models.sucursales,{
        foreignKey:'id_sucursal',
        targetKey:'id'
      })
      empleados.hasMany(models.dispositivos,{
        foreignKey:'id_empleado'
      })
      // define association here
    }
  }
  empleados.init({
    id_sucursal:DataTypes.INTEGER,
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
    modelName: 'empleados',
  });
  return empleados;
};