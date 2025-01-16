var express = require('express');
var router = express.Router();
const userController = require('../controller/user.controller');

router.use('/', userController.get)
router.use('/', userController.post)

module.exports = router;
