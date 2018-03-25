import React from 'react';
import {Link, Route} from 'react-router-dom';
import PatientProfile from '../PatientProfile';

 export const DropDownList = props => (
 	<div>
		<Link to="dashboard/patientprofile" className="dropdown-item">{props.name}</Link>
		<Route exact path="dashboard/patientprofile" component={PatientProfile}/>
	</div>
);