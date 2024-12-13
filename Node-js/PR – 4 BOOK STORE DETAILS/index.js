const express=require('express');
const db = require('./config/db');
const Api_Method = require('./routes/bookroute');
const app=express();
require("dotenv").config();
app.use(express.json());

app.use("/",Api_Method);


const PORT = process.env.PORT || 8090;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);

    db()
})