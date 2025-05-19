const express = require("express");
const {
  createTodo,
  getTodo,
  getSingleTodo,
  updateSingleTodo,
  deleteSingleTodo,
} = require("../controllers/todo.controller");
const router = express.Router();

router.post("/", createTodo);
router.get("/all", getTodo);
router.get("/:id", getSingleTodo);
router.put("/:id", updateSingleTodo);
router.delete("/:id", deleteSingleTodo);

module.exports = router;
