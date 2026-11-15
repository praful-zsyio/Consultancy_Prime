const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes');
const { errorHandler, notFound } = require('./middleware/error.middleware');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check - shows whether email config is present (never exposes values)
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    env: process.env.NODE_ENV || 'development',
    email: {
      resendApiKeySet: !!(process.env.RESEND_API_KEY || '').trim(),
      notificationEmail: process.env.NOTIFICATION_EMAIL || '(default) info@primestaffingservice.com',
      fromEmail: process.env.RESEND_FROM_EMAIL || '(default) onboarding@resend.dev'
    }
  });
});

// API Base Route
app.use('/api', apiRoutes);

// Fallback & Error Handling Middlewares
app.use(notFound);
app.use(errorHandler);

module.exports = app;

