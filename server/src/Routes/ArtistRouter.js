const express = require('express');
const router = express.Router();
const ArtistController = require('../Controllers/ArtistController');

router.post('/insert',ArtistController.insertArtist);

module.exports = router;