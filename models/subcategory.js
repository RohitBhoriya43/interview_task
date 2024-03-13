const mongoose = require("mongoose");

const SubcategorySchema = mongoose.Schema({
  name: {
    type: String,
  },
});

module.exports = mongoose.model("Subcategory", SubcategorySchema);
