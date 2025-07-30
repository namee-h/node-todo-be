const express = require("express");
const taskController = require("../controllers/task.controller");
const authController = require("../controllers/auth.controller");
const router = express.Router();

router.post("/", authController.authenticate, taskController.createTask);

router.get("/", taskController.getTask);

router.put("/:id", taskController.updateTask);

router.delete("/:id", taskController.deleteTask);

module.exports = router;
