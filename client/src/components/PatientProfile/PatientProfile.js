import React from 'react';
import { Link, Route } from 'react-router-dom';
import AssessmentButton from "../AssessmentButton";
import Dashboard from "../Dashboard";
import './PatientProfile.css';

const PatientProfile = props => (
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
			    	<td>Physican Name: {props.physican}</td>
			    	<td>Phone: </td>
			    </tr>
			    <tr>
			    	<td>Emergency Contact:{props.name} ({props.relationship})</td>
			    	<td>Phone: </td>
			    </tr>
			</tbody>
		</table>
		<Route exact path="/dashboard" component={Dashboard} />
	</div>
);

export default PatientProfile;