import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Counter extends Component {
  constructor () {
    super()
    this.handleIncrement = this.handleIncrement.bind(this)
  }
  state = { 
    count: 2
  }

  handleIncrement() {
    console.log('increment clicked')
  }
  
  render() { 

    return ( 
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm"> Increment </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}
 

export default Counter;