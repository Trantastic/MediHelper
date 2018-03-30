import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./Login.css";

class Login extends Component {
// setting the state
	constructor(props) {
		super(props)
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
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: value});
  };   

	// this happens when user logs in -- it redirects them to dashboard if there credentials are true
	handleSubmit(event) {
		event.preventDefault()

		this.props._login(this.state.username, this.state.password)
		if (this.state.username && this.state.password) {
			this.setState({
				redirectTo: "/dashboard"
			});
		}
	};

	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		} else {
			return (
				<div className="container">
					<div className="card bg-light mt-5 loginCard">
		  			<div className="card-header loginHeader text-white text-center">Login</div>
		  				<div className="card-body loginBody">
								<form className="LoginForm">
									<input className="mb-2 loginInput" type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="username" /><br />
									<input className="loginInput" type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="password" /><br /><br />
									<button type="submit" onClick={this.handleSubmit} className="btn text-white loginBtn">Submit</button>
									<p className="text-center mt-4">Don't have an account? <a href="/signup">Register here!</a> </p>
								</form>
							</div>
					</div>
				</div>
			);
		};
	};
};

export default Login;

						    