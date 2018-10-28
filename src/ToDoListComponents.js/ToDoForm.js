import React, { Component } from 'react';

class ToDoForm extends Component {
  state = { 
    text: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() { 
    return ( 
      <input
        name="text"
        value={this.state.text}
        onChange={this.handleChange}
        placeholder="todo...">
      </input>
    );
  }
}

export default ToDoForm;