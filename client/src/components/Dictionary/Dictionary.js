import React, { Component } from 'react';

class Search extends Component {

	// fetch('http://example.com/movies.json')
 //  .then(function(response) {
 //    return response.json();
 //  })
 //  .then(function(myJson) {
 //    console.log(JSON.stringify(myJson));
 //  });

	initSearch = (drug) => {
		fetch('https://api.fda.gov/drug/label.json?search=levodopa+AND+carbidopa', {method: "GET", body:JSON.stringfy(data)})
			.then((req, res) => {
				return res.json.results[0].indications_and_usage;
				// return (res.data);
			})
			.then((data) => {
				console.log(data);
			}) 
	}

	render() {
		return(
			<div>
			</div>
		)
	}
}

export default Search;