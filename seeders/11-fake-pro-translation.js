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
        name: 'Samsung Galaxy S Series Smartphone',
        description: 'Flagship Android phone with premium display, high performance, and advanced camera system.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 2,
        languagecode: 'en',
        name: 'Apple iPhone Standard Model',
        description: 'Reliable iOS smartphone with smooth ecosystem integration and long software support.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 3,
        languagecode: 'en',
        name: 'Xiaomi Redmi 5G Smartphone',
        description: 'Value-focused smartphone with large battery, fast charging, and practical camera setup.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 4,
        languagecode: 'en',
        name: 'Oppo Mid-range Smartphone',
        description: 'Stylish phone with balanced performance and portrait-focused camera features.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 5,
        languagecode: 'en',
        name: 'Vivo Entry Smartphone',
        description: 'Affordable smartphone for everyday social media, calls, and online learning.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 6,
        languagecode: 'en',
        name: 'Dell Inspiron Laptop',
        description: 'Mainstream laptop suitable for office work, web apps, and online meetings.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 7,
        languagecode: 'en',
        name: 'HP Pavilion Laptop',
        description: 'Slim laptop with modern design, good keyboard, and strong multitasking ability.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 8,
        languagecode: 'en',
        name: 'ASUS Gaming Laptop',
        description: 'High-refresh gaming laptop with dedicated GPU for competitive games and creative workloads.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 9,
        languagecode: 'en',
        name: 'Lenovo IdeaPad Laptop',
        description: 'Dependable productivity laptop with long battery life and lightweight build.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 10,
        languagecode: 'en',
        name: 'Acer Swift Laptop',
        description: 'Portable ultrabook for students and professionals with efficient power consumption.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 11,
        languagecode: 'en',
        name: 'Sony In-ear Earbuds',
        description: 'Comfortable wired earbuds with clear mids and stable call microphone quality.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 12,
        languagecode: 'en',
        name: 'JBL Portable Bluetooth Speaker',
        description: 'Compact speaker with punchy bass and water-resistant outdoor-ready design.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 13,
        languagecode: 'en',
        name: 'Anker Noise Cancelling Earbuds',
        description: 'Wireless earbuds with hybrid ANC, long playback, and fast USB-C charging case.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 14,
        languagecode: 'en',
        name: 'Edifier Computer Speakers',
        description: 'Desktop speaker set tuned for balanced sound in music, movies, and work calls.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 15,
        languagecode: 'en',
        name: 'Marshall Bluetooth Speaker',
        description: 'Retro-style speaker with strong vocals, signature design, and multi-device pairing.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 16,
        languagecode: 'en',
        name: 'Xiaomi Smart Air Purifier',
        description: 'Smart purifier with app control, real-time AQI tracking, and HEPA filtration.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 17,
        languagecode: 'en',
        name: 'Aqara Smart Hub Kit',
        description: 'Starter smart-home hub supporting scene automation and multi-sensor management.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 18,
        languagecode: 'en',
        name: 'TP-Link Smart Plug',
        description: 'Wi-Fi smart plug for remote power control, scheduling, and energy monitoring.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 19,
        languagecode: 'en',
        name: 'EZVIZ Indoor Security Camera',
        description: '1080p indoor camera with motion alerts, two-way audio, and night vision.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 20,
        languagecode: 'en',
        name: 'Google Nest Mini Speaker',
        description: 'Voice assistant speaker for reminders, smart controls, and hands-free music.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 21,
        languagecode: 'en',
        name: 'Panasonic Inverter Microwave',
        description: 'Inverter microwave oven with even heating and multiple quick cooking presets.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 22,
        languagecode: 'en',
        name: 'Sharp Digital Rice Cooker',
        description: 'Multi-mode rice cooker with stable temperature profile and easy-clean inner pot.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 23,
        languagecode: 'en',
        name: 'Electrolux Electric Kettle',
        description: 'Fast-boil electric kettle with auto shutoff and stainless-steel heating plate.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 24,
        languagecode: 'en',
        name: 'Philips Handheld Garment Steamer',
        description: 'Quick garment care solution with compact form for home and travel usage.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 25,
        languagecode: 'en',
        name: 'Tefal Air Fryer',
        description: 'Oil-reduced cooking appliance with digital presets and large family capacity.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 26,
        languagecode: 'en',
        name: 'Anker 65W GaN Charger',
        description: 'Compact fast charger with USB-C Power Delivery for phones, tablets, and laptops.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 27,
        languagecode: 'en',
        name: 'Ugreen USB-C Cable',
        description: 'Durable braided cable supporting fast charging and high-speed data sync.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 28,
        languagecode: 'en',
        name: 'SanDisk microSD Card',
        description: 'Reliable memory card for phones, cameras, and portable gaming devices.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 29,
        languagecode: 'en',
        name: 'Xiaomi 20000mAh Power Bank',
        description: 'High-capacity power bank with dual output ports and smart safety protection.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 30,
        languagecode: 'en',
        name: 'Logitech Wireless Mouse',
        description: 'Ergonomic wireless mouse with quiet clicks and long battery endurance.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 1,
        languagecode: 'vi',
        name: 'Dien thoai Samsung Galaxy dong S',
        description: 'Dien thoai Android cao cap voi man hinh dep, hieu nang manh va camera tien tien.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 2,
        languagecode: 'vi',
        name: 'Dien thoai Apple iPhone ban tieu chuan',
        description: 'Dien thoai iOS on dinh, toi uu he sinh thai va duoc cap nhat phan mem lau dai.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 3,
        languagecode: 'vi',
        name: 'Dien thoai Xiaomi Redmi 5G',
        description: 'Smartphone gia tot voi pin lon, sac nhanh va cau hinh phu hop nhu cau pho thong.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 4,
        languagecode: 'vi',
        name: 'Dien thoai Oppo tam trung',
        description: 'Thiet ke dep, camera chan dung tot va hieu nang can bang cho su dung hang ngay.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 5,
        languagecode: 'vi',
        name: 'Dien thoai Vivo pho thong',
        description: 'Mau dien thoai de dung cho hoc tap, lien lac, giai tri co ban va mang xa hoi.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 6,
        languagecode: 'vi',
        name: 'Laptop Dell Inspiron',
        description: 'Laptop van phong on dinh, phu hop lam viec online, hoc tap va xu ly tai lieu.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 7,
        languagecode: 'vi',
        name: 'Laptop HP Pavilion',
        description: 'Thiet ke gon nhe, da nhiem tot, man hinh dep cho cong viec va giai tri.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 8,
        languagecode: 'vi',
        name: 'Laptop gaming ASUS',
        description: 'Laptop choi game voi card do hoa rieng, tan so quet cao va tan nhiet hieu qua.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 9,
        languagecode: 'vi',
        name: 'Laptop Lenovo IdeaPad',
        description: 'Laptop ben bi, pin trau, phu hop sinh vien va nhan vien van phong.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 10,
        languagecode: 'vi',
        name: 'Laptop Acer Swift',
        description: 'Ultrabook nhe, sang trong, toi uu cho di chuyen va lam viec linh hoat.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 11,
        languagecode: 'vi',
        name: 'Tai nghe Sony in-ear',
        description: 'Tai nghe co day gon nhe, am thanh ro rang va dam bao chat luong dam thoai.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 12,
        languagecode: 'vi',
        name: 'Loa Bluetooth JBL mini',
        description: 'Loa di dong am bass manh, chong nuoc nhe va thich hop di du lich.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 13,
        languagecode: 'vi',
        name: 'Tai nghe chong on Anker',
        description: 'Tai nghe true wireless ho tro chong on chu dong va thoi luong pin dai.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 14,
        languagecode: 'vi',
        name: 'Loa vi tinh Edifier',
        description: 'Loa de ban cho am thanh can bang, phu hop nghe nhac va hop truc tuyen.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 15,
        languagecode: 'vi',
        name: 'Loa Marshall Bluetooth',
        description: 'Loa thiet ke co dien, am thanh day dan va ket noi khong day on dinh.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 16,
        languagecode: 'vi',
        name: 'May loc khong khi Xiaomi',
        description: 'May loc thong minh dieu khien bang app, theo doi chat luong khong khi theo thoi gian thuc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 17,
        languagecode: 'vi',
        name: 'Bo trung tam nha thong minh Aqara',
        description: 'Hub ket noi cac cam bien va thiet lap ngu canh tu dong trong nha.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 18,
        languagecode: 'vi',
        name: 'O cam thong minh TP-Link',
        description: 'Bat tat thiet bi tu xa, hen gio tu dong va theo doi dien nang tieu thu.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 19,
        languagecode: 'vi',
        name: 'Camera trong nha EZVIZ',
        description: 'Camera giam sat Full HD co ghi hinh ban dem va dam thoai 2 chieu.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 20,
        languagecode: 'vi',
        name: 'Loa tro ly ao Google Nest Mini',
        description: 'Loa thong minh giup dieu khien nha thong minh va tim kiem thong tin bang giong noi.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 21,
        languagecode: 'vi',
        name: 'Lo vi song Panasonic Inverter',
        description: 'Lo vi song ham nong deu, tiet kiem dien va co nhieu che do nau nhanh.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 22,
        languagecode: 'vi',
        name: 'Noi com dien tu Sharp',
        description: 'Noi com da nang giu nhiet on dinh, de su dung va de ve sinh.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 23,
        languagecode: 'vi',
        name: 'Am sieu toc Electrolux',
        description: 'Am dun nuoc sieu toc voi tinh nang tu dong ngat an toan khi can nuoc.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 24,
        languagecode: 'vi',
        name: 'Ban ui hoi nuoc cam tay Philips',
        description: 'Ban ui hoi nuoc nho gon giup lam phang quan ao nhanh ma khong can cau ui lon.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 25,
        languagecode: 'vi',
        name: 'Noi chien khong dau Tefal',
        description: 'Noi chien khong dau giup giam dau mo, co che do nau tu dong va dung tich lon.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 26,
        languagecode: 'vi',
        name: 'Cu sac nhanh Anker 65W GaN',
        description: 'Cu sac cong suat cao nho gon, ho tro sac nhanh cho dien thoai va laptop.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 27,
        languagecode: 'vi',
        name: 'Cap sac USB-C Ugreen',
        description: 'Cap ben bi chong gay gap, truyen du lieu nhanh va ho tro sac nhanh.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 28,
        languagecode: 'vi',
        name: 'The nho SanDisk microSD',
        description: 'The nho toc do cao, phu hop camera, dien thoai va thiet bi ghi hinh.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 29,
        languagecode: 'vi',
        name: 'Pin du phong Xiaomi 20000mAh',
        description: 'Pin du phong dung luong lon voi nhieu cong ra va co che bao ve an toan.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        productid: 30,
        languagecode: 'vi',
        name: 'Chuot khong day Logitech',
        description: 'Chuot khong day cong thai hoc, click em va thoi gian su dung pin ben bi.',
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

