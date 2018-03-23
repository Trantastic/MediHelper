import React, {Component} from 'react';
// import calendar component
// import patient drop down component

class Dashboard extends Component {
	/*Psuedo-code
Hierarchy:
	Ultimate parent - App.js
	Wrapper - Navbar
	Dashboard
	Calendar - PatientDropDown
				->PatientProfile || PatientInputForm

	*/
	componentDidMount(){
		// API calls to DB to get all patients and calendar events
		this.getPatients();
		this.getCalendar();
	}

	render(){
		return(
			<div>
				<Calendar />
				<PatientDropDown 
					getPatients: {this.getPatients}
				/>
			</div>
		);
	}
}

export default Dashboard;