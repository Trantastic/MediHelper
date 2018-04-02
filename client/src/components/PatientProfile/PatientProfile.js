import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Dashboard from "../Dashboard";
import UpdatePatientProfile from "./UpdatePatientProfile";
import PatientProfileTable from "./PatientProfileTable";
import './PatientProfile.css';
import API from "../../utils/API";

class PatientProfile extends Component {

	state = {
		patientInfo: [],
		pageLoaded: false,
		redirectToUpdate: false
	}

	componentDidMount() {
		this.loadPatientInfo();
	}

	loadPatientInfo = () => {
		// debugger;
		API.getOnePatient(this.props.match.url.substr(this.props.match.url.lastIndexOf("/")+1))
			.then(res =>
				this.setState({patientInfo: res.data})
				// console.log("res.data", res.data)
			)
			.catch(error => console.log(error));
	};

	// Redirects to pre-filled out patient input form when Update Profile is clicked
	handleUpdateSubmit = (event) => {
		event.preventDefault();
		this.setState({redirectTo: true})
	};

	updateProfile = (event) => {
		event.preventDefault();

		API.updatePatient({
			    firstName: this.props.firstName,
			    lastName: this.props.lastName,
			    address: this.props.address,
			    address2: this.props.address2,
			    city: this.props.city,
			    state: this.props.state,
			    zip: this.props.zip,
			    preferredLanguage: this.props.preferredLanguage,
			    medicalCond: this.props.medicalCond,
			    medication: this.props.medication,
			    allergies: this.props.allergies,
			    notes: this.props.notes,
			    primaryCareName: this.props.primaryCareName,
			    primaryCareNumber: this.props.primaryCareNumber,
			    contactFirstName: this.props.contactFirstName,
			    contactLastName: this.props.contactLastName,
			    contactRelationship: this.props.contactRelationship,
			    contactNumb: this.props.contactNumb
		}).then(alert("Success!"));
	}

	// Solves asynchronous issue of loadPatientInfo firing off before page loads
	// asynSolver = () => {
	// 	if(this.state.patientInfo.length === 0 && this.state.pageLoaded === false){
	// 		this.setState({pageLoaded: true});
	// 		this.loadPatientInfo();
	// 		console.log("patient profile ", this.state.patientInfo);
	// 	}
	// 	return;
	// }

	// Grabbing patient ID from url and uses it to delete patient once "Delete Patient" btn is clicked and reloads patients for drop down menu
	deletePatient = () => {
		API.deletePatient(this.props.match.url.substr(this.props.match.url.lastIndexOf("/")+1))
			.then(res => console.log("res", res))
			.catch(err => console.log(err)); 
	};

	render() {
		// {this.asynSolver()}

		if(this.state.redirectTo) {
			return <UpdatePatientProfile 
				key={this.state.patientInfo[0]._id}
				firstName={this.state.patientInfo[0].firstName}
				lastName={this.state.patientInfo[0].lastName}
				address={this.state.patientInfo[0].address}
				address2={this.state.patientInfo[0].address2}
				city={this.state.patientInfo[0].city}
				state={this.state.patientInfo[0].state}
				zip={this.state.patientInfo[0].zip}
				preferredLanguage={this.state.patientInfo[0].preferredLanguage}
				medicalCond={this.state.patientInfo[0].medicalCond}
				medication={this.state.patientInfo[0].medication}
				allergies={this.state.patientInfo[0].allergies}
				notes={this.state.patientInfo[0].notes}
				primaryCareName={this.state.patientInfo[0].primaryCareName}
				primaryCareNumber={this.state.patientInfo[0].primaryCareNumber}
				contactFirstName={this.state.patientInfo[0].contactFirstName}
				contactLastName={this.state.patientInfo[0].contactLastName}
				contactRelationship={this.state.patientInfo[0].contactRelationship}
				contactNumb={this.state.patientInfo[0].contactNumb}

				updateProfile={this.updateProfile}
			/>
		} else if(this.state.patientInfo.length !== 0){
		return (
			<div>
				<Dashboard />

				<button className="assessmentbtn">
					<Link to="/dashboard/assessment">Assessment Form</Link>
				</button>
		
				<PatientProfileTable 
					key={this.state.patientInfo[0]._id}
					firstName={this.state.patientInfo[0].firstName}
					lastName={this.state.patientInfo[0].lastName}
					address={this.state.patientInfo[0].address}
					address2={this.state.patientInfo[0].address2}
					city={this.state.patientInfo[0].city}
					state={this.state.patientInfo[0].state}
					zip={this.state.patientInfo[0].zip}
					preferredLanguage={this.state.patientInfo[0].preferredLanguage}
					medicalCond={this.state.patientInfo[0].medicalCond}
					medication={this.state.patientInfo[0].medication}
					allergies={this.state.patientInfo[0].allergies}
					notes={this.state.patientInfo[0].notes}
					primaryCareName={this.state.patientInfo[0].primaryCareName}
					primaryCareNumber={this.state.patientInfo[0].primaryCareNumber}
					contactFirstName={this.state.patientInfo[0].contactFirstName}
					contactLastName={this.state.patientInfo[0].contactLastName}
					contactRelationship={this.state.patientInfo[0].contactRelationship}
					contactNumb={this.state.patientInfo[0].contactNumb}
				/>

				<Link to={"/dashboard"}>
					<button type="submit" className="btn btn-danger" onClick={this.deletePatient}>Delete Patient</button>
				</Link>

				<button type="submit" className="btn btn-info" onClick={this.handleUpdateSubmit}>Update Profile</button>
			</div>
		);};

		return (
			<p>Page is still loading</p>
		)
	};
};

export default PatientProfile;