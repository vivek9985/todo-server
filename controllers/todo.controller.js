const Todo = require("../models/todo.model");

const createTodo = async (req, res) => {
  try {
    const result = new Todo(req.body);
    const data = await result.save();
    res.status(200).json({
      success: true,
      message: "Todo created successfully!",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      error,
    });
  }
};

const getTodo = async (req, res) => {
  try {
    const result = await Todo.find({}, { _id: 0, __v: 0 });
    res.status(200).json({
      success: true,
      message: "Todos fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      error,
    });
  }
};

const getSingleTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Todo.findOne({ _id: id });
    res.status(200).json({
      success: true,
      message: "Todo fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      error,
    });
  }
};

const updateSingleTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedTitle = req.body.title;
    const updatedDescription = req.body.description;
    const result = await Todo.updateOne(
      { _id: id },
      ($set = {
        title: updatedTitle,
        description: updatedDescription,
      })
    );
    res.status(200).json({
      success: true,
      message: "Todo updated successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      error,
    });
  }
};

const deleteSingleTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Todo.deleteOne({ _id: id });
    res.status(200).json({
      success: true,
      message: "Todo deleted successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      error,
    });
  }
};

module.exports = {
  createTodo,
  getTodo,
  getSingleTodo,
  updateSingleTodo,
  deleteSingleTodo,
};
