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
      'categories',
      [
        {
          name: 'Smartphones',
          description: 'Điện thoại thông minh từ các thương hiệu hàng đầu, phù hợp cho liên lạc, giải trí và làm việc.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Laptops',
          description: 'Laptop cấu hình đa dạng cho học tập, văn phòng và giải trí với thiết kế mỏng nhẹ.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Tablets',
          description: 'Máy tính bảng tiện dụng, màn hình sắc nét và pin lâu cho nhu cầu xem phim, học online và đọc sách.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Accessories',
          description: 'Phụ kiện điện tử thiết yếu như sạc, tai nghe, chuột, bàn phím và cáp kết nối.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Smart Home',
          description: 'Thiết bị nhà thông minh giúp điều khiển đèn, camera, âm thanh và các thiết bị gia dụng.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Audio & Peripherals',
          description: 'Thiết bị âm thanh và phụ kiện chơi game, từ tai nghe đến soundbar và bàn phím.',
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
    await queryInterface.bulkDelete('categories', null, {});
  }
};