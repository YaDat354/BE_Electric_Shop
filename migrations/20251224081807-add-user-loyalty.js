'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // loyaltypoint đã được tạo từ create-users
    return Promise.resolve();
  },

  async down(queryInterface, Sequelize) {
    return Promise.resolve();
  }
};