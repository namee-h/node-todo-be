const express = require("express");
const userController = require("../controllers/user.controller");
const authController = require("../controllers/auth.controller");
const router = express.Router();

// 1. 회원가입 endpoint
router.post("/", userController.createUser);

router.post("/login", userController.loginWithEmail);

router.get("/me", authController.authenticate, userController.getUser);

module.exports = router;
