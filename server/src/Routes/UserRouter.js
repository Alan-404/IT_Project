const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/UserController');
const verifyToken = require('../Middleware/Auth');

router.post('/insert', UserController.insertUser);
router.put('/modify',verifyToken, UserController.modifyInfo);

module.exports = router;