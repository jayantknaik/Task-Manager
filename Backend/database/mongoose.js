// This file will handle connection logic to MongoDB database 
const mongoose = require("mongoose");
const connection = "mongodb+srv://Jayant:jayantknaik@cluster0.f4lrn.mongodb.net/TaskManager?retryWrites=true&w=majority"
mongoose
  .connect(connection, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
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
