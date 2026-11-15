const Database = require('better-sqlite3');
const path = require('path');
const bcrypt = require('bcryptjs');
try {
  require('dotenv').config();
} catch (e) {}

const dbPath = path.resolve(__dirname, '../../consultancy.db');
const db = new Database(dbPath);

// Performance optimization (WAL mode)
db.pragma('journal_mode = WAL');

// Initialize database tables
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT DEFAULT 'admin',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS inquiries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    company TEXT,
    phone TEXT,
    service TEXT,
    message TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS job_applications (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    experience TEXT,
    skills TEXT,
    role_applied TEXT,
    resume_note TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS subscribers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

// Seed default HR admin user if not exists
const existingAdmin = db.prepare('SELECT id FROM users WHERE email = ?').get('skilltaanlent@skilltanlent.com');
if (!existingAdmin) {
  const hashedPassword = bcrypt.hashSync('admin123', 10);
  db.prepare(`
    INSERT INTO users (name, email, password, role)
    VALUES (?, ?, ?, ?)
  `).run('Shubham Paradkar', 'skilltaanlent@skilltanlent.com', hashedPassword, 'admin');
  console.log('✅ Default HR Admin created: skilltaanlent@skilltanlent.com / admin123');
}

console.log('SQLite database connected at:', dbPath);

module.exports = db;
