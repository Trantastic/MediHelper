// import React from "react";
// const mongoose = require("mongoose");
// const express = require("express");

// const app = express();

// //Variable to hold the phone number texted for assistence
// let caretakerPhone = "";

// // Twilio Credentials
// const accountSid = "ACf6c36a2408031fa42185a595059cd3fa";
// const authToken = "42e61773eba63f88e812a370013294aa";

// class Help extends React.Component {
// 	state = {
// 		helpNumber: ""
// 	};

// 	// componentDidMount = () => {
// 	// 	//HOW DO I ACCESS THE USER HERRRRREEEEE???
// 	// 	db.Caretaker.find({ req.user.username })
// 	// 	.then(function(dbCaretaker)	{
// 	// 		res.json(dbCaretaker.phoneNum);
// 	// 		caretakerPhone = dbCaretaker.phoneNum;
// 	// 	})
// 	// 	.catch(function(err)	{
// 	// 		res.json(err);
// 	// 	});
// 	// 	//Add "+1" to the beginning of the res.Caretaker.phoneNum
// 	// 	caretakerPhone = "+1" + caretakerPhone;
// 	// 	console.log(caretakerPhone);
// 	// 	this.setState({ helpNumber: caretakerPhone });
// 	// 	});
// 	// };

// 	getHelp = () => {
		

// 		// require the Twilio module and create a REST client
// 		const client = require('twilio')(accountSid, authToken);

// 		client.messages
// 		  .create({
// 		    to: this.state.helpNumber,
// 		    from: "+18312469287",
// 		    body: "Your patient needs help! Please assist!",
// 		  })
// 		 .then((message) => console.log(message.sid));
// 	};
// 	render() {
// 		return (
// 			<div className="help-button-div">
// 				<h1>Home Page</h1>
// 				<button type="button" className="help-button btn-danger btn-block" onClick={ this.getHelp }>Help</button>
// 			</div>
// 		);
// 	}
// }
// export default Help;
import React from 'react';
import 'whatwg-fetch';


let caretaker = "";
console.log("1" + caretaker);

let helpNumber = "";

class Help extends React.Component {
  	constructor(props) {
    	super(props);
    	this.state = {
    		caretaker: null
    	};
    	console.log("2" + this.props.caretaker);
    	console.log("3" + this.props);
  	}

	componentDidMount = () => {
		console.log("4 This is happening");
		// helpNumber = "+1" + this.props.caretaker.phoneNumb;
		console.log("5" + helpNumber);
	};

	getHelp = () =>	{
		fetch('/sendsms', {
    		method: 'POST',
    		headers: {
    			Accept: 'application/JSON',
    			'Content-Type': 'application/JSON'
      		},
      		//how to get message and caretaker's phone number in there???
      		body: JSON.stringify({ data: +18314356776 })
    	})
    	.then(resp => {
      		console.log("6" + resp)
    	})
	}

	asyncSolver = () => {
		if (this.props.caretaker != null && this.state.caretaker === null){
			this.setState({caretaker: this.props.caretaker});
		}
	}

	render() {
		return (
			<div className="help-button-div">
			{this.asyncSolver()}
				<h3>If you need assistance, press help to notify your caretaker</h3>
				<button type="button" className="help-button btn-danger btn-block" onClick={ this.getHelp }>Help</button>
			</div>
		);
	}
}

export default Help;