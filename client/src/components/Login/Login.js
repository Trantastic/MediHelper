import React, { Component } from "react";
import { Redirect } from "react-router-dom";
class Login extends Component {
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

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	handleSubmit(event) {
		event.preventDefault()
		console.log('handleSubmit')
		this.props._login(this.state.username, this.state.password)
		this.setState({
			redirectTo: '/'
		});
	};

	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		} else {
			return (
				<div className="card bg-light mb-3 container">
	  			<div className="card-header">Login</div>
	  				<div className="card-body">
							<form className="LoginForm">
								<label htmlFor="username">Username</label><br />
									<input type="text" name="username" value={this.state.username} onChange={this.handleChange} /><br />
								<label htmlFor="password">Password</label><br />
									<input type="password" name="password" value={this.state.password} onChange={this.handleChange}/><br />
									<button type="submit" onClick={this.handleSubmit} className="btn btn-primary">Login</button>
							</form>
						</div>
				</div>
			);
		};
	};
};

export default Login;

						    