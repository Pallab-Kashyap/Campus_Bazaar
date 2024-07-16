const { authUser, handleNewUser } = require("../controllers/user");
const express = require("express");
const router = express.Router();

router.route("/").post(handleNewUser);

router.route("/login").post(authUser);

module.exports = router;
