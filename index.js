const express = require("express");
const mongoose = require("mongoose");
// const mongodb = require("mongodb");
const router = require("./Controllers/routers");

app = express();
app.use(express.json());
app.use(router);

//MongoDb Setup using mongoose
url = "mongodb://localhost:27017/sample";
mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });
connection = mongoose.connection;
connection.on("open", () => {
  console.log("Mongoose Connected..!");
});

//server setup
port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("server running at port " + port);
});
