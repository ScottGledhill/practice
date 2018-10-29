import React, { Component } from 'react';
import ToDoForm from './ToDoForm.js';
import ToDo from './ToDo.js';

class ToDoList extends Component {
  state = { 
    todos: [],
    todoToShow: 'all'
  } 

  addTodo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos]
    })
  }

  toggleComplete = (id) => {
    this.setState(state => ({
      todos: state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete
          }
        } else {
          return todo
        }
      })
    }))
  }

  updateTodoToShow = (s) => {
    this.setState({
      todoToShow: s
    })
  }

  handleDelete = (id) => {
    this.setState(state => ({
      todos: state.todos.filter(todo => todo.id !== id)
    }))
  }

  removeComplete = () => {
    this.setState(state => ({
      todos: state.todos.filter(todo => !todo.complete)
    }))
  }

  render() { 
    let todos = []

    if (this.state.todoToShow === "all") {
      todos = this.state.todos;
    } else if (this.state.todoToShow === "active") {
      todos = this.state.todos.filter(todo => !todo.complete);
    } else if (this.state.todoToShow === "complete") {
      todos = this.state.todos.filter(todo => todo.complete);
    }

  return (
    <div>
      <ToDoForm onSubmit={this.addTodo}/>
      {todos.map(todo => (
        <ToDo
          key={todo.id}
          toggleComplete={() => this.toggleComplete(todo.id)}
          onDelete={() => this.handleDelete(todo.id)} 
          todo={todo}
        />
      ))}
      <div>
        todos left: {this.state.todos.filter(todo => !todo.complete).length}
      </div>
      <button onClick={() => this.updateTodoToShow("all")}>All</button>
      <button onClick={() => this.updateTodoToShow("active")}>Active</button>
      <button onClick={() => this.updateTodoToShow("complete")}>Complete</button>
      {this.state.todos.some(todo => todo.complete) ?  ( 
      <button onClick={() => this.removeComplete()}>Remove Complete</button>
      ) : null}
    </div>
  )}
}

export default ToDoList;