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
    await queryInterface.bulkInsert('OrdersDetails', [
      { orderid: 1, productid: 1, quantity: 1, createdAt: new Date(), updatedAt: new Date() },
      { orderid: 1, productid: 26, quantity: 2, createdAt: new Date(), updatedAt: new Date() },

      { orderid: 2, productid: 6, quantity: 1, createdAt: new Date(), updatedAt: new Date() },
      { orderid: 2, productid: 12, quantity: 1, createdAt: new Date(), updatedAt: new Date() },
      { orderid: 2, productid: 30, quantity: 1, createdAt: new Date(), updatedAt: new Date() },

      { orderid: 3, productid: 8, quantity: 1, createdAt: new Date(), updatedAt: new Date() },

      { orderid: 4, productid: 16, quantity: 2, createdAt: new Date(), updatedAt: new Date() },
      { orderid: 4, productid: 18, quantity: 2, createdAt: new Date(), updatedAt: new Date() },
      { orderid: 4, productid: 27, quantity: 3, createdAt: new Date(), updatedAt: new Date() },

      { orderid: 5, productid: 21, quantity: 1, createdAt: new Date(), updatedAt: new Date() },
      { orderid: 5, productid: 23, quantity: 1, createdAt: new Date(), updatedAt: new Date() },

      { orderid: 6, productid: 2, quantity: 1, createdAt: new Date(), updatedAt: new Date() },
      { orderid: 6, productid: 29, quantity: 1, createdAt: new Date(), updatedAt: new Date() },

      { orderid: 7, productid: 7, quantity: 1, createdAt: new Date(), updatedAt: new Date() },
      { orderid: 7, productid: 28, quantity: 2, createdAt: new Date(), updatedAt: new Date() },
      { orderid: 7, productid: 26, quantity: 1, createdAt: new Date(), updatedAt: new Date() },

      { orderid: 8, productid: 24, quantity: 1, createdAt: new Date(), updatedAt: new Date() },
      { orderid: 8, productid: 25, quantity: 1, createdAt: new Date(), updatedAt: new Date() },
      { orderid: 8, productid: 14, quantity: 1, createdAt: new Date(), updatedAt: new Date() },

      { orderid: 9, productid: 3, quantity: 1, createdAt: new Date(), updatedAt: new Date() },
      { orderid: 9, productid: 11, quantity: 2, createdAt: new Date(), updatedAt: new Date() },

      { orderid: 10, productid: 10, quantity: 1, createdAt: new Date(), updatedAt: new Date() },
      { orderid: 10, productid: 17, quantity: 1, createdAt: new Date(), updatedAt: new Date() },
      { orderid: 10, productid: 20, quantity: 1, createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('OrdersDetails', null, {});
  }
};


