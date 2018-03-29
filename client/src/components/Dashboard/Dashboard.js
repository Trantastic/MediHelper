import React, { Component } from 'react';
import { PatientDropDown, DropDownList } from '../PatientDropDown';
import PatientProfile from '../PatientProfile';
import API from "../../utils/API";
import { caretaker } from "../../App";
// import calendar component

console.log(this.props.caretaker);

class Dashboard extends Component {

	state = {
		patients: [],
		// calendar: []
	};

	componentDidMount(){
		// API calls to DB to get all patients and calendar events
		this.loadPatients();
		// this.getCalendar();
	};

	// Retrieves all patients associated with caretaker and 
	// creates a button for each of them in the drop drop menu
	loadPatients = () => {
		// Need to feed caretaker id into get.Patients
		API.getPatients()
			.then(res =>
				this.setState({patients: res.data})
			)
			.catch(error => console.log(error));
	};

	render() {
		return (
			<div>
				{/*<Calendar />*/}
				<PatientDropDown>
					{this.state.patients.map(patients => {
						return (
							<DropDownList
								key={patients.id}
								firstName={patients.firstName}
								lastName={patients.lastName}
								/*patientId: {patients.id}*/
							/>
						);
					})}		
				</PatientDropDown>
			</div>
		);
	}
}

export default Dashboard;