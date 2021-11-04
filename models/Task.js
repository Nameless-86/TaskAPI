const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is a required field'],
    trim: true,
    maxlength: [20, 'Name Cannot be longer than 20 characters'],
  },
  completed: {
    type: Boolean,
    default: false,
  }
})

module.exports = mongoose.model('Task', TaskSchema)