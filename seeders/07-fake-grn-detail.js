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
    await queryInterface.bulkInsert('GrnDetails', [
      { grnid: 1, productid: 1, price: 22000000, quantity: 5, createdAt: new Date(), updatedAt: new Date() },
      { grnid: 1, productid: 2, price: 18200000, quantity: 4, createdAt: new Date(), updatedAt: new Date() },

      { grnid: 2, productid: 6, price: 16500000, quantity: 3, createdAt: new Date(), updatedAt: new Date() },
      { grnid: 2, productid: 7, price: 18800000, quantity: 2, createdAt: new Date(), updatedAt: new Date() },
      { grnid: 2, productid: 10, price: 22800000, quantity: 2, createdAt: new Date(), updatedAt: new Date() },

      { grnid: 3, productid: 21, price: 5200000, quantity: 6, createdAt: new Date(), updatedAt: new Date() },
      { grnid: 3, productid: 22, price: 6600000, quantity: 4, createdAt: new Date(), updatedAt: new Date() },
      { grnid: 3, productid: 23, price: 3900000, quantity: 5, createdAt: new Date(), updatedAt: new Date() },

      { grnid: 4, productid: 26, price: 480000, quantity: 20, createdAt: new Date(), updatedAt: new Date() },
      { grnid: 4, productid: 27, price: 260000, quantity: 30, createdAt: new Date(), updatedAt: new Date() },
      { grnid: 4, productid: 28, price: 210000, quantity: 25, createdAt: new Date(), updatedAt: new Date() },

      { grnid: 5, productid: 16, price: 1300000, quantity: 10, createdAt: new Date(), updatedAt: new Date() },
      { grnid: 5, productid: 17, price: 1850000, quantity: 8, createdAt: new Date(), updatedAt: new Date() },
      { grnid: 5, productid: 18, price: 980000, quantity: 15, createdAt: new Date(), updatedAt: new Date() },

      { grnid: 6, productid: 24, price: 1650000, quantity: 7, createdAt: new Date(), updatedAt: new Date() },
      { grnid: 6, productid: 25, price: 2450000, quantity: 6, createdAt: new Date(), updatedAt: new Date() },
      { grnid: 6, productid: 14, price: 1100000, quantity: 12, createdAt: new Date(), updatedAt: new Date() },

      { grnid: 7, productid: 3, price: 9800000, quantity: 6, createdAt: new Date(), updatedAt: new Date() },
      { grnid: 7, productid: 4, price: 6800000, quantity: 5, createdAt: new Date(), updatedAt: new Date() },
      { grnid: 7, productid: 5, price: 5600000, quantity: 5, createdAt: new Date(), updatedAt: new Date() },

      { grnid: 8, productid: 11, price: 1450000, quantity: 20, createdAt: new Date(), updatedAt: new Date() },
      { grnid: 8, productid: 12, price: 2650000, quantity: 15, createdAt: new Date(), updatedAt: new Date() },
      { grnid: 8, productid: 13, price: 1900000, quantity: 12, createdAt: new Date(), updatedAt: new Date() },

      { grnid: 9, productid: 29, price: 1020000, quantity: 12, createdAt: new Date(), updatedAt: new Date() },
      { grnid: 9, productid: 30, price: 690000, quantity: 18, createdAt: new Date(), updatedAt: new Date() },
      { grnid: 9, productid: 19, price: 560000, quantity: 15, createdAt: new Date(), updatedAt: new Date() },

      { grnid: 10, productid: 8, price: 27000000, quantity: 2, createdAt: new Date(), updatedAt: new Date() },
      { grnid: 10, productid: 9, price: 23800000, quantity: 2, createdAt: new Date(), updatedAt: new Date() },
      { grnid: 10, productid: 15, price: 2050000, quantity: 10, createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('GrnDetails', null, {});
  }
};


