const express = require('express');
const router = express.Router();

const authRoutes = require('./auth.routes');
const companyRoutes = require('./company.routes');
const inquiryRoutes = require('./inquiry.routes');
const applicationRoutes = require('./application.routes');

router.use('/auth', authRoutes);
router.use('/', companyRoutes);
router.use('/inquiries', inquiryRoutes);
router.use('/applications', applicationRoutes);

module.exports = router;
