const express = require("express");
const taskController = require("../controllers/task.controller");
const router = express.Router();

router.post("/", taskController.createTask);

router.get("/", taskController.getTask);

router.put("/:id", taskController.updateTask);

router.delete("/:id", taskController.deleteTask);

module.exports = router;
