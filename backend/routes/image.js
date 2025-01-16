const express = require('express');
const router = express.Router();
var path = require('path');

const multer = require('multer');
const upload = multer({ dest: path.join(__dirname, '../public/images') })

router.get('/', (req,res, next) => {
    res.send('images');
})

router.post('/upload',  upload.single('image'), (req, res, next) => {
    console.log(req.file)
    res.send('upload')
})

module.exports = router