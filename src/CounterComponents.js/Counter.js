import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Counter extends Component {
  state = { 
    count: 0
  }

  styles = {
    fontSize: 50,
    fontWeight: "bold"
  }

  render() { 
    return ( 
      <div>
        <span className="badge badge-warning m-2">{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm"> Increment </button>
      </div>
    );
  }
  formatCount() {
    const { count } = this.state; test
    return count === 0 ? "Zero" : count;
  }
}
 

export default Counter;