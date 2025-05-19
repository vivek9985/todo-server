const Todo = require("../models/todo.model");

const createTodoIntoDB = async (data) => {
  const result = new Todo(data);
  const finalResult = await result.save();
  return finalResult;
};

module.exports = createTodoIntoDB;
