// This file will handle connection logic to MongoDB database 
const mongoose = require("mongoose");
const url = "mongodb+srv://Jayant:jayantknaik@cluster0.f4lrn.mongodb.net/TaskManager"
mongoose
  .connect(process.env.MONGODB_URI || url, {
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
