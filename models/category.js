const mongoose = require("mongoose");

let CategorySchema = new mongoose.Schema({
  name: {
    type: String,
  },
});

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;
