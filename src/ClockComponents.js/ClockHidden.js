import React, { Component } from 'react';

class ClockHidden extends Component {
  render() { 
    return (
    <button> 
      <div className="time"> {this.props.date.toLocaleTimeString()} </div>
    </button>
    )
  }
}

export default ClockHidden;