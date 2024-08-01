const mongoose = require("mongoose");

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
  college: {
    type: String,
    required: false,
  },
  year: {
    type: String,
    required: false,
  },
  course: {
    type: String,
    required: false,
  },
  updatedAt: {
    type: String,
    required: false,
  }
},
{timestamp: true},
);

const UserModel = mongoose.model("users", userSchema);

module.exports = {
  UserModel
};                                                          
