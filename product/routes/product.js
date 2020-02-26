const express = require('express');
const router = express.Router();
const { authenticate } = require('../middleware/auth');

const { create } = require('../controllers/ProductController');
const { productCreateValidator } = require('../middleware/validator/productRequest');

router.post('/api/product/create', authenticate, productCreateValidator, create);

module.exports = router;

