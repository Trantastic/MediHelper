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