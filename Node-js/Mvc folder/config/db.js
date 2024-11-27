const { log } = require('console');
const mongoose = require('mongoose')
require("dotenv").config();

let db = process.env.db_connection

const dbconect=async()=>{
    try {
         await mongoose.connect(db)
        console.log("Connected to the database");
        }
          catch (error) 
          {
            console.log(error.message);
          }
}

module.exports=dbconect