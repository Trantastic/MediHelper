import React from 'react';
import {Link} from 'react-router-dom';

 export const DropDownList = props => (
	<Link to="#" className="dropdown-item">{props.name}</Link>
);