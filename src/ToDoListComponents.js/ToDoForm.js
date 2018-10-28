import React, { Component } from 'react';

class ToDoForm extends Component {
  state = { 
    text: ''
  }

  render() { 
    return ( 
      <input value={this.state.text} placeholder="todo..."></input>
    );
  }
}

export default ToDoForm;