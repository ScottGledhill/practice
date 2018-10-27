import React, { Component } from 'react';
import './App.css';
import Clock from './ClockComponents.js/Clock'
import Counters from './CounterComponents.js/Counters'
import NavBar from './NavbarComponents.js/Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <main classname="container"></main>
        <Clock />
        <Counters />
      </div>
    );
  }
}
  
export default App;
