const { tasks } = require("../models/task");

exports.getAllTasks = (req, res) => {
  res.status(200).json(tasks);
};

exports.getTaskById = (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find((item) => item.id === id);
  if (task) {
    res.status(200).json(task);
  } else {
    res.status(404).json({ message: "Tarea no encontrada" });
  }
};

exports.createTask = (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title,
    completed: false,
    createdAt: new Date(),
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

exports.updateTask = (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find((t) => t.id === id);
  if (task) {
    task.title = req.body.title;
    res.status(200).json(task);
  } else {
    res.status(404).json({ message: "Tarea no encontrada" });
  }
};

exports.toggleTaskCompletion = (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find((t) => t.id === id);
  if (task) {
    task.completed = !task.completed;
    res.status(200).json(task);
  } else {
    res.status(404).json({ message: "Tarea no encontrada" });
  }
};
