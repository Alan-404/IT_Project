const express = require('express');
const router = express.Router();
const MusicVideoController = require('../Controllers/MusicVideoController');

router.post('/insert', MusicVideoController.insertMV);
router.put('/update', MusicVideoController.updateInfor);

module.exports = router;