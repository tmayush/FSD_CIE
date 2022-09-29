const express = require("express");
var cors = require("cors");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");

const app = express();
// const url = "mongodb://localhost:27017/cbit";
const url = "mongodb://localhost/cbit";

mongoose.connect(url, { useNewUrlParser: true });

const db = mongoose.connection;

db.on("open", () => {
  console.log("Database Connection Achieved");
});

app.use(cors({ origin: true, credentials: true }));

app.use(bodyparser.urlencoded({ extended: true }));

app.use(express.json({ extended: false }));

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const routes = require("./router/controller");
app.use("/student", routes);
