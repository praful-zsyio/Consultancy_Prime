const db = require('../config/database');

class SubscriberModel {
  static subscribe(email) {
    const stmt = db.prepare('INSERT OR IGNORE INTO subscribers (email) VALUES (?)');
    const result = stmt.run(email.trim());
    return result.changes > 0;
  }

  static findAll() {
    return db.prepare('SELECT * FROM subscribers ORDER BY created_at DESC').all();
  }

  static count() {
    return db.prepare('SELECT COUNT(*) as count FROM subscribers').get().count;
  }
}

module.exports = SubscriberModel;

