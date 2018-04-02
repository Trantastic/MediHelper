import React, { Component } from 'react';
import FullCalendar from "fullcalendar-reactwrapper";
import "fullcalendar-reactwrapper/dist/css/fullcalendar.min.css";
import "./EventInput.js";
import "./EventInput.css";
import Moment from 'moment';

class Calendar extends Component {
	constructor(props)	{
		super(props);
		this.state = {
			event: [
				{
                    title: 'Long Event',
                    start: "2018-04-05",
                    end: "2018-04-08"
                },
			],
		}
	}
	
	render ()	{
		return (
			<div className="container" id="calendar">
				<FullCalendar id = "calendar-display"
					header = {{
						left: "prev,next",
						center: "title",
						right: "month,agendaWeek,agendaDay,listWeek"
					}}
					footer = {{
						left: "addEventButton"
					}}
					customButtons= {{
						addEventButton: {
							text: "Create An Event",
							// click: this.openModal
						}
					}}
// 					//Where do I add the fields for each event????
					navLinks= { true }
					editable= { true }
					eventLimit= { true }
					events= { this.state.event } 
				/>
			</div>
		);
	}
}

export default Calendar;