// This file will handle connection logic to MongoDB database

const mongoose = require("mongoose");
const MONGODB_URI = "mongodb+srv://Jayant:jayantknaik@cluster0.f4lrn.mongodb.net/test"
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/TaskManager", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to MongoDB successfully.");
  })
  .catch((e) => {
    console.log("Error while connecting to MongoDB.");
    console.log(e);
  });

module.exports = {
  mongoose,
};
