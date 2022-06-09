const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const api = require("./BE/api");

mongoose.connect("mongodb://localhost/fatme", { useNewUrlParser: true });

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", api);

const port = 8000;
app.listen(port, function () {
  console.log(`Running server on port ${port}`);
});




// const express = require("express");
// const path = require("path");
// const app = express();
// const mongoose = require("mongoose");
// const api = require("./BE/api");
// // mongoose.connect(process.env.MONGODB_URI||'mongodb://localhost/Products');
// mongoose.connect("mongodb://localhost/Products", { useNewUrlParser: true });

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Content-Type, Authorization, Content-Length, X-Requested-With"
//   );
//   next();
// });

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use("/", api);

// const port = 8000;
// app.listen(port, function () {
//   console.log(`Running server on port ${port}`);
// });