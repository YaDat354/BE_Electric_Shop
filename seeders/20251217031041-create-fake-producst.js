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
      'products',
      [
        {
          categoriesid: 1,
          price: 4309000,
          brand: 'Samsung',
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoriesid: 1,
          price: 599000,
          brand: 'Samsung',
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoriesid: 1,
          price: 4599000,
          brand: 'OPPO',
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoriesid: 1,
          price: 950000,
          brand: 'Vivo',
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoriesid: 1,
          price: 1590000,
          brand: 'Xiaomi',
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoriesid: 2,
          price: 649000,
          brand: 'Lenovo',
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoriesid: 2,
          price: 2799000,
          brand: 'Dell',
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoriesid: 2,
          price: 840000,
          brand: 'HP',
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoriesid: 2,
          price: 2150000,
          brand: 'Acer',
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoriesid: 2,
          price: 1325000,
          brand: 'ASUS',
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoriesid: 3,
          price: 129000,
          brand: 'Lenovo',
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoriesid: 3,
          price: 130000,
          brand: 'Samsung',
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoriesid: 3,
          price: 150000,
          brand: 'Amazon',
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoriesid: 3,
          price: 150000,
          brand: 'Huawei',
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoriesid: 3,
          price: 130000,
          brand: 'Alcatel',
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoriesid: 4,
          price: 839000,
          brand: 'Anker',
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoriesid: 4,
          price: 789000,
          brand: 'Baseus',
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoriesid: 4,
          price: 145000,
          brand: 'UGREEN',
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoriesid: 4,
          price: 650000,
          brand: 'Logitech',
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoriesid: 4,
          price: 699000,
          brand: 'Sony',
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoriesid: 5,
          price: 160000,
          brand: 'Xiaomi',
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoriesid: 5,
          price: 270000,
          brand: 'TP-Link',
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoriesid: 5,
          price: 280000,
          brand: 'Philips',
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoriesid: 5,
          price: 245000,
          brand: 'Xiaomi',
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoriesid: 5,
          price: 869000,
          brand: 'Google',
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoriesid: 6,
          price: 120000,
          brand: 'UGREEN',
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoriesid: 6,
          price: 180000,
          brand: 'Anker',
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoriesid: 6,
          price: 60000,
          brand: 'Logitech',
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoriesid: 6,
          price: 1390000,
          brand: 'Razer',
          quantity: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoriesid: 6,
          price: 2590000,
          brand: 'Sony',
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
    await queryInterface.bulkDelete('products', null, {});
  }
};