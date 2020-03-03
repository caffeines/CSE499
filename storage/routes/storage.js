const express = require('express');
const router = express.Router();

const { authenticate, authorizeAdmin, authorizeOwner } = require('../middleware/auth');

const { upload } = require('../logic/create');
const { uploadFile } = require('../controllers/storage');

router.post('/', upload.array('files'), uploadFile);

module.exports = router;