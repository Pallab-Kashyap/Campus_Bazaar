const { UserModel } = require("../models/userModel");

const getUserDetails = async (req, res) => {
  res.status(200).send({ user: req.user });
};

const updateUserDetails = async (req, res) => {
  const { updates } = req.body;

  if (updates) {
    try {
      const user = await UserModel.findByIdAndUpdate(
        req.user._id,
        updates,
        {new: true},
      ).select("-password");
      if (user) {
        res.status(200).send({ user });
      } else {
        res.status(400).send({ message: "bad request" });
      }
    } catch {
      res.status(500).send({ message: "faild to update" });
    }
  } else {
    res.status(400).send({ message: "all fields are required" });
  }
};

module.exports = {
  getUserDetails,
  updateUserDetails,
};
