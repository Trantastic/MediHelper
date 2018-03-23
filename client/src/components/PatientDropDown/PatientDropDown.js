import React from 'react';

const PatientDropDown = props => {
	<div className="dropdown">
		<button onClick={props.getPatients} className="btn btn-secondary btn-lg dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			Dropdown button
		</button>
		<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
			<Link to="#" className="dropdown-item">Add Patient</Link>
			{props.children}
		</div>
	</div>
}