import React from 'react';
import { Link } from 'react-router-dom';

export const DropDownList = props => (
 	<div>
		<Link to="/dashboard/patientprofile" className="dropdown-item">{props.firstName} {props.lastName}</Link>
	</div>
);