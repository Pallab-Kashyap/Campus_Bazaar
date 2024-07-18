const { loginUser, createUser, updateUserPassword } = require("../controllers/authController");
const express = require("express");
const checkUserAuth = require("../middleware/authMiddleware");
const router = express.Router();

// public routes
router.route("/signin").post(createUser);
router.route("/login").post(loginUser);

//protected routes
router.route('/changePassword').put(checkUserAuth, updateUserPassword)

module.exports = router;
