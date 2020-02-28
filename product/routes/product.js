const express = require('express');
const router = express.Router();
const { authenticate, authorizeAdmin, authorizeOwner } = require('../middleware/auth');

const { 
  createProduct, getProducts, getProductById, updateProduct, deleteProduct, searchProduct 
} = require('../controllers/ProductController');
const { 
  productCreateValidator, deleteProductValidator
 } = require('../middleware/validator/productRequest');

router.get('/api/product', getProducts);
router.get('/api/product/:id', getProductById);
router.get('/api/product/search/:name', searchProduct);
router.post('/api/product', authenticate, authorizeAdmin, productCreateValidator, createProduct);
router.patch('/api/product/:id', authenticate, authorizeAdmin, productCreateValidator, updateProduct);
router.delete('/api/product', authenticate, authorizeAdmin, deleteProductValidator, deleteProduct);

module.exports = router;

