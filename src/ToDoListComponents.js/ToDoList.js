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
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete
          }
        } else {
          return todo
        }
      })
    })
  }

  render() { 
    return (
      <div>
        <ToDoForm onSubmit={this.addTodo}/>
        {this.state.todos.map(todo => (
          <ToDo
            key={todo.id}
            togglecomplete={() => this.toggleComplete(todo.id)}
            todo={todo}
          />
        ))}
        <div>
          todos left: {this.state.todos.filter(todo => !todo.complete).length}
        </div>
      </div>
    );
  }
}

export default ToDoList;