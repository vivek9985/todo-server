const express = require("express");
const cors = require("cors");
const mongoDbConnection = require("./config/dbConnect.js");
const router = require("./routes/todo.route.js");
const routeNotFound = require("./utils/routeNotFound.js");
const errorHandler = require("./utils/errorHandler.js");
require('dotenv').config()


const app = express();
const port = process.env.PORT || 5000;

// Middlwares ---------
app.use(express.json());
app.use(cors());

// Database connection ---------
mongoDbConnection();

app.use("/todo", router);

app.get("/", (req, res) => {
  res.send("Todo server is running!");
});

app.use(routeNotFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
