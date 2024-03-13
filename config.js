const mongoose = require("mongoose");

const db = () => {
  mongoose.createConnection(
    "mongodb+srv://Rohit_bhoriya:Rohit@43@rohitbhoriya.suhjp.mongodb.net/Category?retryWrites=true&w=majority&appName=Rohitbhoriya",
    {}
  );
};

module.exports = db;
