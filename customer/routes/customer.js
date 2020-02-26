const express = require('express');
const router = express.Router();
const { authenticate } = require('../middleware/auth');
const { profile, updateProfile } = require('../controllers/CustomerController');
const { userUpdateValidator } = require('../middleware/validator/userRequest');


router.get('/api/customer/profile', authenticate, profile);
router.patch('/api/customer', authenticate, userUpdateValidator, updateProfile);

module.exports = router;