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
      'Categories',
      [
        {
          name: 'Smartphones',
          description: 'Dien thoai thong minh chinh hang voi da dang phan khuc va thuong hieu.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Laptops',
          description: 'Laptop cho hoc tap, van phong va gaming voi cau hinh toi uu.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Audio',
          description: 'Thiet bi am thanh ca nhan nhu tai nghe, loa va phu kien ghi am.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Smart Home',
          description: 'San pham nha thong minh giup tu dong hoa va tiet kiem nang luong.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Home Appliances',
          description: 'Do gia dung dien may phuc vu nhu cau sinh hoat hang ngay.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Accessories',
          description: 'Phu kien cong nghe nhu cap sac, cap ket noi, pin du phong va them nho.',
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
    await queryInterface.bulkDelete('Categories', null, {});
  }
};

