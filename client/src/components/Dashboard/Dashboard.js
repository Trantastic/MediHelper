import React, {Component} from 'react';
import './PatientDropDown';
// import calendar component
// import API methods

class Dashboard extends Component {
	/*Psuedo-code
Hierarchy:
	Ultimate parent - App.js
	Wrapper - Navbar
	Dashboard
	Calendar - PatientDropDown
				->PatientProfile || PatientInputForm

	*/

	state = {
		patient: [],
		calendar: []
	};

	componentDidMount(){
		// API calls to DB to get all patients and calendar events
		this.getPatients();
		this.getCalendar();
	}

	// Retrieves all patients associated with caretaker and 
	// creates a button for each of them in the drop drop menu
	/*
	getPatients = () => {
		API.getPatients()
			.then(res =>
				this.setState({patient: res.data.name})
			)
			.catch(error => console.log(error));
	};

	*/

	render(){
		return(
			<div>
				<Calendar />
				<PatientDropDown 
					// getPatients: {this.getPatients}
					{this.state.patient.map(patient => (
						<DropdownListItem 
						patientName: {patient.name}

						/>
					))}		
				/>
			</div>
		);
	}
}

export default Dashboard;