const db = require('../config/database');
const bcrypt = require('bcryptjs');

class UserModel {
  static create({ name, email, password, role = 'user' }) {
    const hashedPassword = bcrypt.hashSync(password, 10);
    const stmt = db.prepare(`
      INSERT INTO users (name, email, password, role)
      VALUES (?, ?, ?, ?)
    `);
    const result = stmt.run(name.trim(), email.trim().toLowerCase(), hashedPassword, role);
    return result.lastInsertRowid;
  }

  static findByEmail(email) {
    return db.prepare('SELECT * FROM users WHERE email = ?').get(email.trim().toLowerCase());
  }

  static findById(id) {
    return db.prepare('SELECT id, name, email, role, created_at FROM users WHERE id = ?').get(id);
  }

  static comparePassword(plainPassword, hashedPassword) {
    return bcrypt.compareSync(plainPassword, hashedPassword);
  }
}

module.exports = UserModel;

