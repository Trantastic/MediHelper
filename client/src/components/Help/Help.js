import React from 'react';
import 'whatwg-fetch';


let caretaker = "";
console.log("1" + caretaker);

let helpNumber = "";

class Help extends React.Component {
  	constructor(props) {
    	super(props);
    	this.state = {
    		caretaker: null
    	};
    	console.log("2" + this.props.caretaker);
    	console.log("3" + this.props);
  	}

	componentDidMount = () => {
		console.log("4 This is happening");
		// helpNumber = "+1" + this.props.caretaker.phoneNumb;
		console.log("5" + helpNumber);
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
    	.then(resp => {
      		console.log("6" + resp)
    	})
	}

	asyncSolver = () => {
		if (this.props.caretaker != null && this.state.caretaker === null){
			this.setState({caretaker: this.props.caretaker});
		}
	}

	render() {
		return (
			<div className="help-button-div">
			{this.asyncSolver()}
<<<<<<< HEAD
				<h1>Home Page</h1>
=======
				<h3>If you need assistance, press help to notify your caretaker</h3>
>>>>>>> 75d65748277ad451563ec2c838f284d85d12df27
				<button type="button" className="help-button btn-danger btn-block" onClick={ this.getHelp }>Help</button>
			</div>
		);
	}
}

export default Help;
