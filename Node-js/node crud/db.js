const mongoose = require('mongoose');

// Connect to MongoDB

const DBConnect = async()=> {

    await mongoose.connect("mongodb://localhost:27017/db")

    console.log("Connected to MongoDB")
    
}

module.exports =DBConnect