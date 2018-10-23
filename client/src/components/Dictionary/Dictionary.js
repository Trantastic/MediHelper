import React, { Component } from 'react';

class Dictionary extends Component {
	state = {
		drug: '',
		drugUse: ''
	}

	handleChange = event => {
		const { id, value } = event.target

		this.setState({
			[id]: value
		})

	}

	handleSubmit = event => {
		event.preventDefault();

		fetch('https://api.fda.gov/drug/label.json?search=' + this.state.drug)
			.then(res => {
				return res.json()
			})
			.then(data => {
				this.setState({
					drugUse: data.results[0].indications_and_usage[0]
				}) 
				// console.log('API DATA: ', this.state.drugUse)
			})
	}

	render() {
		// console.log(this.state.drug)
		return(
			<div>
				<form class="form-inline">
	    			<input class="form-control mr-sm-2" id="drug" type="search" placeholder="Search" aria-label="Search" onChange={ this.handleChange } />
	    			<button class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={ this.handleSubmit }>Search</button>
	  			</form>
	  			<div class="card">
				  <div class="card-body">
				    { this.state.drugUse }
				  </div>
				</div>
	  		</div>
		)
	}


}

export default Dictionary;