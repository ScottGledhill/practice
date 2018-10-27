import React, { Component } from 'react';
import Counter from './Counter.js'

class Counters extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>

    );
  }
}
 
export default Counters;