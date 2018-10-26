import React, { Component } from 'react';
import './App.css';
import Clock from './ClockComponents.js/Clock'
import Counter from './CounterComponents.js/Counter'

class App extends Component {
  render() {
    return (
      <div>
        <Clock />
        <Counter />
      </div>
    );
  }
}
  
export default App;
