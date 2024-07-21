const express = require("express");
const router = express.Router();
const checkUserAuth = require('../middleware/authMiddleware.js');
const { getUserDetails, updateUserDetails } = require("../controllers/userController.js");

//Protected routes
router.route("/getUserDetails").get( checkUserAuth, getUserDetails)
router.route("/updateUserDetails").put( checkUserAuth, updateUserDetails)

module.exports = router