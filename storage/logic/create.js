const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');

const { cryptoRandomString } = require('../lib/utils');
const mongoURL = 'mongodb://caffeines:sadat642@ds235437.mlab.com:35437/storage';
const storage = new GridFsStorage({
  url: mongoURL,
  cache: true,
  file: (req, file) => {
    return new Promise(async (resolve, reject) => {
      const random = await cryptoRandomString(5);
      const filename = `${random}${file.originalname}`;
      if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
        const fileInfo = {
          filename: filename,
          bucketName: 'images',
        };
        resolve(fileInfo);
      } else {
        reject( new Error('Invalid mimetype'));
      }
    });
  }
});

storage.on('connection', (db) => {
  console.log('Storage connection successful');
});
 
storage.on('connectionFailed', (err) => {
  console.error(err);
});

const upload = multer({ storage });
exports.upload = upload;