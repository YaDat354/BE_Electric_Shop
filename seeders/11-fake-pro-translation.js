'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     */
    await queryInterface.bulkInsert('Pro_translations', [
      {
        productid: 1,
        languagecode: 'en',
        name: 'Samsung Galaxy S24 Ultra',
        description: 'Flagship Samsung smartphone featuring a 6.8-inch Dynamic AMOLED display, Snapdragon 8 Gen 3 processor, S Pen support, and a 200MP camera system.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 2,
        languagecode: 'en',
        name: 'Apple iPhone 15',
        description: 'Apple smartphone with A16 Bionic chip, USB-C connectivity, advanced camera features, and long-term iOS support.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 3,
        languagecode: 'en',
        name: 'Xiaomi Redmi Note 13 5G',
        description: 'Affordable 5G smartphone with AMOLED display, 108MP camera, and fast charging support.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 4,
        languagecode: 'en',
        name: 'OPPO Reno11 F 5G',
        description: 'Mid-range smartphone with sleek design, portrait photography features, and long battery life.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 5,
        languagecode: 'en',
        name: 'vivo Y28',
        description: 'Budget-friendly smartphone with large battery capacity and smooth daily performance.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 6,
        languagecode: 'en',
        name: 'Dell Inspiron 15 3530',
        description: '15.6-inch productivity laptop powered by Intel Core processors, suitable for office work and study.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 7,
        languagecode: 'en',
        name: 'HP Pavilion 15',
        description: 'Versatile laptop with modern design, solid multitasking capabilities, and Full HD display.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 8,
        languagecode: 'en',
        name: 'ASUS TUF Gaming F15',
        description: 'Gaming laptop featuring Intel Core processors, NVIDIA RTX graphics, and a high-refresh-rate display.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 9,
        languagecode: 'en',
        name: 'Lenovo IdeaPad Slim 5',
        description: 'Thin-and-light productivity laptop with excellent battery life and modern connectivity.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 10,
        languagecode: 'en',
        name: 'Acer Swift Go 14',
        description: 'Portable ultrabook with OLED display and Intel Core Ultra processor.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 11,
        languagecode: 'en',
        name: 'Sony MDR-EX155AP',
        description: 'In-ear wired earphones with integrated microphone and balanced audio performance.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 12,
        languagecode: 'en',
        name: 'JBL Flip 6',
        description: 'Portable Bluetooth speaker with powerful sound, IP67 water resistance, and long battery life.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 13,
        languagecode: 'en',
        name: 'Soundcore Liberty 4 NC',
        description: 'True wireless earbuds with adaptive noise cancellation and Hi-Res audio support.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 14,
        languagecode: 'en',
        name: 'Edifier R1280DB',
        description: 'Powered bookshelf speakers with Bluetooth connectivity and balanced sound signature.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 15,
        languagecode: 'en',
        name: 'Marshall Acton III',
        description: 'Compact Bluetooth speaker with iconic Marshall design and room-filling sound.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 16,
        languagecode: 'en',
        name: 'Xiaomi Smart Air Purifier 4',
        description: 'Smart air purifier with HEPA filtration, OLED display, and app control.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 17,
        languagecode: 'en',
        name: 'Aqara Hub M2',
        description: 'Smart home hub supporting Zigbee devices, automation routines, and voice assistants.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 18,
        languagecode: 'en',
        name: 'TP-Link Tapo P110',
        description: 'Smart Wi-Fi plug with energy monitoring and remote control via mobile app.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 19,
        languagecode: 'en',
        name: 'EZVIZ H1C',
        description: 'Indoor security camera with Full HD video, night vision, and motion detection alerts.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 20,
        languagecode: 'en',
        name: 'Google Nest Mini (2nd Gen)',
        description: 'Compact smart speaker with Google Assistant and smart-home voice control.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 21,
        languagecode: 'en',
        name: 'Panasonic NN-ST65JBYUE',
        description: 'Microwave oven with multiple cooking presets and inverter heating technology.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 22,
        languagecode: 'en',
        name: 'Sharp KS-COM18V',
        description: 'Digital rice cooker with multiple cooking modes and keep-warm functionality.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 23,
        languagecode: 'en',
        name: 'Electrolux E5EK1-50ST',
        description: 'Stainless steel electric kettle with fast boiling and automatic shutoff.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 24,
        languagecode: 'en',
        name: 'Philips STH3020/16',
        description: 'Portable handheld garment steamer for quick wrinkle removal at home or while traveling.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 25,
        languagecode: 'en',
        name: 'Tefal Easy Fry Essential EY1308',
        description: 'Digital air fryer with multiple cooking programs and reduced-oil cooking.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 26,
        languagecode: 'en',
        name: 'Anker 735 Charger (Nano II 65W)',
        description: 'Compact GaN charger with triple-port fast charging for phones, tablets, and laptops.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 27,
        languagecode: 'en',
        name: 'UGREEN USB-C to USB-C 100W Cable',
        description: 'Braided USB-C cable supporting 100W Power Delivery fast charging and data transfer.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 28,
        languagecode: 'en',
        name: 'SanDisk Ultra microSDXC 128GB',
        description: 'High-speed microSD card suitable for smartphones, cameras, and portable gaming devices.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 29,
        languagecode: 'en',
        name: 'Xiaomi Redmi Power Bank 20000mAh',
        description: 'High-capacity portable battery with dual USB output and fast charging support.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 30,
        languagecode: 'en',
        name: 'Logitech M331 Silent Plus',
        description: 'Wireless mouse featuring silent clicks, ergonomic design, and long battery life.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
            {
        productid: 1,
        languagecode: 'vi',
        name: 'Samsung Galaxy S24 Ultra',
        description: 'Điện thoại flagship của Samsung với màn hình Dynamic AMOLED 6.8 inch, bút S Pen và hệ thống camera 200MP.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 2,
        languagecode: 'vi',
        name: 'Apple iPhone 15',
        description: 'Điện thoại iOS với chip A16 Bionic, cổng USB-C và khả năng hỗ trợ cập nhật phần mềm lâu dài.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 3,
        languagecode: 'vi',
        name: 'Xiaomi Redmi Note 13 5G',
        description: 'Điện thoại 5G giá tốt với màn hình AMOLED, camera 108MP và sạc nhanh.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 4,
        languagecode: 'vi',
        name: 'OPPO Reno11 F 5G',
        description: 'Điện thoại tầm trung với thiết kế hiện đại, camera chân dung đẹp và pin bền bỉ.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 5,
        languagecode: 'vi',
        name: 'vivo Y28',
        description: 'Điện thoại phổ thông với pin dung lượng lớn và hiệu năng ổn định cho nhu cầu hằng ngày.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 6,
        languagecode: 'vi',
        name: 'Dell Inspiron 15 3530',
        description: 'Laptop văn phòng 15.6 inch phù hợp cho học tập, làm việc và họp trực tuyến.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 7,
        languagecode: 'vi',
        name: 'HP Pavilion 15',
        description: 'Laptop đa năng với thiết kế hiện đại, màn hình Full HD và khả năng đa nhiệm tốt.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 8,
        languagecode: 'vi',
        name: 'ASUS TUF Gaming F15',
        description: 'Laptop gaming trang bị card đồ họa RTX, màn hình tần số quét cao và hệ thống tản nhiệt hiệu quả.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 9,
        languagecode: 'vi',
        name: 'Lenovo IdeaPad Slim 5',
        description: 'Laptop mỏng nhẹ với thời lượng pin dài và hiệu năng phù hợp cho công việc hằng ngày.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 10,
        languagecode: 'vi',
        name: 'Acer Swift Go 14',
        description: 'Ultrabook gọn nhẹ với màn hình OLED sắc nét và bộ xử lý Intel Core Ultra.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 11,
        languagecode: 'vi',
        name: 'Sony MDR-EX155AP',
        description: 'Tai nghe nhét tai có dây với micro tích hợp và chất lượng âm thanh cân bằng.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 12,
        languagecode: 'vi',
        name: 'JBL Flip 6',
        description: 'Loa Bluetooth di động chống nước IP67 với âm thanh mạnh mẽ và pin lâu.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 13,
        languagecode: 'vi',
        name: 'Soundcore Liberty 4 NC',
        description: 'Tai nghe không dây hỗ trợ chống ồn chủ động thích ứng và âm thanh Hi-Res.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 14,
        languagecode: 'vi',
        name: 'Edifier R1280DB',
        description: 'Loa bookshelf tích hợp Bluetooth với chất âm cân bằng cho giải trí và làm việc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 15,
        languagecode: 'vi',
        name: 'Marshall Acton III',
        description: 'Loa Bluetooth mang phong cách cổ điển với âm thanh mạnh mẽ đặc trưng của Marshall.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 16,
        languagecode: 'vi',
        name: 'Xiaomi Smart Air Purifier 4',
        description: 'Máy lọc không khí thông minh với bộ lọc HEPA, màn hình OLED và điều khiển qua ứng dụng.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 17,
        languagecode: 'vi',
        name: 'Aqara Hub M2',
        description: 'Trung tâm điều khiển nhà thông minh hỗ trợ Zigbee và nhiều kịch bản tự động hóa.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 18,
        languagecode: 'vi',
        name: 'TP-Link Tapo P110',
        description: 'Ổ cắm thông minh Wi-Fi hỗ trợ điều khiển từ xa và theo dõi điện năng tiêu thụ.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 19,
        languagecode: 'vi',
        name: 'EZVIZ H1C',
        description: 'Camera giám sát trong nhà Full HD với ghi hình ban đêm và phát hiện chuyển động.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 20,
        languagecode: 'vi',
        name: 'Google Nest Mini (Thế hệ 2)',
        description: 'Loa thông minh tích hợp Google Assistant hỗ trợ điều khiển thiết bị bằng giọng nói.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 21,
        languagecode: 'vi',
        name: 'Panasonic NN-ST65JBYUE',
        description: 'Lò vi sóng tích hợp nhiều chế độ nấu và công nghệ gia nhiệt hiệu quả.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 22,
        languagecode: 'vi',
        name: 'Sharp KS-COM18V',
        description: 'Nồi cơm điện tử đa chức năng với khả năng giữ ấm và nhiều chế độ nấu.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 23,
        languagecode: 'vi',
        name: 'Electrolux E5EK1-50ST',
        description: 'Ấm đun nước siêu tốc bằng thép không gỉ với tính năng tự ngắt an toàn.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 24,
        languagecode: 'vi',
        name: 'Philips STH3020/16',
        description: 'Bàn ủi hơi nước cầm tay nhỏ gọn giúp làm phẳng quần áo nhanh chóng.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 25,
        languagecode: 'vi',
        name: 'Tefal Easy Fry Essential EY1308',
        description: 'Nồi chiên không dầu kỹ thuật số với nhiều chế độ nấu và giảm lượng dầu mỡ.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 26,
        languagecode: 'vi',
        name: 'Anker 735 Charger (Nano II 65W)',
        description: 'Củ sạc GaN 65W nhỏ gọn hỗ trợ sạc nhanh cho điện thoại, máy tính bảng và laptop.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 27,
        languagecode: 'vi',
        name: 'UGREEN USB-C to USB-C 100W Cable',
        description: 'Cáp USB-C bọc dù hỗ trợ sạc nhanh Power Delivery 100W và truyền dữ liệu tốc độ cao.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 28,
        languagecode: 'vi',
        name: 'SanDisk Ultra microSDXC 128GB',
        description: 'Thẻ nhớ tốc độ cao phù hợp cho điện thoại, camera và thiết bị lưu trữ di động.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 29,
        languagecode: 'vi',
        name: 'Xiaomi Redmi Power Bank 20000mAh',
        description: 'Pin dự phòng dung lượng lớn hỗ trợ nhiều cổng sạc và cơ chế bảo vệ an toàn.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 30,
        languagecode: 'vi',
        name: 'Logitech M331 Silent Plus',
        description: 'Chuột không dây với nút bấm yên tĩnh, thiết kế công thái học và pin bền bỉ.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     */
    await queryInterface.bulkDelete('Pro_translations', null, {});
  }
};

