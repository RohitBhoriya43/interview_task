// import Grid from "@mui/material/Grid";
let {
  createdataController,
  deletedataController,
  updatedataController,
  getdataController,
} = require("../controllers/crudOps.controllers");
const express = require("express");

let routes = express.Router();

routes.route("/create").post(createdataController);
routes.route("/read").get(getdataController);

routes.route("/delete/:id").delete(deletedataController);
routes.route("/update/:id").put(updatedataController);

module.exports = routes;
