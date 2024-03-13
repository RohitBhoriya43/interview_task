const express = require("express");
const mongoose = require("mongoose");

// const db = require("/config");
const routes = require("./router/curdoperation");

const app = express();

const connectdb = () => {
  mongoose
    .connect(
      "mongodb+srv://Rohit_bhoriya:Uz2rYLEQtzmJs3xh@rohitbhoriya.suhjp.mongodb.net/Category?retryWrites=true&w=majority&appName=Rohitbhoriya",
      {}
    )
    .then((conn) => {
      console.log("connect db");
    })
    .catch((err) => {
      console.log("eror", err);
    });
};

connectdb();

app.use(express.json());

app.use("/api/v1", routes);

app.listen(8000, () => {
  console.log("listening on node js project 8000 port");
});
