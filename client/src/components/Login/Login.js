import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./Login.css";

class Login extends Component {
// setting the state
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			redirectTo: null
		};

		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	};
	// changes the value as it's being type in
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	};                                 
	// this happens when user logs in -- it redirects them to dashboard if there credentials are true
	handleSubmit(event) {
		event.preventDefault()
		
		this.props._login(this.state.username, this.state.password)
		this.setState({
			redirectTo: "/dashboard"
		});
	};

	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		} else {
			return (
				<div className="container">
					<div className="card bg-light mt-5 loginCard">
		  			<div className="card-header">Login</div>
		  				<div className="card-body">
								<form className="LoginForm">
									<label htmlFor="username">Username</label><br />
										<input id="loginInput" type="text" name="username" value={this.state.username} onChange={this.handleChange} /><br />
									<label htmlFor="password">Password</label><br />
										<input id="loginInput" type="password" name="password" value={this.state.password} onChange={this.handleChange}/><br /><br />
										<button type="submit" onClick={this.handleSubmit} className="btn btn-primary">Login</button>
								</form>
							</div>
					</div>
				</div>
			);
		};
	};
};

export default Login;

						    