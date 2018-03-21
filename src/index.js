import React from "react";
import { render } from "react-dom";

import TodoList from "./components/todolist";

const App = () => {
  return <TodoList />;
};

render(<App />, document.getElementById("root"));
