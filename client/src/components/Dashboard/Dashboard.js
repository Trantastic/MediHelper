import React, { Component } from 'react';
import { PatientDropDown, DropDownList } from '../PatientDropDown';
import Calendar from '../Calendar';
import Login from '../Login';
import './Dashboard.css';
import API from "../../utils/API";

class Dashboard extends Component {

	state = {
		patients: [],
		caretaker: null
		// calendar: []
	};

	// Retrieves all patients associated with caretaker and 
	// creates a button for each of them in the drop drop menu
	// loadPatients = () => {
	// 	API.getPatients(this.props.caretaker._id)
	// 		.then(res =>
	// 			this.setState({patients: res.data})
	// 			// console.log("loadpatients", res.data)
	// 		)
	// 		.catch(error => console.log(error));
	// };

	loadPatients = () => {
		API.getPatients()
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
	}

	mapSolver = () => {
		return;
	}

	render() {
		return (
			<div>
				{this.asynSolver()}
				<PatientDropDown>
					{this.state.patients !== null ? this.state.patients.map(patients => {
						return (
							<DropDownList
								key={patients._id}
								patientId={patients._id}
								firstName={patients.firstName}
								lastName={patients.lastName}
							/>
						);
					}) : this.mapSolver()}		
				</PatientDropDown>
			</div>
		);
	}
}

export default Dashboard;