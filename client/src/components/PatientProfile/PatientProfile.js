import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import AssessmentButton from "../AssessmentButton";
import Dashboard from "../Dashboard";
import './PatientProfile.css';
import API from "../../utils/API";

// function delete() {
// 		API.deletePatient("5abbf6863c2494375f13caff")
// 			.then(res => console.log("deletePatient ", res.data))
// 			.catch(err => console.log(err)); 
// 	};

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
			<button type="submit" className="btn btn-primary" onClick={this.delete}>Delete</button>	
		</table>
		<Route exact path="/dashboard" component={Dashboard} />
	</div>
);

export default PatientProfile;