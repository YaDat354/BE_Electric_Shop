/**
 * Script tạo tài khoản admin
 * Chạy: node scripts/create-admin.js
 */

require('dotenv').config({ path: require('path').join(__dirname, '..', '.env') });
const bcrypt = require('bcryptjs');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
  logging: false
});

async function createAdmin() {
  try {
    await sequelize.authenticate();
    console.log('✅ Connected to database');

    // Tìm roleid của Quản trị viên
    const [roles] = await sequelize.query('SELECT id, name FROM "Roles" ORDER BY id');
    console.log('Roles in DB:', roles);

    const adminRole = roles.find((r) => r.name === 'Quản trị viên') || roles.find((r) => r.id === 2);
    if (!adminRole) {
      console.error('❌ Không tìm thấy role Quản trị viên. Hãy chạy seeders trước.');
      process.exit(1);
    }
    console.log(`✅ Admin role: id=${adminRole.id}, name=${adminRole.name}`);

    const hashedPassword = bcrypt.hashSync('admin123', 10);

    // Kiểm tra nếu admin đã tồn tại
    const [existing] = await sequelize.query(`SELECT id, username FROM "Users" WHERE username = 'admin'`);

    if (existing.length > 0) {
      console.log(`⚠️  Tài khoản admin đã tồn tại (id=${existing[0].id}). Đang cập nhật mật khẩu...`);
      await sequelize.query(`UPDATE "Users" SET password = :password, roleid = :roleid, updatedAt = NOW() WHERE username = 'admin'`, {
        replacements: { password: hashedPassword, roleid: adminRole.id }
      });
      console.log('✅ Đã cập nhật mật khẩu admin thành công!');
    } else {
      await sequelize.query(
        `INSERT INTO "Users" (name, username, password, email, gender, address, phonenumber, roleid, "createdAt", "updatedAt")
         VALUES (:name, :username, :password, :email, :gender, :address, :phonenumber, :roleid, NOW(), NOW())`,
        {
          replacements: {
            name: 'Administrator',
            username: 'admin',
            password: hashedPassword,
            email: 'admin@shopease.com',
            gender: 'male',
            address: '123 Admin Street',
            phonenumber: '0900000000',
            roleid: adminRole.id
          }
        }
      );
      console.log('✅ Tạo tài khoản admin thành công!');
    }

    console.log('\n========== THÔNG TIN ĐĂNG NHẬP ADMIN ==========');
    console.log('  Username : admin');
    console.log('  Password : admin123');
    console.log('  Role     : Quản trị viên');
    console.log('================================================\n');

    await sequelize.close();
  } catch (error) {
    console.error('❌ Lỗi:', error.message);
    process.exit(1);
  }
}

createAdmin();
