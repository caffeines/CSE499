const express = require('express');
const router = express.Router();

const { usernameValidator, otpValidator } = require('../middleware/validator/authRequest');
const { enter, verifyOtp, resendOtp } = require('../controller/AuthController');

router.post('/api/auth/enter', usernameValidator, enter);
router.post('/api/auth/verify-otp', usernameValidator, otpValidator, verifyOtp);
router.post('/api/auth/resend-otp',usernameValidator, resendOtp);

module.exports = router;