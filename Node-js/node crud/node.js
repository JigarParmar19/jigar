const express = require('express');
const app = express();
app.use(express.json());

const Student = require('./Studentmodul');
const DBConnect = require('./db');

app.get("/",(req,res)=>{
    res.send("Hello World");
});

//sundent

app.get("/Sundent/:id",async(req,res)=>{
    let (id) = req.params;
    const data = await Student.get(id);
    res.send(data);
})

app.post("/Sundent/:id",async(req,res)=>{

    let data = await Student.create(req.body);
    req.send(data);

})

app.patch("/Sundent/:id",async(req,res)=>{
    
    let(id) = req.params;
    let data = await Student.findByIdAndUpdate(id,req.body);
    res.send(data);

})

app.delete("/Sundent/:id",async(req,res)=>{ 
    
    let(id) = req.params;
    let data = await Student.findByIdAndDelete(id);
    res.send(data);
 })

app.listen(8090,()=>{
    console.log("listening on http://localhost:8090");
   DBConnect()
    // Connect to the MongoDB database
  
})