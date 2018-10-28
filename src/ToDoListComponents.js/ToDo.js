import React, { Component } from 'react';

class ToDo extends Component {
  constructor(props) {
    super(props)
  }
  render() { 
    return ( 
      <div 
        onClick={props.toggleComplete}>
        {props.text}
      </div>
    );
  }
}
 
export default ToDo;