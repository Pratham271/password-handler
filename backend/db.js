const mongoose = require('mongoose');

mongoose.set('strictQuery', false); 

const mongoURI = "mongodb://127.0.0.1:27017/passwordManager"


const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Database Connected!");
    } catch (err) {
        console.error(err);
    }
};


module.exports = connectToMongo;