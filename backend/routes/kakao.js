const express = require('express');
const router =express.Router();
const kakaoController = require('../controllers/kakao.controller');

router.get('/login', kakaoController.login);
router.get('/code', kakaoController.getCode);

module.exports = router;