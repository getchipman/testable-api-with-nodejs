const mongoose = require('mongoose');
require('dotenv').config();

const mongodbUrl = process.env.MONGODB_URL || 'mongodb://localhost:27017/';

//promise
const connect = () => 
    mongoose.connect(mongodbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
});

const close = () => mongoose.connection.close();

module.exports = {
    connect,
    close,
    connection: mongoose.connection
};
