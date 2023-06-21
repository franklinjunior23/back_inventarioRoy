'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('dispositivo', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      id_sucursal: {
        type: Sequelize.INTEGER,
        references:{
          model:'sucursal',
          key:'id'
        },
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      },
      id_empleado: {
        type: Sequelize.STRING,
        references:{
          model:'personal',
          key:'id'
        },
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
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
    await queryInterface.dropTable('dispositivo');
  }
};