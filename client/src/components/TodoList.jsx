import React from "react";
import { MdDelete } from "react-icons/md";
import { PiNotePencil } from "react-icons/pi";
import "./TodoList.css";
import axios from "axios";
import { baseURL } from "../utils/constant";

const TodoList = ({ text, id, setUpdateUI }) => {
  const deleteTodo = () => {
    axios.delete(`${baseURL}/delete/${id}`).then((res) => {
      console.log(res.data);
      setUpdateUI((prevState) => !prevState);
    });
  };

  return (
    <div className="list-container">
      <div className="list">
        <div className="item">
          <div className="todo-name">{text}</div>
          <div className="edit-delete">
            <PiNotePencil className="button" />
            <MdDelete className="button" onClick={deleteTodo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
