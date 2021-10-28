const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    objId: {
        type: Schema.Types.ObjectId,
        ref: 'musics',
        ref: 'mvs',
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    like: {
        type: Number
    },
    content: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('comments', CommentSchema);