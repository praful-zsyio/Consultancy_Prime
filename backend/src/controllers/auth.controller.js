const UserModel = require('../models/user.model');

class AuthController {
  // POST /api/auth/register
  static register(req, res, next) {
    try {
      const { name, email, password, role } = req.body;

      if (!name || !email || !password) {
        return res.status(400).json({
          success: false,
          error: 'Name, email, and password are required.'
        });
      }

      const existingUser = UserModel.findByEmail(email);
      if (existingUser) {
        return res.status(409).json({
          success: false,
          error: 'An account with this email already exists.'
        });
      }

      const userId = UserModel.create({ name, email, password, role: role || 'user' });
      const user = UserModel.findById(userId);

      return res.status(201).json({
        success: true,
        message: 'Account created successfully!',
        user
      });
    } catch (error) {
      next(error);
    }
  }

  // POST /api/auth/login
  static login(req, res, next) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({
          success: false,
          error: 'Email and password are required.'
        });
      }

      const user = UserModel.findByEmail(email);
      if (!user) {
        return res.status(401).json({
          success: false,
          error: 'Invalid email or password.'
        });
      }

      const isPasswordValid = UserModel.comparePassword(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({
          success: false,
          error: 'Invalid email or password.'
        });
      }

      return res.json({
        success: true,
        message: 'Login successful!',
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          created_at: user.created_at
        }
      });
    } catch (error) {
      next(error);
    }
  }

  // GET /api/auth/me/:id
  static getProfile(req, res, next) {
    try {
      const user = UserModel.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ success: false, error: 'User not found' });
      }
      return res.json({ success: true, user });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = AuthController;
