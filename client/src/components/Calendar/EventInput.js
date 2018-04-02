import React, { Component } from 'react';
import "./EventInput.css";
import API from "../../utils/API";

class EventInput extends Component {
	state = {
	  	eventTitle: "",
		startDateAndTime: "",
		endDateAndTime: "",
		rePatient: "",
		description: ""
	};

	handleFormSubmit = event => {
		event.preventDefault();

		API.savePatient({
		  	eventTitle: this.state.eventTitle,
			startDateAndTime: this.state.startDateAndTime,
			endDateAndTime: this.state.endDateAndTime,
			rePatient: this.state.rePatient,
			description: this.state.description
		})
		.catch(err => console.log("eventInput: ", err.response));
	};

	handleInputChange = event => {
		const { id, value } = event.target;
		this.setState({
			[id]: value
		});
	};

	render() {
		return (
			<div className="container mt-5 mb-5">
      			<div className="card border-secondary mb-3">
         			<div className="card-header">
         				<h2>Add Event to Calendar</h2>
         			</div>
	        		<div className="card-body text-secondary">
	    				<form>
	        				<div className="form-group">
	              				<label for="eventTitle">Event Name</label>
	                			<input type="text" className="form-control" id="eventTitle" value={this.state.eventTitle} onChange={this.handleInputChange} />
	          				</div>
	          				<div className="row">
	          					<div className='col-sm-6'>
	          						<div className="form-group">
					                	<label for="startDateAndTime">Start Date and Time</label>
					                	<input type="datetime-local" className="form-control" id="startDateAndTime" value={this.state.startDateAndTime} onChange={this.handleInputChange} />
			                		</div>
			                	</div>
			                	<div className='col-sm-6'>
			                		<div className='col-sm-6'>
	          							<div className="form-group">
						                	<label for="endDateAndTime">End Date and Time</label>
						                	<input type="datetime-local" className="form-control" id="endDateAndTime" value={this.state.endDateAndTime} onChange={this.handleInputChange} />
				                		</div>
			                		</div>
								</div>
							</div>
						</form>
	    			</div>
        		</div>
        	</div>
		);
	}
};

export default EventInput;
