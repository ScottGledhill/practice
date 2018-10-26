import React, { Component } from 'react';

class ClockShown extends Component {
	constructor(props) {
    super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {timeShown: false}
  }

	handleClick() {
		const currentState = this.state.timeShown;
		this.setState({ timeShown: !currentState });
	}

	render() { 
		const timeShown = this.state.timeShown
		if (timeShown) {
			return (
				<div className="time-container">
					<button onClick={this.handleClick}> 
						<div className="time"> {this.props.date.toLocaleTimeString()} </div>
					</button>
				</div>
			)
		} else {
			return (
				<div className="time-container">
					<button onClick={this.handleClick}>  
						<div className="time"> Show Time </div>
					</button>
				</div>
			);	
		}
	}
}
 
export default ClockShown;
