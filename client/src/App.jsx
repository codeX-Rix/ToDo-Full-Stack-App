import React, { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import { baseURL } from "./utils/constant";
import axios from "axios";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [updateUI, setUpdateUI] = useState(false);

  useEffect(() => {
    axios
      .get(`${baseURL}/get`)
      .then((res) => {
        setTodos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [updateUI]);

  const saveTodo = (e) => {
    axios
      .post(`${baseURL}/save`, { todo: input })
      .then((res) => {
        console.log(res.data);
        setUpdateUI((prevState) => !prevState);
        setInput("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="input-container">
        <h3>To Do's</h3>
        <form>
          <input
            type="text"
            name="todo"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            required
            placeholder="Todo text here..."
          />
          <button className="add-btn" onClick={saveTodo}>
            Add task
          </button>
        </form>
      </div>
      {todos.map((el) => {
        return (
          <TodoList
            key={el._id}
            id={el._id}
            text={el.todo}
            setUpdateUI={setUpdateUI}
          />
        );
      })}
     
    </>
  );
};

export default App;
