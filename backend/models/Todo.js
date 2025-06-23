const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    completed: {
      type: Boolean,
      default: false
    },
    dueDate: {
      type: Date,
      default: null
    },
    priority: {
      type: String,
      enum: ['Low', 'Medium', 'High'],
      default: 'Low'
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Todo', TodoSchema);