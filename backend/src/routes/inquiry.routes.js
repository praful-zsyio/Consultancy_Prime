const express = require('express');
const router = express.Router();
const InquiryController = require('../controllers/inquiry.controller');

router.post('/', InquiryController.createInquiry);
router.get('/', InquiryController.getInquiries);
router.delete('/', InquiryController.deleteAllInquiries);
router.get('/:id', InquiryController.getInquiryById);
router.delete('/:id', InquiryController.deleteInquiry);

module.exports = router;

