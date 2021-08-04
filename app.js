const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { mongoose } = require("./Backend/database/mongoose");
const { List, Task } = require("./Backend/database/models");
mongoose.set("useFindAndModify", false);
const port = process.env.PORT || 3000;
const connection = mongoose.connection;
const uri = process.env.ATLAS_URI;

connection.once("open", uri =>{
  console.log('====================================');
  console.log("MongoDB database connections established.");
  console.log('====================================');
})
//Middleware
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// LIST ROUTES
app.get("/lists", (req, res) => {
  List.find({}).then((lists) => {
    res.send(lists);
  });
});

app.post("/lists", (req, res) => {
  let title = req.body.title;
  let newList = new List({
    title,
  });
  newList
    .save()
    .then((listDoc) => {
      res.send(listDoc);
    })
    .catch((e) => {
      console.log(e);
    });
});

app.patch("/lists/:id", (req, res) => {
  List.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  ).then(() => {
    res.sendStatus(200);
  });
});

app.delete("/lists/:id", (req, res) => {
  List.findOneAndRemove({
    _id: req.params.id,
  }).then((removedListDoc) => {
    res.send(removedListDoc);
  });
});

app.get("/lists/:listId/tasks", (req, res) => {
  Task.find({
    _listId: req.params.listId,
  })
    .then((tasks) => {
      res.send(tasks);
    })
    .catch((e) => {
      console.log(e);
    });
});

app.get("/lists/:listId/tasks/:taskId", (req, res) => {
  Task.findOne({
    _id: req.params.taskId,
    _listId: req.params.listId,
  }).then((task) => {
    res.send(task);
  });
});

app.post("/lists/:listId/tasks", (req, res) => {
  let newTask = new Task({
    title: req.body.title,
    _listId: req.params.listId,
  });
  newTask.save().then((newTaskDoc) => {
    res.send(newTaskDoc);
  });
});

app.patch("/lists/:listId/tasks/:taskId", (req, res) => {
  Task.findOneAndUpdate(
    {
      _id: req.params.taskId,
      _listId: req.params.listId,
    },
    {
      $set: req.body,
    }
  ).then(() => {
    res.send({ message: "Updated Successfully!" });
  });
});

app.delete("/lists/:listId/tasks/:taskId", (req, res) => {
  Task.findOneAndDelete({
    _id: req.params.taskId,
    _listId: req.params.listId,
  }).then((removedTaskDoc) => {
    res.send(removedTaskDoc);
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});
app.use(express.static(__dirname + './dist/Frontend'));

app.get('/', function (request, response) {
    response.sendFile(path.join(__dirname + '/dist/Frontend/index.html'));
});