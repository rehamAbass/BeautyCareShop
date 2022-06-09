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
    const products = await Product.find({id:productId});
    res.send(products);
  } catch (error) {
    res.send(error);
  }
});
//==============================================================

router.put("/product/:id",async (req, res)=>{
try {
  const id = req.params.id;
    const product = req.body;
    await product.findOneAndUpdate({id: id});
    res.send(product);
  } catch (error) {
    res.send(error);
  }
})
//========================================================
router.post("/product/:id", async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.send(product);
  } catch (error) {
    res.send(error);
  }
});

router.delete("/product/:id", async (req, res) => {
  const productId = req.params.id;
  const product = await Product.findOneAndDelete({
    id: productId,
  });
  res.send(product);
});

module.exports = router;
