import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

class SignUp extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',
			redirectTo: null
		}
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
		// TODO - validate!
		axios
			.post('/auth/signup', {
				username: this.state.username,
				password: this.state.password
			}).then(response => {
				console.log(response)

				if (!response.data.errmsg) {
					console.log('youre good')
					this.setState({
						redirectTo: '/login'
					});
				} else {
					console.log('duplicate')
				}
			});
	};

	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		}

		return (
			<div>
				<div className="row">
					<div className="col-md-12">
						<div className="card bg-light mb-3 container">
			  			<div className="card-header">Register</div>
			  				<div className="card-body">
									<form className="SignupForm">
										<label htmlFor="username">Username</label><br />
											<input type="text" name="username" value={this.state.username} onChange={this.handleChange} /><br />
										<label htmlFor="password">Password</label><br />
											<input type="password" name="password" value={this.state.password} onChange={this.handleChange}	/><br />
										<label htmlFor="confirmPassword">Confirm Password</label><br />
											<input type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange}/><br />
											<button type="submit" onClick={this.handleSubmit} className="btn btn-primary signupBtn">Submit</button>	
									</form>
			  				</div>
						</div>
					</div>
				</div>	
			</div>
		);
	};
};


export default SignUp;

