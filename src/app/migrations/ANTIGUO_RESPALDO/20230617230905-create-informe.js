'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('informe', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      id_dispositivo: {
        type: Sequelize.STRING
        ,references:{
          model:'dispositivo',
          key:'id'
        },
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      },
      accion: {
        type: Sequelize.STRING
      },
      fecha: {
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
    await queryInterface.dropTable('informe');
  }
};