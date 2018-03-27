//Import React and Full Calendar React Wrapper
import React from "react";
import ReactDOM from "react-dom";
import FullCalendar from "fullcalendar-reactwrapper";
import "./Calendar.css";

const mongoose = require("mongoose");
const express = require("express");

const app = express();

let events = [];



class CareCalendar extends React.Component {
	constructor(props)	{
		super(props);
		this.state = {
			event: [
				{	
					//Do I have to list every possible key? or Just required?
					//Or maybe nothing and this is just an empty array???
					title: "xxxxxxx",
					start: "xxxxxxx",
					description: "xxxxxxx"
					// end: "xxxxxxx" (not a required field)
				}
			],
		}
	}

	componentDidMount = () => {
		db.Calendar.find({})
		.then(function(dbCalendar)	{
			res.json(dbCalendar.event);
			events = dbCalendar.event;
		})
		.catch(function(err)	{
			res.json(err);
		});
		console.log(events);
		this.setState({ event: events });
	};

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
						//Do I define the function here or before and call it here???
						click: ???
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