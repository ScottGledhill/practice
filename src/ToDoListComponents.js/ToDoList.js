import React, { Component } from 'react';
import ToDoForm from './ToDoForm.js';

class ToDoList extends Component {
  state = { 
    todos: []
  } 

  addTodo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos]
    })
  }

  render() { 
    return (
      <div>
        <ToDoForm onSubmit={this.addTodo}/>
        {JSON.stringify(this.state.todos)}
      </div>
    );
  }
}
 
export default ToDoList;