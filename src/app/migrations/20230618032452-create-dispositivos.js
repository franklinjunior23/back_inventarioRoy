'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('dispositivos', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      id_sucursal: {
        type: Sequelize.INTEGER,
        references:{
          model:'sucursales',
          key:'id'
        },
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
      },
      id_empleado: {
        allowNull: true,
        type: Sequelize.STRING,
        references:{
          model:'empleados',
          key:'id'
        },
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
      },
      tipo: {
        type: Sequelize.STRING
      },
      marca: {
        type: Sequelize.STRING
      },
      modelo: {
        type: Sequelize.STRING
      },
      serie: {
        type: Sequelize.STRING
      },
      conexion: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('dispositivos');
  }
};