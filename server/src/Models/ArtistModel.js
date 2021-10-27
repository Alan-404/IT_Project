const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
    name:{ 
        type: String,
        require: true
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    follower: {
        type: Number,
        require: true
    }
})

module.exports = mongoose.model('artists', ArtistSchema);