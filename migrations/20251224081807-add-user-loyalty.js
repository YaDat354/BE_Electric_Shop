'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const table = await queryInterface.describeTable('Users');

    if (!table.loyaltypoint) {
      await queryInterface.addColumn('Users', 'loyaltypoint', {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: true
      });
    }
  },

  async down(queryInterface, Sequelize) {
    const table = await queryInterface.describeTable('Users');

    if (table.loyaltypoint) {
      await queryInterface.removeColumn('Users', 'loyaltypoint');
    }
  }
};