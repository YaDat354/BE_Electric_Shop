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
      'Payments', // Tên bảng phân biệt hoa thường đúng với migration/model
      [
        {
          transactionid: null,
          orderid: 1,
          paymentmethod: 'COD',
          status: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          transactionid: 'VNPAY-ORD-0002',
          orderid: 2,
          paymentmethod: 'VNPAY',
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          transactionid: 'MOMO-ORD-0003',
          orderid: 3,
          paymentmethod: 'MOMO',
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          transactionid: null,
          orderid: 4,
          paymentmethod: 'COD',
          status: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          transactionid: 'VNPAY-ORD-0005',
          orderid: 5,
          paymentmethod: 'VNPAY',
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          transactionid: 'MOMO-ORD-0006',
          orderid: 6,
          paymentmethod: 'MOMO',
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          transactionid: 'VNPAY-ORD-0007',
          orderid: 7,
          paymentmethod: 'VNPAY',
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          transactionid: null,
          orderid: 8,
          paymentmethod: 'COD',
          status: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          transactionid: null,
          orderid: 9,
          paymentmethod: 'COD',
          status: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          transactionid: 'MOMO-ORD-0010',
          orderid: 10,
          paymentmethod: 'MOMO',
          status: 1,
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
    await queryInterface.bulkDelete('Payments', null, {});
  }
};


