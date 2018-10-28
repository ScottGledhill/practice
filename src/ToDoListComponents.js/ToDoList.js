import React, { Component } from 'react';
import ToDoForm from './ToDoForm.js';
import ToDo from './ToDo.js';

class ToDoList extends Component {
  state = { 
    todos: []
  } 

  addTodo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos]
    })
  }

  toggleComplete = (id) => {
    
  }

  render() { 
    return (
      <div>
        <ToDoForm onSubmit={this.addTodo}/>
        {this.state.todos.map(todo => (
          <ToDo
            key={todo.id}
            togglecomplete={() => this.toggleComplete(todo.id)}
            text={todo.text}
          />
        ))}
      </div>
    );
  }
}
 
export default ToDoList;