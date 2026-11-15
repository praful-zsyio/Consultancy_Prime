const db = require('../config/database');

class InquiryModel {
  static create({ name, email, company, phone, service, message }) {
    const stmt = db.prepare(`
      INSERT INTO inquiries (name, email, company, phone, service, message)
      VALUES (?, ?, ?, ?, ?, ?)
    `);

    const result = stmt.run(
      name.trim(),
      email.trim(),
      company ? company.trim() : null,
      phone ? phone.trim() : null,
      service || 'General Inquiry',
      message.trim()
    );

    return result.lastInsertRowid;
  }

  static findAll() {
    return db.prepare('SELECT * FROM inquiries ORDER BY created_at DESC').all();
  }

  static findById(id) {
    return db.prepare('SELECT * FROM inquiries WHERE id = ?').get(id);
  }

  static count() {
    return db.prepare('SELECT COUNT(*) as count FROM inquiries').get().count;
  }

  static deleteById(id) {
    const result = db.prepare('DELETE FROM inquiries WHERE id = ?').run(id);
    return result.changes > 0;
  }

  static deleteAll() {
    const result = db.prepare('DELETE FROM inquiries').run();
    return result.changes;
  }
}

module.exports = InquiryModel;

