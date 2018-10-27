import React, { Component } from 'react';
import './App.css';
import Clock from './ClockComponents.js/Clock'
import Counters from './CounterComponents.js/Counters'

class App extends Component {
  render() {
    return (
      <div>
        <Clock />
        <Counters />
      </div>
    );
  }
}
  
export default App;
