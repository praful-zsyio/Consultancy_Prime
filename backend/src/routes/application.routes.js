const express = require('express');
const router = express.Router();
const ApplicationController = require('../controllers/application.controller');

router.post('/', ApplicationController.createApplication);
router.get('/', ApplicationController.getApplications);
router.get('/:id', ApplicationController.getApplicationById);

module.exports = router;

