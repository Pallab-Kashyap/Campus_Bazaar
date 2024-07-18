const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose
      .connect("mongodb://127.0.0.1:27017/userInfo")
      .then(() => console.log("db connected"))
      .catch((error) => console.log(error))
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
