import React, { Component } from 'react';

class Dictionary extends Component {

	state = {
		drug: ''
	}

	initSearch = (e) => {
		e.preventDefault();

		fetch('https://api.fda.gov/drug/label.json?search=levodopa+AND+carbidopa')
			.then((req, res) => {
				return res.json.results[0].indications_and_usage
			})
			.catch(error => (
				console.log('ERROR: ', error)
			))
	}

	handleInput = (e) => {
		const { id, value } = e.target;
		this.setState({ [id]: value });
		console.log(this.state);
	}

	render() {
		return(
			<div>
				<input className="form-control" id='drug' value={ this.state.drug } type="search" placeholder="Search for a medication" aria-label="Search" onChange={ this.handleInput } />
				<button className='btn btn-primary' type='submit' onClick={ this.initSearch }>Search</button>
			</div>
		)
	}
}

export default Dictionary;