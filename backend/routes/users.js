var express = require('express');
var router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/kakao_login', userController.kakao_login)
router.get('/kakao_authorize_code', userController.kakao_authorize_code)
router.get('/', (req,res,next) => {
    
})
module.exports = router;
