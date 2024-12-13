const mongoose = require('mongoose');
require('dotenv').config()

const db = async()  => {
  
        await mongoose.connect("mongodb://localhost:27017");
        console.log('Connected to MongoDB');
 
}

module.exports = db; 