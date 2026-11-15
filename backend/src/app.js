const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes');
const { errorHandler, notFound } = require('./middleware/error.middleware');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Base Route
app.use('/api', apiRoutes);

// Fallback & Error Handling Middlewares
app.use(notFound);
app.use(errorHandler);

module.exports = app;

