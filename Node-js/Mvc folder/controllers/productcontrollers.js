const Product = require('../models/product')

const createProduct =async(req,res)=>{
    
    try{
        let product = await Product.create(req.body)
        res.status(201).send(product)
    }
    catch (error) {
        res.status(500).send({error: error.message})
    }
}

const grtProduct = async(req, res)=>{
    try {
        let product = await Product.find()
        res.status(201).send(product)
    } 
    catch (error) 
    {
        res.status(500).send({error: error.message})
    }
}

const getproductbyid = async(req, res)=>{
    let {id} = req.params

    try {
          let product = await Product.findById(id)
          res.status(201).send(product)
    } 
    catch (error) 
       {
        res.status(500).send({error: error.message})
      }
}

const updateProduct = async(req, res)=>{
    let {id} = req.params
    try {
        let product = await Product.findByIdAndUpdate(id, req.body, {new: true})
        res.status(201).send(product)
    }
     catch (error) {
        res.status(500).send({error: error.message})
    }
}

const deleteProduct = async(req, res)=>{
    let {id} = req.params
    try {
        let product = await Product.findByIdAndDelete(id)
        res.status(201).send(product)
    }
    catch (error) {
        res.status(500).send({error: error.message})
    }
}

module.exports = {
    createProduct,
    grtProduct,
    getproductbyid,
    updateProduct,
    deleteProduct,
}