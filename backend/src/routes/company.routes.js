const express = require('express');
const router = express.Router();
const CompanyController = require('../controllers/company.controller');

router.get('/company', CompanyController.getCompanyInfo);
router.get('/health', CompanyController.getHealth);
router.get('/stats', CompanyController.getStats);
router.post('/newsletter', CompanyController.subscribeNewsletter);

module.exports = router;

