import React, { Component } from 'react';
import ToDoForm from './ToDoForm.js';

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <ToDoForm/>
    );
  }
}
 
export default ToDoList;