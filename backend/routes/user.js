var express = require('express');
var router = express.Router();
const userController = require('../controllers/user.controller');

const multer = require("multer");
const path = require('path');
const user_profile_upload = multer({ dest: path.join(__dirname, "../public/profiles") });

router.get('/login', userController.login);
router.post('/signup', user_profile_upload.single('profile_image'), userController.signup);


module.exports = router;
