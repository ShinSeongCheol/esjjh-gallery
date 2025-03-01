var express = require('express');
var router = express.Router();
const authController = require('../controllers/auth.controller');

router.post('/', authController.isAuthenticated, authController.getAuth)
router.post('/refresh', authController.refreshAuth)

module.exports = router;