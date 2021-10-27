const express = require('express');
const router = express.Router();
const MusicController = require('../Controllers/MusicController');


router.post('/insert', MusicController.insertMusic);

module.exports = router;