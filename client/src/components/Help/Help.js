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
				<input type="image" className="help-button img-fluid" src="https://cdn1.iconfinder.com/data/icons/medical-services-set-2/256/10-512.png" alt="help button to send text to caretaker" onClick={ this.getHelp } />
				<h3 className="helpHeader text1 text-center">If you need</h3>
				<h3 className="helpHeader text2 text-center">assistance</h3>
				<h3 className="helpHeader text3 text-center">click here</h3>
			</div>
		);
	}
}

export default Help;