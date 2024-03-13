const { createDataService } = require("../services/curdOps.service");

const createdataController = (req, res) => {
  return createDataService(req.body, res);
};

module.exports = {
  createdataController,
};
