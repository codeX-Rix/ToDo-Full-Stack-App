const { Router } = require("express");
const { getToDos, saveToDo, deleteToDo, updateToDo } = require("../controller/TodoController.js");

const router = Router();

router.get("/get", getToDos);
router.post("/save", saveToDo);

module.exports = router;