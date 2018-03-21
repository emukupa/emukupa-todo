import React from "react";

import Todo from "./todo";
import Input from "./input";
import Button from "./button";

class TodoList extends React.Component {
  state = {
    Todos: [],
    NewTodo: {
      completed: false,
      text: "",
    },
  };

  handleDelete = index => {
    // copy he Todos and NewTodo objects from the state
    const { Todos } = { ...this.state };

    //remove the item
    Todos.splice(index, 1);

    // update the Todos in the state
    this.setState({
      Todos: Todos,
    });
  }

  handleComplete = index => {
    // copy he Todos and NewTodo objects from the state
    const { Todos } = { ...this.state };

    // get a copy of the todo
    const Todo = Todos[index];

    // toggle the complete
    Todos[index].completed = !Todo.completed;

    // update the state
    this.setState({
      Todos: Todos,
    });
  }

  handleInputChange = event => {
    // copy the NewTodo object from the state
    const newtodo = { ...this.state.NewTodo };
    
    // change the text on the object
    newtodo.text = event.target.value
    // update the NewTodo
    this.setState({
      NewTodo: newtodo,
    });
  };

  handleButtonClick = () => {
    if(this.state.NewTodo.text === ''){
      // nohing to add, so stop any further action
      return;
    }
    // copy he Todos and NewTodo objects from the state
    const { Todos, NewTodo } = {...this.state};

    // make a new Todos array
    const newTodos = Todos.concat([NewTodo]);

    //update the state, and reset the NewTodo
    this.setState({
      Todos: newTodos,
      NewTodo: {
        completed: false,
        text: "",
      },
    });
  }
  render() {
    return (
      <div className="Todos">
        <h3>To Do List</h3>
        {/*map over the Todos array*/}
        {this.state.Todos.map((todo, index) => (
          <Todo key={index} completeItem={this.handleComplete} index={index} removeItem={this.handleDelete} todo={todo} />
        ))}
        <Input inputChange={this.handleInputChange} value={this.state.NewTodo.text} />
        <Button buttonClick={this.handleButtonClick} />
      </div>
    );
  }
}

export default TodoList;
