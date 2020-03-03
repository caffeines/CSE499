const storageController = {
  uploadFile: (req, res) => {
    console.log(req);
  
    const files = [];
    req.files.forEach(file => {
      const { filename, originalname } = file;
      files.push({ filename, originalname });
    });
    res.ok({ files });
  }
}
module.exports = storageController;