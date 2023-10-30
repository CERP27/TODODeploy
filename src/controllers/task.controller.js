import Task from "../models/task.model.js";

export const getTasks = async (req, res) => {
  const tasks = await Task.find({
    user: req.user.id,
  }).populate("user", "username");
  res.status(200).json(tasks);
};

export const getTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findById(id).populate("user", "username");

    if (!task) return res.status(404).json({ message: "Task not Found" });

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const createTask = async (req, res) => {
  const { title, description, category } = req.body;

  try {
    const newTask = new Task({
      title,
      description,
      category,
      user: req.user.id,
    });

    const savedTask = await newTask.save();

    res.status(200).json(savedTask);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByIdAndUpdate(id, req.body, { new: true });

    if (!task) return res.status(404).json({ message: "Task not Found" });

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const completeTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByIdAndUpdate(id);

    if (!task) return res.status(404).json({ message: "Task not Found" });

    task.isCompleted = !task.isCompleted;

    const completedTask = await task.save();

    res.status(200).json(completedTask);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findByIdAndDelete(id);

    if (!task) return res.status(404).json({ message: "Task not Found" });

    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
