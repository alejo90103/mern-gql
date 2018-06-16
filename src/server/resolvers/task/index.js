export default {
  Query: {
    allTasks: async (parent, args, { Task }) => {
      const tasks = await Task.find();
      return tasks.map(task => {
        task._id = task._id.toString();
        return task;
      });
    }
  },
  Mutation: {
    createTask: async (parent, args, { Task }) => {
      const task = await new Task(args).save();
      task._id = task._id.toString();
      return task;
    },
    deleteTask: async (parent, args, { Task }) => {
      const task = await Task.findById(args._id);
      task._id = task._id.toString();
      task.remove();
      return task;
    }
  }

};
