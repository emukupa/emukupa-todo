import React from "react";
import './todo.css';

const Todo = props => {
  const { todo, removeItem, completeItem, index } = props;
  return (
    <div className="Todo completed">
      <span onClick={() => removeItem(index)}> x :: </span>
      <div onClick={() => completeItem(index)}>{todo.text}</div>
    </div>
  );
};

export default Todo;
