const mongoose = require('mongoose');



const connectDB = async () => {
    try{
        mongoose.connect(`${process.env.DB_API}`);
        console.log('Connected to database');
    }
    catch(error){
        console.log(error.messgae);
    }
}

module.exports = {connectDB};