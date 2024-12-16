const express = require('express');
require("dotenv").config();
const db = require("./config/db.js");
const routemethod = require("./routes/pr2_routes.js");
const app = express();
app.use(express.json());

app.use("/pr2_models",routemethod)


app.listen(8090,()=>{
    console.log("http://localhost:8090");
    db();
});