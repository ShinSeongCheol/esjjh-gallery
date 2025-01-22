const express = require('express');
const router =express.Router();
const kakaoController = require('../controllers/kakao.controller');

router.get('/login', kakaoController.login);
router.get('/auth', kakaoController.auth);

module.exports = router;