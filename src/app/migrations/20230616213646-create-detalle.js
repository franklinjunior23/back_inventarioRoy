'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DETALLEs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_empleado: {
        type: Sequelize.STRING
      },
      tipo_usuario: {
        type: Sequelize.STRING
      },
      nivel_red: {
        type: Sequelize.STRING
      },
      usuario: {
        type: Sequelize.STRING
      },
      contraseña: {
        type: Sequelize.STRING
      },
      anydesk_id: {
        type: Sequelize.STRING
      },
      anydesk_contraseña: {
        type: Sequelize.STRING
      },
      email_tipo: {
        type: Sequelize.STRING
      },
      email_dirrecion: {
        type: Sequelize.STRING
      },
      email_contraseña: {
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
    await queryInterface.dropTable('DETALLEs');
  }
};