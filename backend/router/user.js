const express = require("express");

// controller funtions
const { signuUser, loginUser } = require("../controllers/userController");

const router = express.Router();

router.post("/login", loginUser);

router.post("/signup", signuUser);

module.exports = router;
