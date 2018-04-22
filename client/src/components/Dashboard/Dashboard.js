import React, { Component } from 'react';
import { PatientDropDown, DropDownList } from '../PatientDropDown';
import Calendar from '../Calendar';
import EventInput from '../Calendar';
import Login from '../Login';
import './Dashboard.css';
import API from "../../utils/API";

class Dashboard extends Component {

	state = {
		patients: [],
		caretaker: null
	};

	// Retrieves all patients associated with caretaker
	loadPatients = () => {
		API.getPatients(this.props.caretaker._id)
			.then(res =>
				this.setState({patients: res.data})
			)
			.catch(error => console.log(error));
	};

	// Solves asynchronous issue of page loading before caretaker id can be grabbed
	asynSolver = () => {
		if(this.props.caretaker !== null && this.state.caretaker === null){
			this.setState({caretaker: this.props.caretaker});
			this.loadPatients();
		}
		return;
	};

	render() {
		return (
			<div>
				{this.asynSolver()}
				<PatientDropDown>
					{this.state.patients.map(patients => {
						return (
							<DropDownList
								key={patients._id}
								patientId={patients._id}
								firstName={patients.firstName}
								lastName={patients.lastName}
							/>
						);
					})}		
				</PatientDropDown>

				
						<div className="calendar-card container">
		  				<div className="calendar-card-body">
							<Calendar />
						</div>
							

				</div>
				<div className="event-input-card">
					<div className="event-input-body">
						<EventInput />
					</div>
				</div>
			</div>
		);
	}
}

export default Dashboard;