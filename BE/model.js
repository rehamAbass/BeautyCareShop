const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    id: { type:Number , required : true},
    name: { type:String},
    brand: {type: String},
    price: {type : Number},
    image_link: {type: String},
    product_link: { type: String}, 
    description: {type: String},
    rating: { type: Number },
    product_type: {type : String} ,
    product_api_url: {type: String},
    product_colors: { type: Array },
    amount: {type : Number}
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;




