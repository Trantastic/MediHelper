import React, { Component } from 'react';
import { PatientDropDown, DropDownList } from '../PatientDropDown';
import PatientProfile from '../PatientProfile';
import Calendar from '../Calendar';
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
	loadPatients = () => {
		API.getPatients(this.props.caretaker._id)
			.then(res =>
				this.setState({patients: res.data})
				// console.log("loadpatients", res.data)
			)
			.catch(error => console.log(error));
	};

	// loadPatients = () => {
	// 	API.getPatients()
	// 		.then(res =>
	// 			this.setState({patients: res.data})
	// 		)
	// 		.catch(error => console.log(error));
	// };

	asynSolver = () => {
		if(this.props.caretaker !== null && this.state.caretaker === null){
			this.setState({caretaker: this.props.caretaker});
			this.loadPatients();
		}
		return;
	}

	render() {
		console.log("state ", this.state);
		return (
			<div>
				{this.asynSolver()}
				<PatientDropDown>
					{this.state.patients.map(patients => {
						return (
							<DropDownList
								key={patients.id}
								patientId={patients._id}
								firstName={patients.firstName}
								lastName={patients.lastName}
							/>
						);
					})}		
				</PatientDropDown>
				<div className="calendar-card">
  					<div className="calendar-card-body">
						<Calendar />
					</div>
				</div>
			</div>
		);
	}
}

export default Dashboard;