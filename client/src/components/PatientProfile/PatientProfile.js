import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import AssessmentButton from "../AssessmentButton";
import Dashboard from "../Dashboard";
import './PatientProfile.css';
import API from "../../utils/API";

class PatientProfile extends Component {

	state = {
		patientInfo: []
	}

	// componentDidMount() {

	// }

	// Grabbing patient ID from url and uses it to delete patient once "Delete Patient" btn is clicked and reloads patients for drop down menu
	deletePatient = () => {
		API.deletePatient(this.props.match.url.substr(this.props.match.url.lastIndexOf("/")+1))
			.catch(err => console.log(err)); 
	};

	render() {
		return (
			<div>
				<Dashboard />
				<button className="assessmentbtn">
					<Link to="/dashboard/assessment">Assessment Form</Link>
				</button>
				<table className="table table-bordered table-striped w-50 float-right">
					  <tbody>
					    <tr>
							<td>First Name Last Name</td>
							<td>Preferred Language: English</td>
					    </tr>
					    <tr>
					    	<td colSpan="2">123 College Lane, Oakland, CA, 12345</td>
					    </tr>
					    <tr>
					    	<td colSpan="2">Medical Conditions</td>
					    </tr>
					    <tr>
					    	<td>Medication</td>
					    	<td>Allergies</td>
					    </tr>
					    <tr>
					    	<td colSpan="2">Notes</td>
					    </tr>
					    <tr>
					    	<td>Physican Name: {}</td>
					    	<td>Phone: </td>
					    </tr>
					    <tr>
					    	<td>Emergency Contact:{} ({})</td>
					    	<td>Phone: </td>
					    </tr>
					</tbody>
				</table>
				<Link to={"/dashboard"}><button type="submit" className="btn btn-danger" onClick={this.deletePatient}>Delete Patient</button></Link>
			</div>
		);
	}
}

export default PatientProfile;