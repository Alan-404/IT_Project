const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MusicVideoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    music: {
        type: Schema.Types.ObjectId
    },
    description: {
        type: String
    },
    createAt: {
        type: Date,
        require: true
    }
})

module.exports = mongoose.model('MVs', MusicVideoSchema);