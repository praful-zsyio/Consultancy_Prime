# SkillTalent Solutions — MVC Backend (Port 8000)

Production-grade **MVC (Model-View-Controller)** backend built using **Node.js**, **Express.js**, **SQLite (`better-sqlite3`)**, and **JSON Web Tokens (`jsonwebtoken` + `bcryptjs`)**.

---

## 🚀 Running on Port 8000

- **Backend Base URL:** `http://localhost:8000`
- **API Base Route:** `http://localhost:8000/api`

### Start the Server:
```bash
cd d:\consultancy\backend
npm start
```

---

## 📡 Key Endpoints on Port 8000

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `http://localhost:8000/api/health` | Service health status |
| `GET` | `http://localhost:8000/api/company` | Brand info (Bengali Square, Indore) |
| `GET` | `http://localhost:8000/api/stats` | Counts of inquiries, applications & subscribers |
| `POST` | `http://localhost:8000/api/auth/login` | Login and receive JWT token |
| `POST` | `http://localhost:8000/api/auth/register` | Register new user |
| `GET` | `http://localhost:8000/api/auth/me` | Protected route (Requires `Bearer <token>`) |
| `POST` | `http://localhost:8000/api/inquiries` | Submit client requirement |
| `GET` | `http://localhost:8000/api/inquiries` | List all inquiries |
| `POST` | `http://localhost:8000/api/applications` | Submit candidate job application |
| `GET` | `http://localhost:8000/api/applications` | List all candidate applications |
