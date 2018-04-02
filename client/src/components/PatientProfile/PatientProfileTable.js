import React from "react";

const PatientProfileTable = props => (
	<table className="table table-bordered table-striped w-50 float-right">
		<tbody>
		    <tr>
				<td>Name: {props.firstName} {props.lastName}</td>
				<td>Preferred Language: {props.preferredLanguage}</td>
		    </tr>
		    <tr>
		    	<td colSpan="2">Address: {props.address}</td>
		    </tr>
		    <tr>
		    	<td colSpan="2">Medical Conditions: {props.medicalCond}</td>
		    </tr>
		    <tr>
		    	<td>Medication: {props.medication}</td>
		    	<td>Allergies: {props.allergies}</td>
		    </tr>
		    <tr>
		    	<td colSpan="2">Notes: {props.notes}</td>
		    </tr>
		    <tr>
		    	<td>Physican Name: {props.primaryCareName}</td>
		    	<td>Phone: {props.primaryCareNumber}</td>
		    </tr>
		    <tr>
		    	<td>Emergency Contact: {props.contactFirstName} {props.contactLastName} ({props.contactRelationship})</td>
		    	<td>Phone: {props.contactNumb}</td>
		    </tr>
		</tbody>
	</table>



);

export default PatientProfileTable;