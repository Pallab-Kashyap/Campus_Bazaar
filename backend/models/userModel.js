const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/userInfo")
  .then(() => console.log("db connected"))
  .catch((err) => console.log("db connection err ", err));

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.model("users", userSchema);

module.exports = {
  UserModel
};                                                          
