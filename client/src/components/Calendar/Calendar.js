<<<<<<< HEAD
import React, { Component } from 'react';
import FullCalendar from "fullcalendar-reactwrapper";
import "fullcalendar-reactwrapper/dist/css/fullcalendar.min.css";
import Moment from 'moment';
// moment().format();
// 	// import "./Calendar.css";
// require Moment from "http://momentjs.com/downloads/moment.min.js";

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
			<div id="calendar">
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
// 					// 		// click: this.makeEvent
						}
					}}
// 					//Where do I add the fields for each event????
					// defaultDate= { moment() }
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
=======
// import React, { Component } from 'react';
// import FullCalendar from "fullcalendar-reactwrapper";
// 	//Import CSS file if styling doesn't show from "fullcalendar-reactwrapper/dist/css/fullcalendar.min.css" wherever that is
// 	// import "./Calendar.css";
// require Moment from "http://momentjs.com/downloads/moment.min.js";

// class CareCalendar extends React.Component {
// 	constructor(props)	{
// 		super(props);
// 		this.state = {
// 			event: [
// 				{	
// 					title: "",
// 					start: ""
// 				}
// 			],
// 		}
// 	}
// 	render ()	{
// 		return (
// 			<div id="care-calendar">
// 				<FullCalendar id = "calendar-display"
// 					header = {{
// 						left: "prev,next",
// 						center: "title",
// 						right: "month,agendaWeek,agendaDay,listWeek"
// 					}}
// 					footer = {{
// 						left: addEventButton
// 					}}
// 					// customButtons= {{
// 					// 	addEventButton: {
// 					// 		text: "Create A Calendar Event Here...",
// 					// 		// click: this.makeEvent
// 					// 	}
// 					// }}
// 					//Where do I add the fields for each event????
// 					defaultDate= { moment() }
// 					navLinks= { true }
// 					editable= { true }
// 					eventLimit= { true }
// 					events= { this.state.event } 
// 				/>
// 			</div>
// 		);
// 	}
// }
>>>>>>> 75d65748277ad451563ec2c838f284d85d12df27
