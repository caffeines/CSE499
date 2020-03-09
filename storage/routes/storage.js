const express = require('express');
const router = express.Router();

const { authenticate, authorizeAdmin, authorizeOwner } = require('../middleware/auth');

const { upload } = require('../logic/create');
const { uploadFile, getImage } = require('../controllers/storage');

router.post('/', /* authorizeAdmin, */ upload.array('files'), uploadFile);
router.get('/:name',  getImage);

module.exports = router;