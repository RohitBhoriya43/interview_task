const Category = require("../models/category");

const createDataService = (data, res) => {
  let { Category_name } = data;

  let categoryData = Category.findOne({ name: Category_name });

  if (categoryData) {
    res.status(400).json({
      status: false,
      message: "This category name is already available",
    });
  }

  categoryData = Category.create({
    name: Category_name,
  });

  categoryData.save();

  return response.status(201).json({
    status: true,
    message: "category has been created",
  });
};

const getAllCategoryDataService = (res) => {
  //   let { Category_name } = data;

  let categoryData = Category.find({});

  if (!categoryData) {
    res.status(400).json({
      status: false,
      message: "This category name is already available",
    });
  }

  //   categoryData = Category.create({
  //     name: Category_name,
  //   });

  //   categoryData.save();

  return response.status(200).json({
    status: true,
    categoryData,
  });
};

const UpdateCategoryDataService = (id, data, res) => {
  let { category_name } = data;

  let categoryData = Category.findOne({ _id: id });

  if (categoryData) {
    res.status(400).json({
      status: false,
      message: "This category name is already available",
    });
  }
  categoryData.update({
    name: Category_name,
  });

  categoryData.save();

  return response.status(201).json({
    status: true,
    message: "category has been updated",
  });
};

const DeleteCategoryDataService = (id, res) => {
  // let { Category_name } = data

  let categoryData = Category.findOne({ _id: id });

  if (categoryData) {
    res.status(400).json({
      status: false,
      message: "This category name is already available",
    });
  }

  categoryData.delete();
  return response.status(201).json({
    status: true,
    message: "category has been created",
  });
};

module.exports = {
  createDataService,
  getAllCategoryDataService,
  UpdateCategoryDataService,
  DeleteCategoryDataService,
};
