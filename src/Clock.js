import React, { Component } from 'react';

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this) 
		this.state = {
			date: new Date(),
			timeShown: false
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
	
	handleClick() {
		const currentState = this.state.timeShown;
		this.setState({ timeShown: !currentState });
		console.log(this.state.timeShown)
	}


  render() {
    return (
      <div>
				<button onClick={this.handleClick}> 
					<div className="time"> Time </div>
				</button>

				<button> 
					<div className="time"> {this.state.date.toLocaleTimeString()} </div>
				</button>
      </div>
    );
  }
}

export default Clock