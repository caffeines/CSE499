const express = require('express');
const router = express.Router();

const { profile } = require('../controllers/CustomerController');

router.get('/api/customer/profile/:username', profile);

module.exports = router;