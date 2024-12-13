const mongoose = require('mongoose');
require('dotenv').config()

const db = async(req, res)=>{
    await mongoose.connect("mongodb://localhost:27017");
    console.log('Connected to db')
}

module.exports = db