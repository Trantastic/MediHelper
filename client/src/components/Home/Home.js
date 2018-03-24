import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

class Home extends Component {
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
				<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Signup</button>

				<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				  <div className="modal-dialog" role="document">
				    <div className="modal-content">
				      <div className="modal-header">
				        <h5 className="modal-title" id="exampleModalLabel">Sign Up</h5>
				        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
				          <span aria-hidden="true">&times;</span>
				        </button>
				      </div>

					    <div className="modal-body">
					      <div className="SignupForm">
									<label htmlFor="username">Username</label><br />
										<input type="text" name="username" value={this.state.username} onChange={this.handleChange} /><br />
									<label htmlFor="password">Password</label><br />
										<input type="password" name="password" value={this.state.password} onChange={this.handleChange}	/><br />
									<label htmlFor="confirmPassword">Confirm Password</label><br />
										<input type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange}/>
								</div>
				      </div>

				      <div className="modal-footer">
				        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
				        <button type="submit" onClick={this.handleSubmit} className="btn btn-primary">Submit</button>
				      </div>
				    </div>
				  </div>
				</div>
			</div>
		);
	};
};


export default Home;