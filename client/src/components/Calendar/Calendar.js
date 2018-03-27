//Import React and Full Calendar React Wrapper
import React from "react";
import ReactDOM from "react-dom";
import FullCalendar from "fullcalendar-reactwrapper";
import "./Calendar.css";


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

	componentDidMount = () => {
		db.Event.find({})
		.then(function(dbEvent)	{
			res.json(dbEvent.event);
		})
		.catch(function(err)	{
			res.json(err);
		});
		
		this.setState({ event: events });
		console.log(events);
	};
	//Save Changes button needs a click function that 1) grabs input fields 2)saves as an object 3) Sends onject to db to be stored as new event 
	//4) renders new event on calendar
	getEventInput = () => {
		<div class="modal fade" id="eventModal" tabindex="-1" role="dialog" aria-labelledby="eventModalLabel" aria-hidden="true">
  			<div class="modal-dialog" role="document">
			    <div class="modal-content">
			      	<div class="modal-header">
			        	<h5 class="modal-title" id="eventModalLabel">Create Event</h5>
			        	<button type="button" class="close" data-dismiss="modal" aria-label="Close">
			         	 <span aria-hidden="true">&times;</span>
			        	</button>
			      	</div>
			  	<div class="modal-body">
				    <form>
						<div class="form-group">
					    	<label for="eventTitle">Event Name</label>
					    	<input type="text" class="form-control" id="eventTitle" />
						</div>
						  	<div class="form-group">
					    	<label for="eventStart">Event Start</label>
					    	<input type="text" class="form-control" id="eventStart" placeholder=??? />
					  	</div>
					  	<div class="form-group">
					    	<label for="eventEnd">Event End</label>
					    	<input type="text" class="form-control" id="eventEnd" placeholder=??? />
					  	</div>
					  	<div class="form-group">
					    	<label for="patientName">Regarding Patient</label>
					    	<input type="text" class="form-control" id="patientName" placeholder="Patient Name" />
					  	</div>
					  	<div class="form-group">
					    	<label for="eventDetails">Event Details</label>
					    	<input type="text" class="form-control" id="eventDetails" />
					  	</div>
					</form>
			    </div>
			    <div class="modal-footer">
			        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
			        <button type="button" class="btn btn-primary">Save changes</button>
			    </div>
			</div>
		</div>
	}

	makeEvent = () => {
		getEventInput();
		// db.Event.
	}

	render() {
		return (
			<div id="care-calendar">
				<FullCalendar 
					id = "xxxxxxx"
				header = {{
					left: "prev,next",
					center: "title",
					right: "month,agendaWeek,agendaDay,listWeek"
				}}
				footer = {{
					left: addEventButton
				}}
				customButtons= {
					addEventButton: {
						text: "Create A Calendar Event Here...",
						click: this.makeEvent
					}
				}
				//Where do I add the fields for each event????
				defaultDate={ moment() }
				navLinks= { true }
				editable= { true }
				eventLimit= { true }
				events = { this.state.event }
				/>
			</div>

		);
	}
}