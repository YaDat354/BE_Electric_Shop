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
      'ImagesProducts',
      [
        {
          productid: 1,
          url: 'https://res.cloudinary.com/dnbmh6lvq/image/upload/v1749704159/1_hlcx1a.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productid: 2,
          url: 'https://res.cloudinary.com/dnbmh6lvq/image/upload/v1749704190/2_kykmgn.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productid: 3,
          url: 'https://res.cloudinary.com/dh2vwdi4o/image/upload/q_auto/f_auto/v1780437686/white_iy4pma.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productid: 4,
          url: 'https://res.cloudinary.com/dh2vwdi4o/image/upload/q_auto/f_auto/v1780437686/white_iy4pma.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productid: 5,
          url: 'https://res.cloudinary.com/dh2vwdi4o/image/upload/q_auto/f_auto/v1780437686/white_iy4pma.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productid: 6,
          url: 'https://res.cloudinary.com/dh2vwdi4o/image/upload/q_auto/f_auto/v1780437686/white_iy4pma.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productid: 7,
          url: 'https://res.cloudinary.com/dh2vwdi4o/image/upload/q_auto/f_auto/v1780437686/white_iy4pma.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productid: 8,
          url: 'https://res.cloudinary.com/dh2vwdi4o/image/upload/q_auto/f_auto/v1780437686/white_iy4pma.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productid: 9,
          url: 'https://res.cloudinary.com/dh2vwdi4o/image/upload/q_auto/f_auto/v1780437686/white_iy4pma.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productid: 10,
          url: 'https://res.cloudinary.com/dh2vwdi4o/image/upload/q_auto/f_auto/v1780437686/white_iy4pma.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productid: 11,
          url: 'https://res.cloudinary.com/dh2vwdi4o/image/upload/q_auto/f_auto/v1780437686/white_iy4pma.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productid: 12,
          url: 'https://res.cloudinary.com/dh2vwdi4o/image/upload/q_auto/f_auto/v1780437686/white_iy4pma.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productid: 13,
          url: 'https://res.cloudinary.com/dh2vwdi4o/image/upload/q_auto/f_auto/v1780437686/white_iy4pma.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productid: 14,
          url: 'https://res.cloudinary.com/dh2vwdi4o/image/upload/q_auto/f_auto/v1780437686/white_iy4pma.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productid: 15,
          url: 'https://res.cloudinary.com/dh2vwdi4o/image/upload/q_auto/f_auto/v1780437686/white_iy4pma.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productid: 16,
          url: 'https://res.cloudinary.com/dh2vwdi4o/image/upload/q_auto/f_auto/v1780437686/white_iy4pma.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productid: 17,
          url: 'https://res.cloudinary.com/dh2vwdi4o/image/upload/q_auto/f_auto/v1780437686/white_iy4pma.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productid: 18,
          url: 'https://res.cloudinary.com/dh2vwdi4o/image/upload/q_auto/f_auto/v1780437686/white_iy4pma.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productid: 19,
          url: 'https://res.cloudinary.com/dh2vwdi4o/image/upload/q_auto/f_auto/v1780437686/white_iy4pma.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productid: 20,
          url: 'https://res.cloudinary.com/dh2vwdi4o/image/upload/q_auto/f_auto/v1780437686/white_iy4pma.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productid: 21,
          url: 'https://res.cloudinary.com/dnbmh6lv q/image/upload/v1749704564/21_sx8dua.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productid: 22,
          url: 'https://res.cloudinary.com/dh2vwdi4o/image/upload/q_auto/f_auto/v1780437686/white_iy4pma.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productid: 23,
          url: 'https://res.cloudinary.com/dh2vwdi4o/image/upload/q_auto/f_auto/v1780437686/white_iy4pma.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productid: 24,
          url: 'https://res.cloudinary.com/dh2vwdi4o/image/upload/q_auto/f_auto/v1780437686/white_iy4pma.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productid: 25,
          url: 'https://res.cloudinary.com/dh2vwdi4o/image/upload/q_auto/f_auto/v1780437686/white_iy4pma.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productid: 26,
          url: 'https://res.cloudinary.com/dh2vwdi4o/image/upload/q_auto/f_auto/v1780437686/white_iy4pma.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productid: 27,
          url: 'https://res.cloudinary.com/dh2vwdi4o/image/upload/q_auto/f_auto/v1780437686/white_iy4pma.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productid: 28,
          url: 'https://res.cloudinary.com/dh2vwdi4o/image/upload/q_auto/f_auto/v1780437686/white_iy4pma.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productid: 29,
          url: 'https://res.cloudinary.com/dh2vwdi4o/image/upload/q_auto/f_auto/v1780437686/white_iy4pma.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productid: 30,
          url: 'https://res.cloudinary.com/dh2vwdi4o/image/upload/q_auto/f_auto/v1780437686/white_iy4pma.jpg',
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
    await queryInterface.bulkDelete('ImagesProducts', null, {});
  }
};

