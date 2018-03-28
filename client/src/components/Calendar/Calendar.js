//Import React and Full Calendar React Wrapper
import React from "react";
import ReactDOM from "react-dom";
import FullCalendar from "fullcalendar-reactwrapper";
import "./Calendar.css";
import "fullcalendar-reactwrapper/dist/css/fullcalendar.min.css";
import db from "../../models";

const mongoose = require("mongoose");
const express = require("express");

const app = express();

// let eventNew = [];



class CareCalendar extends React.Component {
	constructor(props)	{
		super(props);
		this.state = {
			event: [
				{	
					title: "",
					start: ""
				}
			],
		}
	}

	componentDidMount() {
		// db.Event.find({})
		// .then(function(dbEvent)	{
		// 	response.json(dbEvent.event);
		// })
		// .catch(function(err)	{
		// 	response.json(err);
		// });
		
		// this.setState({ event: events });
		// console.log(events);
	};


	//Save Changes button needs a click function that 1) grabs input fields 2)saves as an object 3) Sends onject to db to be stored as new event 
	//4) renders new event on calendar
	getEventInput() {
		// <div className="modal fade" id="eventModal" tabindex="-1" role="dialog" aria-labelledby="eventModalLabel" aria-hidden="true">
  // 			<div className="modal-dialog" role="document">
		// 	    <div className="modal-content">
		// 	      	<div className="modal-header">
		// 	        	<h5 className="modal-title" id="eventModalLabel">Create Event</h5>
		// 	        	<button type="button" className="close" data-dismiss="modal" aria-label="Close">
		// 	         	 <span aria-hidden="true">&times;</span>
		// 	        	</button>
		// 	      	</div>
		// 	  	<div className="modal-body">
		// 		    <form>
		// 				<div className="form-group">
		// 			    	<label for="eventTitle">Event Name</label>
		// 			    	<input type="text" className="form-control" id="eventTitle" />
		// 				</div>
		// 				  	<div className="form-group">
		// 			    	<label for="eventStart">Event Start</label>
		// 			    	<input type="text" className="form-control" id="eventStart" />
		// 			  	</div>
		// 			  	<div className="form-group">
		// 			    	<label for="eventEnd">Event End</label>
		// 			    	<input type="text" className="form-control" id="eventEnd" placeholder="name me" />
		// 			  	</div>
		// 			  	<div className="form-group">
		// 			    	<label for="patientName">Regarding Patient</label>
		// 			    	<input type="text" className="form-control" id="patientName" placeholder="Patient Name" />
		// 			  	</div>
		// 			  	<div className="form-group">
		// 			    	<label for="eventDetails">Event Details</label>
		// 			    	<input type="text" className="form-control" id="eventDetails" />
		// 			  	</div>
		// 			</form>
		// 	    </div>
		// 	    <div className="modal-footer">
		// 	        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
		// 	        <button type="button" className="btn btn-primary">Save changes</button>
		// 	    </div>
		// 	</div>
		// </div>
	}

	makeEvent() {
		// getEventInput()
		// db.Event.
	};

	render() {
		return (
			<div id="care-calendar">
				
			</div>
		
		);
	}
}