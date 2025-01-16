var express = require('express');
var router = express.Router();
const userController = require('../controllers/user.controller');

const path = require('path');
const multer = require('multer');
const upload = multer({ dest: path.join(__dirname, '../public/images') })

router.get('/', userController.get)
router.post('/', upload.single('image'), userController.post)

module.exports = router;
