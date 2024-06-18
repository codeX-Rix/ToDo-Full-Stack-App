const TodoModel = require("../models/TodoModel.js");

module.exports.getToDos = async (req, res) => {
  const toDos = await TodoModel.find();
  res.send(toDos);
};

module.exports.saveToDo = (req, res) => {
  const { todo } = req.body;

  TodoModel.create({ todo })
    .then((data) => {
      console.log("Saved Succsesfully...!");
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log("error:", err);
      res.send({ error: err, msg: "Something Went Wrong..!" });
    });
};

module.exports.updateToDo = (req, res) => {
  const { id } = req.params;
  const { todo } = req.body;
  TodoModel.findByIdAndUpdate(id, { todo })
    .then(() => {
      res.send("Update Successfully...");
    })
    .catch((err) => {
      console.log("error:", err);
      res.send({ error: err, msg: "Something Went Wrong..!" });
    });
};

module.exports.deleteToDo = (req, res) => {
  const { id } = req.params;

  TodoModel.findByIdAndDelete(id)
    .then(() => {
      res.send("Delete Successfully...");
    })
    .catch((err) => {
      console.log("error:", err);
      res.send({ error: err, msg: "Something Went Wrong..!" });
    });
};
