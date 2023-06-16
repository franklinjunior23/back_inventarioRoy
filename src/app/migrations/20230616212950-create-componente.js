'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('COMPONENTEs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_dispositivo: {
        type: Sequelize.STRING
      },
      config_mac: {
        type: Sequelize.STRING
      },
      config_user: {
        type: Sequelize.STRING
      },
      placa_modelo: {
        type: Sequelize.STRING
      },
      placa_detalle: {
        type: Sequelize.STRING
      },
      procesador_marca: {
        type: Sequelize.STRING
      },
      placa_detalle: {
        type: Sequelize.STRING
      },
      almacenamiento_cantidad: {
        type: Sequelize.STRING
      },
      almacenamiento_detalle: {
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
    await queryInterface.dropTable('COMPONENTEs');
  }
};