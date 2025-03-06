const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

const { authenticateToken } = require('../middleware/authMiddleware');


router.get("/", authenticateToken, taskController.getAllTasks);

router.get("/:id", authenticateToken, taskController.getTaskById);

router.post("/", authenticateToken, taskController.createTask);

// Alternar estado de completado de una tarea
router.patch("/:id/toggle", authenticateToken, taskController.toggleTaskCompletion);

module.exports = router;
