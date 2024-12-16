const {Router}=require("express");
const { getById, getAllData, createData, updateData, deleteData } = require("../controller/pr2_controller.js");
const isvalid = require("../middleware/pr2_middleware.js");
const routemethod=Router();

routemethod.get("/:id",getById);
routemethod.get("/",getAllData);
routemethod.post("/",isvalid,createData);
routemethod.patch("/:id",updateData);
routemethod.delete("/:id",deleteData);

module.exports=routemethod;