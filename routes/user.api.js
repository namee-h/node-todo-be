const express = require("express");
const userController = require("../controllers/user.controller");
const router = express.Router();

// 1. 회원가입 endpoint
router.post("/", userController.createUser);

router.post("/login", userController.loginWithEmail);

router.get("/", (req, res) => {
  res.send("user get endpoint works!");
});

module.exports = router;
