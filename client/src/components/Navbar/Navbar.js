// NEED TO ADD CORRECT ROUTES TO NAVBAR BUTTONS

import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
	<nav className='navbar navbar-bottom bg-light'>
		<div className="collapse navbar-collapse" id="navbarSupportedContent">
  		<ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/">Home</Link>
        </li>
  			<li className="nav-item active">
    			<Link className="nav-link" to="#">Hospital</Link>
  			</li>
    			<li className="nav-item">
      			<Link className="nav-link" to="#">Urgent</Link>
    			</li>
    			<li className="nav-item">
      			<Link className="nav-link" to="#">Pharmacy</Link>
    			</li>
    		</ul>
    </div>
	</nav>
);

export default Navbar;