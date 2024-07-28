const { loginUser, createUser, updateUserPassword,forgotPassword,resetPassword } = require("../controllers/authController");
const express = require("express");
const checkUserAuth = require("../middleware/authMiddleware");
const router = express.Router();

// public routes
router.route("/signin").post(createUser);
router.route("/login").post(loginUser);
router.route('/forgotPassword').post(checkUserAuth, forgotPassword)
router.route('/resetPassword/:userId/:token').put(checkUserAuth, resetPassword)

//protected routes
router.route('/changePassword').put(checkUserAuth, updateUserPassword)

module.exports = router;
