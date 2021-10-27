const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    middleName: {
        type: String
    },
    lastName: {
        type: String,
        required: true
    },
    emai: {
        type: String
    },
    bDate: {
        type: Date
    },
    phone:{
        type: String
    },
    address: {
        type: String
    },
})

module.exports = mongoose.model('users', UserSchema);