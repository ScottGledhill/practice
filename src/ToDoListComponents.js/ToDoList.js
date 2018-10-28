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
      <ToDoForm onSubmit={this.addTodo}/>
    );
  }
}
 
export default ToDoList;