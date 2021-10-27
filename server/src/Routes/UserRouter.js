const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/UserController');

router.post('/insert', UserController.insertUser);

module.exports = router;