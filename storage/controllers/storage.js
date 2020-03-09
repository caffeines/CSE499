const Grid = require('gridfs-stream');
const mongoose = require('mongoose');
const { createReadStream } = require('fs');
const { createModel } = require('mongoose-gridfs');
const { connection } = require('../config/mongoose');

const storageController = {
  uploadFile: (req, res) => {
    const files = [];
    req.files.forEach(file => {
      const { filename, originalname } = file;
      files.push({ filename, originalname });
    });
    res.ok({ files });
  },
  getImage: async (req, res) => {
    const gfs = Grid(connection, mongoose.mongo);
    gfs.collection('images');
    try {
      const Attachment = createModel({
        modelName: 'images',
        connection: connection
      });
      const file = await gfs.files.findOne({ filename: req.params.name });
      console.log(file);
      if (!file || !file.length) {
        res.notFound();
        return;
      }
      const readStream = Attachment.read({ _id: file._id });
      readStream.on('data', () => {
        console.log('asdasdsd');
      } );
      await readStream.pipe(res);
      // res.ok();
    } catch (err) {
      console.log(err);

      res.serverError(err);
    }
  }
}
module.exports = storageController;