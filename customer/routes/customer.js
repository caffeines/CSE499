const express = require('express');
const router = express.Router();
const { authenticate } = require('../middleware/auth');
const { profile } = require('../controllers/CustomerController');

router.get('/api/customer/profile', authenticate, profile);

module.exports = router;