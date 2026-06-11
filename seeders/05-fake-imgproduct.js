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
          url: 'https://res.cloudinary.com/dh2vwdi4o/image/upload/q_auto/f_auto/v1781118216/Samsung_Galaxy_S24_Ultra_jury4j.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productid: 2,
          url: 'https://res.cloudinary.com/dh2vwdi4o/image/upload/q_auto/f_auto/v1781118272/Apple_iPhone_15_mfd1st.webp',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productid: 3,
          url: 'https://res.cloudinary.com/dh2vwdi4o/image/upload/q_auto/f_auto/v1781118454/Redmi_Note_13_Pro_5G_echnjw.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productid: 4,
          url: 'https://res.cloudinary.com/dh2vwdi4o/image/upload/q_auto/f_auto/v1781118313/OPPO_Reno11_F_5G_c78ttw.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productid: 5,
          url: 'https://res.cloudinary.com/dh2vwdi4o/image/upload/q_auto/f_auto/v1781118490/vivo_Y28_kzobbh.webp',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productid: 6,
          url: 'https://res.cloudinary.com/dh2vwdi4o/image/upload/q_auto/f_auto/v1781118539/Dell_Inspiron_15_3530_y3mlif.webp',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productid: 7,
          url: 'https://res.cloudinary.com/dh2vwdi4o/image/upload/q_auto/f_auto/v1781118752/HP_Pavilion_15_sm337t.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productid: 8,
          url: 'https://res.cloudinary.com/dh2vwdi4o/image/upload/q_auto/f_auto/v1781121952/ASUS_TUF_Gaming_F15_xbl0l1.webp',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productid: 9,
          url: 'https://res.cloudinary.com/dh2vwdi4o/image/upload/q_auto/f_auto/v1781121630/Lenovo_IdeaPad_Slim_5_qznfzs.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productid: 10,
          url: 'https://res.cloudinary.com/dh2vwdi4o/image/upload/q_auto/f_auto/v1781121627/Acer_Swift_Go_14_exvjku.webp',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productid: 11,
          url: 'https://res.cloudinary.com/dh2vwdi4o/image/upload/q_auto/f_auto/v1781121626/Sony_MDR-EX155AP_jjdloh.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productid: 12,
          url: 'https://res.cloudinary.com/dh2vwdi4o/image/upload/q_auto/f_auto/v1781121622/JBL_Flip_6_cifw89.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productid: 13,
          url: 'https://res.cloudinary.com/dh2vwdi4o/image/upload/q_auto/f_auto/v1781121626/Soundcore_Liberty_4_NC_fjtryu.webp',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productid: 14,
          url: 'https://res.cloudinary.com/dh2vwdi4o/image/upload/q_auto/f_auto/v1781121625/Edifier_R1280DB_uia4wv.webp',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productid: 15,
          url: 'https://res.cloudinary.com/dh2vwdi4o/image/upload/q_auto/f_auto/v1781121625/Marshall_Acton_III_qkphyc.webp',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productid: 16,
          url: 'https://res.cloudinary.com/dh2vwdi4o/image/upload/q_auto/f_auto/v1781121626/Xiaomi_Smart_Air_Purifier_4_zijdsr.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productid: 17,
          url: 'https://res.cloudinary.com/dh2vwdi4o/image/upload/q_auto/f_auto/v1781121624/Aqara_Hub_M2_cnu6rt.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productid: 18,
          url: 'https://res.cloudinary.com/dh2vwdi4o/image/upload/q_auto/f_auto/v1781121624/TP-Link_Tapo_P110_y17i2t.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productid: 19,
          url: 'https://res.cloudinary.com/dh2vwdi4o/image/upload/q_auto/f_auto/v1781121623/EZVIZ_H1C_udxdcg.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productid: 20,
          url: 'https://res.cloudinary.com/dh2vwdi4o/image/upload/q_auto/f_auto/v1781121623/Google_Nest_Mini_2nd_Gen_crloth.webp',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productid: 21,
          url: 'https://res.cloudinary.com/dh2vwdi4o/image/upload/q_auto/f_auto/v1781121623/Panasonic_NN-ST65JBYUE_gxc3xc.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productid: 22,
          url: 'https://res.cloudinary.com/dh2vwdi4o/image/upload/q_auto/f_auto/v1781121622/Sharp_KS-COM18V_wwcmay.webp',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productid: 23,
          url: 'https://res.cloudinary.com/dh2vwdi4o/image/upload/q_auto/f_auto/v1781121622/Electrolux_E5EK1-50ST_rfoqdl.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productid: 24,
          url: 'https://res.cloudinary.com/dh2vwdi4o/image/upload/q_auto/f_auto/v1781121621/Philips_STH3020-16_wrr4xx.webp',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productid: 25,
          url: 'https://res.cloudinary.com/dh2vwdi4o/image/upload/q_auto/f_auto/v1781121621/Tefal_Easy_Fry_Essential_EY1308_iuewt9.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productid: 26,
          url: 'https://res.cloudinary.com/dh2vwdi4o/image/upload/q_auto/f_auto/v1781121621/Anker_735_Charger_Nano_II_65W_anvd5u.webp',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productid: 27,
          url: 'https://res.cloudinary.com/dh2vwdi4o/image/upload/q_auto/f_auto/v1781121621/UGREEN_USB-C_to_USB-C_100W_Cable_oc4rq6.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productid: 28,
          url: 'https://res.cloudinary.com/dh2vwdi4o/image/upload/q_auto/f_auto/v1781121621/SanDisk_Ultra_microSDXC_128GB_ruerl1.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productid: 29,
          url: 'https://res.cloudinary.com/dh2vwdi4o/image/upload/q_auto/f_auto/v1781121620/Xiaomi_Redmi_Power_Bank_20000mAh_sm6ymm.webp',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          productid: 30,
          url: 'https://res.cloudinary.com/dh2vwdi4o/image/upload/q_auto/f_auto/v1781121620/Logitech_M331_Silent_Plus_ttekow.webp',
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

