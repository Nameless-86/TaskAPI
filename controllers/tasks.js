const Task = require('../models/Task')

const getAllTasks = async (req, res) => {
  try {
    const allTask = await Task.find({})
    res.status(200).json({ allTask })
  } catch (error) {
    res.status(500).json({ msg: [error.name, error.message] })
  }
}

const createTask = async (req, res) => {
  try {
    const createTask = await Task.create(req.body)
    res.status(201).json({ createTask })
  } catch (error) {
    res.status(500).json({ msg: [error.name, error.message] });
  }
}

const getTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const getSimple = await Task.findOne({ _id: taskId });
    if (!getSimple) {
      return res.status(404).json({ msg: `No task with id: ${taskId}` })
    }
    res.status(200).json({ getSimple })
  } catch (error) {
    res.status(500).json({ msg: [error.name, error.message] });
  }
}

const updateTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const updateTask = await Task.findOneAndUpdate(
      { _id: taskId },
      req.body,
      { new: true, runValidators: true, });
    if (!updateTask) {
      return res.status(404).json({ msg: `No task with following id found: ${taskId}` })
    }
    res.status(200).json({ updateTask })
  } catch (error) {
    res.status(500).json({ msg: [error.name, error.message] });
  }
}

const deleteTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const deleteTask = await Task.findOneAndDelete({ _id: taskId });
    if (!deleteTask) {
      return res.status(404).json({ msg: `No task with following id found: ${taskId}` })
    }
    res.status(200).json({ task: null, status: "Task deleted succesfully" })
  } catch (error) {
    res.status(500).json({ msg: [error.name, error.message] })
  }

}

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};