import React, { Component } from 'react';
import shortid from 'shortid';

class ToDoForm extends Component {
  state = { 
    text: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      complete: false
    })
    this.setState({
      text: ""})
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
        <button
          onClick={this.handleSubmit}
          className="btn btn-success btn-sm m-2">
          Add ToDo
        </button>
      </form>
    );
  }
}

export default ToDoForm;