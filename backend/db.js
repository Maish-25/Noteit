const mongoose = require('mongoose')
const mongoURI = 'mongodb+srv://manish:PehV3auFrcH6hTjD@cluster0.svheg3b.mongodb.net/?retryWrites=true&w=majority'

const connectToMongo = ()=>{
    mongoose.connect(mongoURI)
}

module.exports = connectToMongo;