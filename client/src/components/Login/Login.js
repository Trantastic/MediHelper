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
				<div>
					<a data-toggle="modal" data-target="#exampleModal">Login</a>

					<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
					  <div className="modal-dialog" role="document">
					    <div className="modal-content">
					      <div className="modal-header">
					        <h5 className="modal-title" id="exampleModalLabel">Login</h5>
					        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
					          <span aria-hidden="true">&times;</span>
					        </button>
					      </div>

					      <div className="container ">
							    <div className="modal-body">
							      <div className="LoginForm">
											<label htmlFor="username">Username</label><br />
												<input type="text" name="username" value={this.state.username} onChange={this.handleChange} /><br />
											<label htmlFor="password">Password</label><br />
												<input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
										</div>
						      </div>

						      <div className="modal-footer">
						        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
						        <button type="submit" onClick={this.handleSubmit} className="btn btn-primary">Login</button>
						      </div>
					      </div>
					    </div>
					  </div>
					</div>
				</div>
			);
		};
	};
};

export default Login;