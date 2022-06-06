const express = require("express");
const router = express.Router();
const Product = require("./model");

router.get("/products", async (req, res) => {
  try {
    const products = await Products.find({});
    res.send(products);
  } catch (error) {
    res.send(error);
  }
});

router.post("/products", async (req, res) => {
  try {
    const products = new (req.body);
    await Products.save();
    res.send(products);
  } catch (error) {
    res.send(error);
  }
});

router.delete("/product/:id", async (req, res) => {
  const productId = req.params.id;
  const product = await Products.findOneAndDelete({
    _id:  productId,
  });
  res.send(product);
});

module.exports = router;