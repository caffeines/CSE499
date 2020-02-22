const express = require('express');
const router = express.Router();

const { enter, verifyOtp, resendOtp } = require('../controller/AuthController');

router.post('/api/auth/enter', enter);
router.post('/api/auth/verify-otp', verifyOtp);
router.post('/api/auth/resend-otp', resendOtp);

module.exports = router;