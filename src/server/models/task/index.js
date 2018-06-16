import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  title: String,
  responsible: String,
  description: String,
  priority: String
});

const Task = mongoose.model('task', TaskSchema);

export default Task;
