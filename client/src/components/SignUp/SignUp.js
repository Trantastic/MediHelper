import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import "./SignUp.css";

class SignUp extends Component {
	// setting the state
	constructor() {
		super()
		this.state = {
			username: "",
			phoneNumb: "",
			password: "",
			usernameErr: "",
			confirmPassword: "",
			redirectTo: null
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	};
	// changes the value as it's being type in
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	};
	// this happens when user signs up grabs input, stores is and redirects to login for authentication 
	handleSubmit(event) {
		event.preventDefault();

		axios.post("/auth/signup", {
				username: this.state.username,
				phoneNumb: this.state.phoneNumb,
				password: this.state.password
			}).then(response => {
			
				if (!response.data.errmsg) {
					this.setState({
						redirectTo: "/"
					});
				} 
			}).catch(err => {
        console.log(err.response)
      });
      this.setState({
						username: "",
						phoneNumb: "",
						password: "",
						confirmPassword: ""
				});
	};

	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		} else {

		return (
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="card bg-light mt-5 signupCard">
			  			<div className="card-header text-white text-center signupHeader">Register</div>
			  				<div className="card-body signupBody">
									<form className="SignupForm">
										<input className="mb-2 signupInput" type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="username" /><br />
										<input className="mb-2 signupInput" type="text" name="phoneNumb" value={this.state.phoneNumb} onChange={this.handleChange} placeholder="phone number" /><br />
										<input className="mb-2 signupInput" type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="password" /><br />
										<input className="signupInput" type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} placeholder="confirm password" /><br /><br />
										<button type="submit" onClick={this.handleSubmit} className="btn text-white signupBtn">Submit</button>	
									</form>
			  				</div>
						</div>
					</div>
				</div>	
			</div>
		);
	};
	}
};


export default SignUp;

