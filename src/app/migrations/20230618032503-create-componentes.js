'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('componentes', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      id_dispositivo: {
        type: Sequelize.STRING,
        references:{
          model:'dispositivos',
          key:'id'
        },
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      },
      config_mac: {
        type: Sequelize.STRING
      },
      config_ip: {
        type: Sequelize.STRING
      },
      config_user: {
        type: Sequelize.STRING
      },
      config_contraseña: {
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
      procesador_modelo: {
        type: Sequelize.STRING
      },
      ram_cantidad: {
        type: Sequelize.INTEGER
      },
      ram_modulo: {
        type: Sequelize.STRING
      },
      almacenamiento_cantidad: {
        type: Sequelize.INTEGER
      },
      almacenamiento_detalle: {
        type: Sequelize.STRING
      },
      video: {
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
    await queryInterface.dropTable('componentes');
  }
};