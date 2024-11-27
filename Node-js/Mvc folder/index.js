const express = require('express');
const dbconect = require('./config/db');
const app = express();

app.use(express.json());
require("dotenv").config()

const port = process.env.PORT || 8090;

app.listen(port,()=>{
    console.log('Server listening on port ${port}');
    
    dbconect()
    
})
