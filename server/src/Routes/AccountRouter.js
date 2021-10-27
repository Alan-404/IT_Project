const express = require('express');
const router = express.Router();
const AccountController = require('../Controllers/AccountController');
const verifyToken = require('../Middleware/Auth');

router.post('/login', AccountController.loginAccount);
router.post('/changePassword', verifyToken ,  AccountController.changePassword)


module.exports = router;