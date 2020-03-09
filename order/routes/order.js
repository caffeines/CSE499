const express = require('express');
const router = express.Router();

const { createOrder } = require('../controllers/order');

router.post('/api/order', createOrder);

module.exports = router;