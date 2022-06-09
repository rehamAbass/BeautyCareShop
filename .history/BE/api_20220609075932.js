const express = require("express");
const router = express.Router();
const Product = require('./model');

router.get("/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.send(products);
  } catch (error) {
    res.send(error);
  }
});
router.get("/product/:id", async (req, res) => {
    const productId = req.params.id;
  try {
    const pro = await Product.findOne({id:productId});
    res.send(pro);
  } catch (error) {
    res.send(error);
  }
});
//==============================================================
router.put("/products",async (req, res)=>{
try {
    const newCart = req.body;
    await Product.update({},newCart); // really her name is update ?? newCart.update ??{newCart}??
    res.send(newCart);
  } catch (error) {
    res.send(error);
  }
});
//======================================================
router.put("/product/:id",async (req, res)=>{
try {
  const id = req.params.id;
    const product = req.body;
    await Product.findOneAndReplace({id: id}, product);  
    console.log("in api - updated id:", product.id);
    res.send(product);
  } catch (error) {
    res.send(error);
  }
})
//========================================================
router.post("/product/:id", async (req, res) => {
  try {
    // console.log("in api - post");
    const product = new Product(req.body);
    // console.log("before save");
    await product.save();
   console.log("in api - post amount:", product.amount);
    res.send(product);
  } catch (error) {
    res.send(error);
  }
});
//===============================================================================================
router.delete("/product/:id", async (req, res) => {
  try{
  const productId = req.params.id;
  const product = await Product.findOneAndDelete({id: productId});
  console.log("in api - deleted id:", product.id);
  res.send(product);
}catch (error) {
    res.send(error);
  }
});

module.exports = router;
