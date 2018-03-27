// NEED TO ADD CORRECT ROUTES TO NAVBAR BUTTONS
import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar = props => {

  if (props.loggedIn) {
    return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">MediHelp</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Hospital</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Urgent</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Pharmacy</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={props._logout}>Log Out</Link>
            </li>
          </div>
        </div>
      </nav>
    </div> 
    )
  } else {
    return (
    <div>
      
    </div>
    )
  } 
};

export default Navbar;