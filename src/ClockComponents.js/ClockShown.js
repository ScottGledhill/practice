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
		console.log(currentState)
	}

	render() { 
		return ( 
			<button onClick={this.handleClick}> 
				<div className="time"> Time </div>
			</button>
		);
	}
}
 
export default ClockShown;