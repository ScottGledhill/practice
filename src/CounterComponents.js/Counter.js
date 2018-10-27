import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Counter extends Component {

  render() { 
    const { counter, onDelete, onIncrement} = this.props
    
    return ( 
      <div className="counterContainer">
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={() => onIncrement(counter)} className="btn btn-secondary btn-sm"> Increment </button>
        <button onClick={() => onDelete(counter.id)} className="btn btn-danger btn-sm m-2"> Delete</button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const count = this.props.counter;
    return count.value === 0 ? "Zero" : count.value;
  }
}


export default Counter;