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
    await queryInterface.bulkInsert('Orders', [
      {
        userid: 1,
        totalprice: 25370000,
        phonenumber: '0912345678',
        address: '123 Đường Trần Hưng Đạo, Quận 1, TP.HCM',
        promotionid: null,
        status: 1,
        process: new Date(),
        shipping: new Date(),
        delivered: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userid: 2,
        totalprice: 23470000,
        phonenumber: '0988123456',
        address: '56 Nguyễn Huệ, Quận 1, TP.HCM',
        promotionid: null,
        status: 1,
        process: new Date(),
        shipping: new Date(),
        delivered: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userid: 3,
        totalprice: 32990000,
        phonenumber: '0908765432',
        address: '21 Lê Lợi, Quận 3, TP.HCM',
        promotionid: null,
        status: 1,
        process: new Date(),
        shipping: new Date(),
        delivered: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userid: 4,
        totalprice: 7130000,
        phonenumber: '0977654321',
        address: '789 Cách Mạng Tháng 8, Quận 10, TP.HCM',
        promotionid: null,
        status: 1,
        process: new Date(),
        shipping: new Date(),
        delivered: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userid: 5,
        totalprice: 10580000,
        phonenumber: '0911223344',
        address: '145 Phan Xích Long, Phú Nhuận, TP.HCM',
        promotionid: null,
        status: 1,
        process: new Date(),
        shipping: new Date(),
        delivered: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userid: 1,
        totalprice: 21480000,
        phonenumber: '0933456789',
        address: '200 Nguyễn Trãi, Quận 5, TP.HCM',
        promotionid: null,
        status: 1,
        process: new Date(),
        shipping: new Date(),
        delivered: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userid: 2,
        totalprice: 22778000,
        phonenumber: '0967890123',
        address: '80 Lý Tự Trọng, Quận 1, TP.HCM',
        promotionid: null,
        status: 1,
        process: new Date(),
        shipping: new Date(),
        delivered: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userid: 3,
        totalprice: 6970000,
        phonenumber: '0988765432',
        address: '302 Cộng Hòa, Tân Bình, TP.HCM',
        promotionid: null,
        status: 1,
        process: new Date(),
        shipping: new Date(),
        delivered: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userid: 4,
        totalprice: 16970000,
        phonenumber: '0919988776',
        address: '11 Võ Văn Ngân, Thủ Đức, TP.HCM',
        promotionid: null,
        status: 0,
        process: new Date(),
        shipping: null,
        delivered: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userid: 5,
        totalprice: 29370000,
        phonenumber: '0977332211',
        address: '45 Nguyễn Văn Cừ, Quận 5, TP.HCM',
        promotionid: null,
        status: 0,
        process: new Date(),
        shipping: null,
        delivered: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Orders', null, {});
  }
};


