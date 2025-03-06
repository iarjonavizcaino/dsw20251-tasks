const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

router.get("/", taskController.getAllTasks);

router.get("/:id", taskController.getTaskById);

router.post("/", taskController.createTask);

// Alternar estado de completado de una tarea
router.patch("/:id/toggle", taskController.toggleTaskCompletion);

module.exports = router;
