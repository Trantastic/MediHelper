import React, { Component } from 'react';
import FullCalendar from "fullcalendar-reactwrapper";
import "fullcalendar-reactwrapper/dist/css/fullcalendar.min.css";
import Moment from 'moment';

class Calendar extends Component {
	constructor(props)	{
		super(props);
		this.state = {
			event: [
				{
          title: 'Long Event',
          start: '2018-03-07',
          end: '2018-03-10'
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
							text: "Create A Calendar Event Here...",
						}
					}}
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