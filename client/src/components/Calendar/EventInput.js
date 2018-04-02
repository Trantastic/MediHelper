import React, { Component } from 'react';
import "./EventInput.css";
import API from "../../utils/API";

class EventInput extends Component {
	state = {
	  	eventTitle: "",
		startDate: "",
		startTime: "",
		endDate: "",
		endTime: "",
		rePatient: "",
		description: ""
	};

	handleFormSubmit = event => {
		event.preventDefault();

		API.savePatient({
		  	eventTitle: this.state.eventTitle,
			startDate: this.state.startDate,
			startTime: this.state.startTime,
			endDate: this.state.endDate,
			endTime: this.state.endTime,
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
					                	<label for="startDate">Start Date</label>
					                	<input type="text" className="form-control" id="startDate" inputClass="datepicker" data-date-format="mm/dd/yyyy" placeholder="MM/DD/YYYY" value={this.state.startDate} onChange={this.handleInputChange} />
			                		</div>
			                	</div>
			                	<div className='col-sm-6'>
			                		<div className="form-group">
	        							<div className='input-group time' id='datetimepicker3'>
	        								<label for="startTime">Start Time</label>
	            							<input type='text' className="form-control" id="startTime" placeholder="" value={this.state.startTime} onChange={this.handleInputChange} />
	            							<span className="input-group-addon">
	                							<span className="glyphicon glyphicon-time"></span>
	            							</span>
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
