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

const updateTask = (req, res) => {
  res.send('Update task')
}

const deleteTask = (req, res) => {
  res.send('Delete task')
}

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};