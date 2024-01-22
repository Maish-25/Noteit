const mongoose = require('mongoose')
const mongoURI = 'mongodb+srv://manish:CLMEopwHHIqEN4TC@cluster0.tw5l84k.mongodb.net/?retryWrites=true&w=majority'

const connectToMongo = ()=>{
    mongoose.connect(mongoURI)
}

module.exports = connectToMongo;
