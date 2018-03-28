import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar = props => {
// shows the navbar if a user is logged in
  if (props.loggedIn) {
    return (
    <div>
      <nav className="navbar navbar-expand-sm loginNav p-3">
        <a className="navbar-brand" href="/dashboard">MediHelp</a>
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
              <Link className="nav-link" to="/login" onClick={props._logout}>Log Out</Link>
            </li>
          </div>
        </div>
      </nav>
    </div> 
    )
  // if not logged in it shows the register and login navbar  
  } else {
    return (
     <div>
      <nav className="navbar navbar-expand-sm loggedOutNav p-3">
        <a className="navbar-brand" href="/dashboard">MediHelp</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav loginLink">
            <li className="nav-item mr-auto">
              <Link className="nav-link ml-auto" to="/">Login</Link>
            </li>
          </div>
        </div>
      </nav>
    </div>
    )
  } 
};

export default Navbar;