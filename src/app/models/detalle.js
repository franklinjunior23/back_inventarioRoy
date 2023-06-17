'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DETALLE extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      DETALLE.belongsTo(models.EMPLEADO,{
        foreignKey:'id_empleado',
        targetKey:'id'
      })
      // define association here
    }
  }
  DETALLE.init({
    id_empleado: DataTypes.STRING,
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
    modelName: 'DETALLE',
  });
  return DETALLE;
};