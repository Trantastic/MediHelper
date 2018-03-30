import React from 'react';
import 'whatwg-fetch';


let caretaker = "";
// console.log(caretaker);
console.log(this.state);

class Help extends React.Component {
  	constructor(props) {
    	super(props);
    	this.state = {
    		caretaker: this.props.caretaker
    	};
    	console.log(caretaker);
  	}

	componentDidMount = () => {
		this.setState({caretaker: this.props.caretaker});
		console.log("This is happening");
		caretaker = this.props.caretaker;
		console.log(caretaker);
		// caretakerPhone = this.props.caretaker.phoneNum
		// console.log(this.props.caretaker.phoneNum);

		// caretakerPhone = "+1" + caretakerPhone;
		// console.log(caretakerPhone);

		this.setState({ helpNumber: this.props.caretakerPhone });
	};

	getHelp = () =>	{
		fetch('/sendsms', {
    		method: 'POST',
    		headers: {
    			Accept: 'application/JSON',
    			'Content-Type': 'application/JSON'
      		},
      		//how to get message and caretaker's phone number in there???
      		body: JSON.stringify({ data: +18314356776 })
    	})
    	.then(resp => resp.json())
    	.then(resp => {
      		console.log(resp)
    	})
	}

	render() {
		return (
			<div className="help-button-div">
				<h1>Home Page</h1>
				<button type="button" className="help-button btn-danger btn-block" onClick={ this.getHelp.bind(this) }>Help</button>
			</div>
		);
	}
}

export default Help;