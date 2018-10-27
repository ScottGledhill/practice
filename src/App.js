import React, { Component } from 'react';
import './App.css';
import Clock from './ClockComponents.js/Clock'
import Counters from './CounterComponents.js/Counters'
import NavBar from './NavbarComponents.js/Navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      counters : [
        { id: 1, value: 4 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 }
      ]
    }
  }

handleDelete = (counterId) => {
  const counters = this.state.counters.filter(c => c.id !== counterId)
  this.setState({ counters })
}

handleReset = () => {
  const counters = this.state.counters.map(c => {
    c.value = 0
    return c
  })
  this.setState({ counters })
}

handleIncrement = counter => {
  const counters = [...this.state.counters]
  const index = counters.indexOf(counter)
  counters[index] = { ...counter}
  counters[index].value++
  this.setState({ counters })
}

  render() {
    return (
      <div>
        <NavBar />
        <main classname="container">
        <Counters counters={this.state.counters} onReset={this.handleReset} onIncrement={this.handleIncrement} onDelete={this.handleDelete} />
        <Clock />
        </main>
      </div>
    );
  }
}
  
export default App;
