import React from 'react';
import { Link } from 'react-router-dom';
import './PatientDropDown.css'

export const PatientDropDown = props => {
	return (
		<div className="container">
			<div className="dropdown">
				<button className="btn patientsBtn text-white btn-md dropdown-toggle mt-5" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					Patient Selection
				</button>
				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					<Link to="/patientform" className="dropdown-item">Add Patient</Link>
					{props.children}
				</div>
			</div>
		</div>
	);
};