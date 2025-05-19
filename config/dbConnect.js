const mongoose = require("mongoose");

const mongoDbConnection = () => {
  return mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log("Database is connected!");
    })
    .catch((err) => {
      console.error("Database connection error:", err);
    });
};

module.exports = mongoDbConnection;
