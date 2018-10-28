import React, { Component } from 'react';

class ToDoForm extends Component {
  state = { 
    text: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value]
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    
  }

  render() { 
    return ( 
      <form onSubmit={this.handleSubmit}>
        <input
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="todo...">
        </input>
      </form>
    );
  }
}

export default ToDoForm;