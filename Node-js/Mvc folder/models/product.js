const mongoose=require('mongoose');

const productschema = new mongoose.Schema({

    title: String,
    img : String,
    price : Number,
    ratings : [{username: String, count: Number}],

});

const product = mongoose.model("Product", productschema);

module.exports = product


