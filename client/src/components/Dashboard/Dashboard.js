import React, { Component } from 'react';
import { PatientDropDown, DropDownList } from '../PatientDropDown';
// import calendar component

class Dashboard extends Component {

	state = {
		patient: ["John", "Pat", "Don", "Susie", "Frank"]
		// calendar: []
	};

	// componentDidMount(){
	// 	// API calls to DB to get all patients and calendar events
	// 	this.getPatients();
	// 	this.getCalendar();
	// };

	// Retrieves all patients associated with caretaker and 
	// creates a button for each of them in the drop drop menu
	// getPatients = () => {
	// 	// Need to feed caretaker id into get.Patients
	// 	API.getPatients()
	// 		.then(res =>
	// 			this.setState({patient: res.data})
	// 		)
	// 		.catch(error => console.log(error));
	// };

	render() {
		return (
			<div>
				{/*<Calendar />*/}
				<PatientDropDown>
					{this.state.patient.map(patients => {
						return (
							<DropDownList
								name={patients}
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
