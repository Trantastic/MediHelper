import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Dashboard from "../Dashboard";
import UpdatePatientProfile from "./UpdatePatientProfile";
import PatientProfileTable from "./PatientProfileTable";
import './PatientProfile.css';
import API from "../../utils/API";

class PatientProfile extends Component {
	constructor(props) {
		super(props)

		this.handleInputChange = this.handleInputChange.bind(this);
		this.updateProfile=this.updateProfile.bind(this);

		// Allows child (UpdatePatientProfile) access to setState for it's onChange function
		this.state = {
			patientInfo: [],
			firstName: "",
		    lastName: "",
		    address: "",
		    address2: "",
		    city: "",
		    state: "",
		    zip: "",
		    preferredLanguage: "",
		    medicalCond: "",
		    medication: "",
		    allergies: "",
		    notes: "",
		    primaryCareName: "",
		    primaryCareNumber: "",
		    contactFirstName: "",
		    contactLastName: "",
		    contactRelationship: "",
		    contactNumb: ""
		};
	}

	componentDidMount() {
		this.loadPatientInfo();
	}

	// Loads current patient's data to use in the patient profile table and update form
	loadPatientInfo = () => {
		API.getOnePatient(this.props.match.url.substr(this.props.match.url.lastIndexOf("/")+1))
			.then(res =>
				this.setState({
					patientInfo: res.data,
					firstName: res.data[0].firstName,
				    lastName: res.data[0].lastName,
				    address: res.data[0].address,
				    address2: res.data[0].address2,
				    city: res.data[0].city,
				    state: res.data[0].state,
				    zip: res.data[0].zip,
				    preferredLanguage: res.data[0].preferredLanguage,
				    medicalCond: res.data[0].medicalCond,
				    medication: res.data[0].medication,
				    allergies: res.data[0].allergies,
				    notes: res.data[0].notes,
				    primaryCareName: res.data[0].primaryCareName,
				    primaryCareNumber: res.data[0].primaryCareNumber,
				    contactFirstName: res.data[0].contactFirstName,
				    contactLastName: res.data[0].contactLastName,
				    contactRelationship: res.data[0].contactRelationship,
				    contactNumb: res.data[0].contactNumb
				})
			)
			.catch(error => console.log(error));
	};

	// Triggers display of the pre-filled out patient input form when Update Profile is clicked
	handleUpdateSubmit = (event) => {
		event.preventDefault();

		this.setState({redirectTo: true})
	};

	// Changes state to the input user is typing in the UpdatePatientProfile.js
	handleInputChange = (event) => {
		const {id, value} = event.target;

		this.setState({[id]: value});
	};

	// Sends the updated patient information to the database when user clicks Update button
	updateProfile = (event) => {
		event.preventDefault();

		API.updatePatient(this.props.match.url.substr(this.props.match.url.lastIndexOf("/")+1), {
			    firstName: this.state.firstName,
			    lastName: this.state.lastName,
			    address: this.state.address,
			    address2: this.state.address2,
			    city: this.state.city,
			    state: this.state.state,
			    zip: this.state.zip,
			    preferredLanguage: this.state.preferredLanguage,
			    medicalCond: this.state.medicalCond,
			    medication: this.state.medication,
			    allergies: this.state.allergies,
			    notes: this.state.notes,
			    primaryCareName: this.state.primaryCareName,
			    primaryCareNumber: this.state.primaryCareNumber,
			    contactFirstName: this.state.contactFirstName,
			    contactLastName: this.state.contactLastName,
			    contactRelationship: this.state.contactRelationship,
			    contactNumb: this.state.contactNumb
		})
	}

	// Grabbing patient ID from url and uses it to delete patient once "Delete Patient" btn is clicked and reloads patients for drop down menu
	deletePatient = () => {
		API.deletePatient(this.props.match.url.substr(this.props.match.url.lastIndexOf("/")+1))
			// .then(res => console.log("res", res))
			.catch(err => console.log(err)); 
	};

	// Reloads the patient profile table to reflect the changes
	reloadPatientProfileTable = () => {
		if(this.props.match.url.substr(this.props.match.url.lastIndexOf("/")+1) !== this.state.patientInfo[0]._id) {
			this.loadPatientInfo();
		}
	}

	render() {
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

				handleInputChange={this.handleInputChange}
				updateProfile={this.updateProfile}
			/>
		} else if(this.state.patientInfo.length !== 0){
		return (
			<div className="container">
				{this.reloadPatientProfileTable()}
				
				<div className="row">
					<div className="col-sm-12">
						<Link to="/dashboard/assessment">
							<button className="btn text-white patientEditBtn mr-3 mt-5">Assessment Form</button>
						</Link>

						<Link to={"/dashboard"}>
							<button type="submit" className="btn text-white patientEditBtn mt-5" onClick={this.deletePatient}>Delete Patient</button>
						</Link>

						<button type="submit" className="btn text-white patientEditBtn mt-5" onClick={this.handleUpdateSubmit}>Update Profile</button>	

						<Dashboard />
					
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
					</div>
				</div>
			</div>	
		);};

		return (
			<p>Page not found.</p>
		)
	};
};

export default PatientProfile;