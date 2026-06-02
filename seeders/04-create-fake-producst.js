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
    await queryInterface.bulkInsert(
      'Products',
      [
        {
          categoriesid: 1,
          price: 23990000,
          brand: 'Samsung',
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoriesid: 1,
          price: 19990000,
          brand: 'Apple',
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoriesid: 1,
          price: 12990000,
          brand: 'Xiaomi',
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoriesid: 1,
          price: 8990000,
          brand: 'Oppo',
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoriesid: 1,
          price: 7490000,
          brand: 'Vivo',
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoriesid: 2,
          price: 18990000,
          brand: 'Dell',
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoriesid: 2,
          price: 21490000,
          brand: 'HP',
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoriesid: 2,
          price: 32990000,
          brand: 'ASUS',
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoriesid: 2,
          price: 28990000,
          brand: 'Lenovo',
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoriesid: 2,
          price: 25990000,
          brand: 'Acer',
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoriesid: 3,
          price: 1990000,
          brand: 'Sony',
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoriesid: 3,
          price: 3490000,
          brand: 'JBL',
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoriesid: 3,
          price: 2490000,
          brand: 'Anker',
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoriesid: 3,
          price: 1590000,
          brand: 'Edifier',
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoriesid: 3,
          price: 2790000,
          brand: 'Marshall',
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoriesid: 4,
          price: 1690000,
          brand: 'Xiaomi',
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoriesid: 4,
          price: 2390000,
          brand: 'Aqara',
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoriesid: 4,
          price: 1290000,
          brand: 'TP-Link',
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoriesid: 4,
          price: 790000,
          brand: 'EZVIZ',
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoriesid: 4,
          price: 990000,
          brand: 'Google',
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoriesid: 5,
          price: 5890000,
          brand: 'Panasonic',
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoriesid: 5,
          price: 7490000,
          brand: 'Sharp',
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoriesid: 5,
          price: 4690000,
          brand: 'Electrolux',
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoriesid: 5,
          price: 2190000,
          brand: 'Philips',
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoriesid: 5,
          price: 3190000,
          brand: 'Tefal',
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoriesid: 6,
          price: 690000,
          brand: 'Anker',
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoriesid: 6,
          price: 390000,
          brand: 'Ugreen',
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoriesid: 6,
          price: 299000,
          brand: 'Sandisk',
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoriesid: 6,
          price: 1490000,
          brand: 'Xiaomi',
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoriesid: 6,
          price: 990000,
          brand: 'Logitech',
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Products', null, {});
  }
};

