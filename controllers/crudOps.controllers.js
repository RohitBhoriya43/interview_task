const {
  createDataService,
  getAllCategoryDataService,
  UpdateCategoryDataService,
  DeleteCategoryDataService,
} = require("../services/curdOps.service");

const createdataController = (req, res) => {
  return createDataService(req.body, res);
};
const getdataController = (req, res) => {
  return getAllCategoryDataServiceegoryDataService(res);
};
const updatedataController = (req, res) => {
  return UpdateCategoryDataService(req.parmas.id, res);
};
const deletedataController = (req, res) => {
  return DeleteCategoryDataService(req.params.id, res);
};

module.exports = {
  createdataController,
  getdataController,
  updatedataController,
  deletedataController,
};
