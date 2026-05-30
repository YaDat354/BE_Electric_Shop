'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     */
    await queryInterface.bulkInsert('pro_translations', [
      {
        productid: 1,
        languagecode: 'en',
        name: 'Samsung Galaxy A15 5G',
        description: 'Mid-range smartphone with a large battery, 5G support, and a versatile camera system for everyday use.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 2,
        languagecode: 'en',
        name: 'Samsung Galaxy A05s',
        description: 'Affordable smartphone ideal for calling, browsing, and basic app tasks with stable performance.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 3,
        languagecode: 'en',
        name: 'OPPO Reno 12',
        description: 'Stylish OPPO smartphone with AI camera features and fast charging for a smooth mobile experience.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 4,
        languagecode: 'en',
        name: 'Vivo Y100',
        description: 'AMOLED display smartphone with long battery life, suitable for work and entertainment all day.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 5,
        languagecode: 'en',
        name: 'Xiaomi Redmi Note 13',
        description: 'Powerful phone with a 108MP camera and reliable battery life for multimedia users.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 6,
        languagecode: 'en',
        name: 'Lenovo IdeaPad 1 14',
        description: 'Compact 14-inch laptop designed for study and office work with a slim and lightweight body.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 7,
        languagecode: 'en',
        name: 'Dell Inspiron 15 3501',
        description: 'Reliable Dell laptop with stable performance for multitasking and everyday office applications.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 8,
        languagecode: 'en',
        name: 'HP Stream 11',
        description: 'Lightweight and budget-friendly laptop suitable for mobile users and basic productivity tasks.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 9,
        languagecode: 'en',
        name: 'Acer Aspire 3',
        description: '15.6-inch laptop with SSD storage, ideal for light entertainment and everyday computing.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 10,
        languagecode: 'en',
        name: 'ASUS VivoBook 15',
        description: 'Stylish ASUS laptop with enough power for office work and student use.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 11,
        languagecode: 'en',
        name: 'Lenovo Tab M7',
        description: 'Compact 7-inch tablet great for reading, browsing, and light everyday tasks.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 12,
        languagecode: 'en',
        name: 'Samsung Galaxy Tab A7 Lite',
        description: 'Lightweight tablet with long battery life, perfect for entertainment and online learning.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 13,
        languagecode: 'en',
        name: 'Amazon Fire 7',
        description: 'Affordable tablet optimized for reading, streaming video, and basic web browsing.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 14,
        languagecode: 'en',
        name: 'Huawei MatePad T8',
        description: '8-inch tablet with stable performance for study and light entertainment.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 15,
        languagecode: 'en',
        name: 'Alcatel 1T 7',
        description: 'Small tablet ideal for children and as a secondary device for simple tasks.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 16,
        languagecode: 'en',
        name: 'Anker 737 Charger',
        description: '65W GaN charger with multiple ports, fast charging for laptops, tablets, and phones.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 17,
        languagecode: 'en',
        name: 'Baseus Magnetic Wireless Car Charger',
        description: 'Wireless car charger and mount that secures your phone safely while driving.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 18,
        languagecode: 'en',
        name: 'UGREEN 65W GaN Charger',
        description: 'Compact USB-C fast charger from UGREEN for a wide range of devices.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 19,
        languagecode: 'en',
        name: 'Logitech K380 Bluetooth Keyboard',
        description: 'Portable Bluetooth keyboard with multi-device pairing and comfortable typing.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 20,
        languagecode: 'en',
        name: 'Sony WH-CH520 Bluetooth Headphones',
        description: 'Wireless headphones with balanced sound, long battery life, and a lightweight fit.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 21,
        languagecode: 'en',
        name: 'Xiaomi Smart Plug 3',
        description: 'Smart plug with remote control via app and energy monitoring features.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 22,
        languagecode: 'en',
        name: 'TP-Link Tapo C100 Camera',
        description: 'Indoor security camera with 1080p recording, night vision, and motion detection.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 23,
        languagecode: 'en',
        name: 'Philips Hue White Smart Bulb Starter Kit',
        description: 'Smart lighting kit controllable by app and compatible with voice assistants.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 24,
        languagecode: 'en',
        name: 'Xiaomi Smart LED Strip',
        description: 'Color-changing LED strip for room decoration and smart home integration.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 25,
        languagecode: 'en',
        name: 'Google Nest Mini (2nd Gen)',
        description: 'Smart speaker with Google Assistant for voice control and smart home management.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 26,
        languagecode: 'en',
        name: 'UGREEN USB-C to HDMI Cable',
        description: '4K USB-C to HDMI cable for laptops and smartphones with video output support.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 27,
        languagecode: 'en',
        name: 'Anker Soundcore Life A1 Earbuds',
        description: 'True wireless earbuds with clear sound and long battery life.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 28,
        languagecode: 'en',
        name: 'Logitech M190 Wireless Mouse',
        description: 'Compact wireless mouse designed for durability and easy daily use.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 29,
        languagecode: 'en',
        name: 'Razer Kraken X USB Gaming Headset',
        description: 'Gaming headset with noise-cancelling mic and comfortable ear cushions.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 30,
        languagecode: 'en',
        name: 'Sony HT-S40R Soundbar & Subwoofer Set',
        description: 'Wireless soundbar with subwoofer for immersive movie and music experiences.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 1,
        languagecode: 'vi',
        name: 'Samsung Galaxy A15 5G',
        description: 'Điện thoại tầm trung với pin lớn, hỗ trợ 5G và camera đa chế độ cho nhu cầu hàng ngày.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 2,
        languagecode: 'vi',
        name: 'Samsung Galaxy A05s',
        description: 'Smartphone giá rẻ ổn định, phù hợp cho gọi điện, lướt web và sử dụng ứng dụng cơ bản.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 3,
        languagecode: 'vi',
        name: 'OPPO Reno 12',
        description: 'Smartphone OPPO thiết kế thời trang với camera AI và sạc nhanh cho trải nghiệm mượt mà.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 4,
        languagecode: 'vi',
        name: 'Vivo Y100',
        description: 'Điện thoại màn hình AMOLED, pin bền bỉ và phù hợp cho công việc, giải trí suốt ngày dài.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 5,
        languagecode: 'vi',
        name: 'Xiaomi Redmi Note 13',
        description: 'Redmi Note 13 với camera 108MP và pin lớn, phục vụ tốt cho nhu cầu đa phương tiện.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 6,
        languagecode: 'vi',
        name: 'Lenovo IdeaPad 1 14',
        description: 'Laptop 14 inch nhỏ gọn, phù hợp học tập và văn phòng với thiết kế mỏng nhẹ.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 7,
        languagecode: 'vi',
        name: 'Dell Inspiron 15 3501',
        description: 'Laptop Dell với hiệu năng ổn định, xử lý tốt đa nhiệm và các tác vụ văn phòng.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 8,
        languagecode: 'vi',
        name: 'HP Stream 11',
        description: 'Laptop HP nhẹ, tiết kiệm và phù hợp với người dùng cần thiết bị di động cơ bản.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 9,
        languagecode: 'vi',
        name: 'Acer Aspire 3',
        description: 'Laptop 15.6 inch trang bị SSD, phù hợp cho giải trí và công việc nhẹ.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 10,
        languagecode: 'vi',
        name: 'ASUS VivoBook 15',
        description: 'ASUS VivoBook 15 thiết kế trẻ trung với hiệu năng phù hợp cho học tập và văn phòng.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 11,
        languagecode: 'vi',
        name: 'Lenovo Tab M7',
        description: 'Tablet 7 inch nhỏ gọn, phù hợp đọc sách, lướt web và sử dụng nhẹ nhàng.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 12,
        languagecode: 'vi',
        name: 'Samsung Galaxy Tab A7 Lite',
        description: 'Tablet nhẹ, pin lâu, rất thích hợp cho giải trí và học online cơ bản.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 13,
        languagecode: 'vi',
        name: 'Amazon Fire 7',
        description: 'Tablet giá rẻ tối ưu cho đọc sách, xem video và lướt web.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 14,
        languagecode: 'vi',
        name: 'Huawei MatePad T8',
        description: 'Tablet 8 inch với hiệu năng ổn định cho học tập và giải trí nhẹ.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 15,
        languagecode: 'vi',
        name: 'Alcatel 1T 7',
        description: 'Máy tính bảng nhỏ xinh, phù hợp trẻ em và người dùng cần thiết bị phụ.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 16,
        languagecode: 'vi',
        name: 'Anker 737 Charger',
        description: 'Củ sạc Anker 65W GaN đa cổng, sạc nhanh cho laptop, tablet và smartphone.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 17,
        languagecode: 'vi',
        name: 'Baseus Magnetic Wireless Car Charger',
        description: 'Giá đỡ sạc không dây Baseus dùng trên ô tô, cố định an toàn và tiện lợi khi lái xe.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 18,
        languagecode: 'vi',
        name: 'UGREEN 65W GaN Charger',
        description: 'Adapter USB-C 65W nhỏ gọn của UGREEN hỗ trợ sạc nhanh cho nhiều thiết bị.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 19,
        languagecode: 'vi',
        name: 'Bàn phím Bluetooth Logitech K380',
        description: 'Bàn phím Bluetooth nhỏ gọn, kết nối đa thiết bị và gõ phím thoải mái.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 20,
        languagecode: 'vi',
        name: 'Tai nghe Bluetooth Sony WH-CH520',
        description: 'Tai nghe không dây Sony với pin lâu, âm thanh cân bằng và thoải mái khi đeo.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 21,
        languagecode: 'vi',
        name: 'Ổ cắm thông minh Xiaomi Smart Plug 3',
        description: 'Ổ cắm thông minh điều khiển từ xa qua app và theo dõi điện năng tiêu thụ.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 22,
        languagecode: 'vi',
        name: 'Camera TP-Link Tapo C100',
        description: 'Camera an ninh trong nhà 1080p với quan sát ngày đêm và cảnh báo chuyển động.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 23,
        languagecode: 'vi',
        name: 'Philips Hue White Smart Bulb Starter Kit',
        description: 'Bộ đèn thông minh Philips Hue điều khiển qua app và tích hợp trợ lý giọng nói.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 24,
        languagecode: 'vi',
        name: 'Dải đèn LED thông minh Xiaomi',
        description: 'Dải đèn LED đổi màu Xiaomi trang trí phòng và kết nối với hệ sinh thái nhà thông minh.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 25,
        languagecode: 'vi',
        name: 'Google Nest Mini (Thế hệ 2)',
        description: 'Loa thông minh Google Nest Mini hỗ trợ trợ lý ảo và điều khiển thiết bị nhà thông minh.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 26,
        languagecode: 'vi',
        name: 'Cáp UGREEN USB-C sang HDMI',
        description: 'Cáp USB-C sang HDMI 4K cho laptop và smartphone hỗ trợ xuất hình chất lượng cao.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 27,
        languagecode: 'vi',
        name: 'Tai nghe Anker Soundcore Life A1',
        description: 'Tai nghe true wireless Anker với âm thanh trong trẻo và pin dùng lâu dài.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 28,
        languagecode: 'vi',
        name: 'Chuột không dây Logitech M190',
        description: 'Chuột không dây Logitech nhỏ gọn, bền bỉ và dễ dùng cho văn phòng.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 29,
        languagecode: 'vi',
        name: 'Tai nghe chơi game Razer Kraken X USB',
        description: 'Tai nghe chơi game với mic chống ồn và đệm tai mềm mại cho trải nghiệm lâu dài.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 30,
        languagecode: 'vi',
        name: 'Soundbar Sony HT-S40R kèm subwoofer',
        description: 'Soundbar không dây đi kèm subwoofer, nâng cao trải nghiệm phim ảnh và âm nhạc.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     */
    await queryInterface.bulkDelete('pro_translations', null, {});
  }
};