const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MusicVideoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    music: {
        type: Schema.Types.ObjectId,
        require: true
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