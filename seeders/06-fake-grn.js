'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('Grns', [
      { date: new Date(), totalprice: 182800000, userid: 4, createdAt: new Date(), updatedAt: new Date() },
      { date: new Date(), totalprice: 132700000, userid: 5, createdAt: new Date(), updatedAt: new Date() },
      { date: new Date(), totalprice: 77100000, userid: 4, createdAt: new Date(), updatedAt: new Date() },
      { date: new Date(), totalprice: 22650000, userid: 5, createdAt: new Date(), updatedAt: new Date() },
      { date: new Date(), totalprice: 42500000, userid: 4, createdAt: new Date(), updatedAt: new Date() },
      { date: new Date(), totalprice: 39450000, userid: 5, createdAt: new Date(), updatedAt: new Date() },
      { date: new Date(), totalprice: 120800000, userid: 4, createdAt: new Date(), updatedAt: new Date() },
      { date: new Date(), totalprice: 91550000, userid: 5, createdAt: new Date(), updatedAt: new Date() },
      { date: new Date(), totalprice: 33060000, userid: 4, createdAt: new Date(), updatedAt: new Date() },
      { date: new Date(), totalprice: 122100000, userid: 5, createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Grns', null, {});
  }
};


