import React, { Component } from 'react';
import ClockHidden from './ClockHidden';
import ClockShown from './ClockShown'

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date()
		};
	}
	
	componentDidMount() {
		this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
		clearInterval(this.timerID);
	}
	
	tick() {
    this.setState({
      date: new Date()
    });
	}

  render() {
    return (
			<div>
			<ClockShown/>
			<ClockHidden date={this.state.date}/>
      </div>
    );
  }
}

export default Clock