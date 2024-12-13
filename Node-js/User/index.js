const express = require('express')
const db = require('./config/db')
const path = require('path')
const cookieParser = require("cookie-parser");
const userrouter = require('./routes/users_routes');
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended:true }))
app.use(cookieParser())

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, 'view'))
app.use(express.static(path.join(__dirname, 'public')));
app.get('/',)
app.use('/',userrouter)


app.listen(8090, ()=>{
    console.log("Server is running on port 8090");
    db()
})