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
        {this.state.todos.map(todo => (
          <div key={todo.id}>{todo.text}</div>
        ))}
      </div>
    );
  }
}
 
export default ToDoList;