'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('personal', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      id_sucursal:{
        type:Sequelize.INTEGER,
        references:{
          model:'sucursal',
          key:'id'
        },
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      }
      ,
      nombre: {
        type: Sequelize.STRING
      },
      apellido: {
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
    await queryInterface.dropTable('personal');
  }
};