const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MusicSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    singerId: {
        type: Schema.Types.ObjectId,
        ref: 'artists'
    },
    musicianId: {
        type: Schema.Types.ObjectId,
        ref: 'artists'
    },
    description: {
        type: String
    },
    createAt: {
        type: Date,
        require: true
    }
})

module.exports = mongoose.model('musics', MusicSchema);