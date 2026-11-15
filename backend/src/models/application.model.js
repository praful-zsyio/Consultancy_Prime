const db = require('../config/database');

class ApplicationModel {
  static create({ name, email, phone, experience, skills, roleApplied, resumeNote }) {
    const stmt = db.prepare(`
      INSERT INTO job_applications (name, email, phone, experience, skills, role_applied, resume_note)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `);

    const result = stmt.run(
      name.trim(),
      email.trim(),
      phone.trim(),
      experience || 'Not specified',
      skills || '',
      roleApplied || 'General Candidate',
      resumeNote || ''
    );

    return result.lastInsertRowid;
  }

  static findAll() {
    return db.prepare('SELECT * FROM job_applications ORDER BY created_at DESC').all();
  }

  static findById(id) {
    return db.prepare('SELECT * FROM job_applications WHERE id = ?').get(id);
  }

  static count() {
    return db.prepare('SELECT COUNT(*) as count FROM job_applications').get().count;
  }
}

module.exports = ApplicationModel;

