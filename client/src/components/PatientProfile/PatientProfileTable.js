import React from "react";

const PatientProfileTable = props => (
	<div className="container">
	<table className="table table-striped w-50 float-right mb-5 bg-white">
		<tbody>
		    <tr>
					<td>
						<div className="title">Name</div> 
						<p>{props.firstName} {props.lastName}</p></td>
					<td>
						<div className="title">Preferred Language</div> 
						<p>{props.preferredLanguage}</p>
					</td>
		    </tr>

		    <tr>
		    	<td colSpan="2">
		    		<div className="title">Address</div> 
		    		<p>{props.address}</p> 
		    		<p>{props.city}, {props.state} {props.zip}</p>
		    	</td>
		    </tr>

		    <tr>
		    	<td colSpan="2">
		    		<div className="title">Medical Conditions</div> 
		    		<p>{props.medicalCond}</p>
		    	</td>
		    </tr>

		    <tr>
		    	<td>
		    		<div className="title">Medication</div> 
		    		<p>{props.medication}</p>
		    	</td>
		    	<td>
		    		<div className="title">Allergies</div> 
		    		<p>{props.allergies}</p>
		    	</td>
		    </tr>

		    <tr>
		    	<td colSpan="2">Notes: {props.notes}</td>
		    </tr>

		    <tr>
		    	<td>
		    		<div className="title">Physican Name</div> 
		    		<p>{props.primaryCareName}</p>
		    	</td>
		    	<td>
		    		<div className="title">Phone</div> 
		    		<p>{props.primaryCareNumber}</p>
		    	</td>
		    </tr>

		    <tr>
		    	<td>
		    		<div className="title">Emergency Contact</div> 
		    		<p>{props.contactFirstName} {props.contactLastName} ({props.contactRelationship})</p>
		    	</td>
		    	<td>
		    		<div className="title">Phone</div> 
		    		<p>{props.contactNumb}</p>
		    	</td>
		    </tr>
		</tbody>
	</table>
	</div>



);

export default PatientProfileTable;