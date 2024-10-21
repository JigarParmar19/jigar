const mongoose = require('mongoose');
const dbconnect = async () => {
    await mongoose.connect("mongodb+srv://jp0365381:node@cluster0.lyibt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

    console.log("conected to server");
    
}

module.exports = dbconnect