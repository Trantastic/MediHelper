import React, { Component } from 'react';
import 'whatwg-fetch';
import "./Help.css";

class Help extends Component {
  	constructor(props) {
    	super(props);
    	this.state = {
    		caretaker: null
    	};
  	}

	getHelp = () =>	{
		fetch('/sendsms', {
    		method: 'POST',
    		headers: {
    			Accept: 'application/JSON',
    			'Content-Type': 'application/JSON'
      		},
      		body: JSON.stringify({ data: ("+1" + this.state.caretaker.phoneNumb) })
    	})
    	.then(resp => {
      		console.log(resp);
    	})
	};

	asyncSolver = () => {
		if (this.props.caretaker !== null && this.state.caretaker === null){
			this.setState({caretaker: this.props.caretaker});
		}
	};

	render() {
		{this.asyncSolver()}
		return (
			<div className="help-button-div container">
				<h3 className="helpHeader text-center mt-5">If you need assistance, press help to notify your caretaker by clicking the button</h3>
				<button type="button" className="help-button btn-danger btn-block" onClick={ this.getHelp }>Help</button>
			</div>

		);
	}
}

export default Help;