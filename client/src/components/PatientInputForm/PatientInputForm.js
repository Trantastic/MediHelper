import React, { Component } from "react";
import "./PatientInputForm.css";
import API from "../../utils/API";


class PatientInputForm extends Component {
  state = {
    patient: [],
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
    contactNumb: "",
    redirectTo: null
  };

// When user submits form, sends values to backend
handleFormSubmit = event => {
  event.preventDefault();

  API.savePatient({
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
    primaryCareNumber: this.state.primaryCareNumb,
    contactFirstName: this.state.contactFirstName,
    contactLastName: this.state.contactLastName,
    contactRelationship: this.state.contactRelationship,
    contactNumb: this.state.contactNumb
  })
    .catch(err => console.log("inputform: ", err.response));
    
    this.setState({
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
      contactNumb: "",
      redirectTo: "/dashboard" 
    });
};

handleInputChange = event => {
  const { id, value } = event.target;
  this.setState({
    [id]: value
  });
};

  render() {
    return (
      <div className="container mt-5 mb-5">
      	<div className="card border-secondary mb-3">
          <div className="card-header"><h2>Patient Infomation Form</h2></div>
            <div className="card-body text-secondary">

      		    <form>
                <div className="row">
                  <div className="col-md-6">
                  <label htmlFor="firstName">First Name</label>
                    <input type="text" className="form-control" id="firstName" value={this.state.firstName} onChange={this.handleInputChange}/>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" className="form-control" id="lastName" value={this.state.lastName} onChange={this.handleInputChange}/>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input type="text" className="form-control" id="address" placeholder="1234 Main St" value={this.state.address} onChange={this.handleInputChange}/>
                </div>

                <div className="form-group">
                  <label htmlFor="address2">Address 2</label>
                  <input type="text" className="form-control" id="address2" placeholder="Apartment, studio, or floor" value={this.state.address2} onChange={this.handleInputChange}/>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="city">City</label>
                    <input type="text" className="form-control" id="city" defaultValue={this.state.city} onChange={this.handleInputChange}/>
                  </div>

                  <div className="form-group col-md-4">
                    <label htmlFor="state">State</label>
                    <select id="state" className="form-control" value={this.state.state} onChange={this.handleInputChange}>
                      <option selected>Choose...</option>
                      <option value="AK">Alaska</option>
                      <option value="AZ">Arizona</option>
                      <option value="AR">Arkansas</option>
                      <option value="CA">California</option>
                      <option value="CO">Colorado</option>
                      <option value="CT">Connecticut</option>
                      <option value="DE">Delaware</option>
                      <option value="DC">District Of Columbia</option>
                      <option value="FL">Florida</option>
                      <option value="GA">Georgia</option>
                      <option value="HI">Hawaii</option>
                      <option value="ID">Idaho</option>
                      <option value="IL">Illinois</option>
                      <option value="IN">Indiana</option>
                      <option value="IA">Iowa</option>
                      <option value="KS">Kansas</option>
                      <option value="KY">Kentucky</option>
                      <option value="LA">Louisiana</option>
                      <option value="ME">Maine</option>
                      <option value="MD">Maryland</option>
                      <option value="MA">Massachusetts</option>
                      <option value="MI">Michigan</option>
                      <option value="MN">Minnesota</option>
                      <option value="MS">Mississippi</option>
                      <option value="MO">Missouri</option>
                      <option value="MT">Montana</option>
                      <option value="NE">Nebraska</option>
                      <option value="NV">Nevada</option>
                      <option value="NH">New Hampshire</option>
                      <option value="NJ">New Jersey</option>
                      <option value="NM">New Mexico</option>
                      <option value="NY">New York</option>
                      <option value="NC">North Carolina</option>
                      <option value="ND">North Dakota</option>
                      <option value="OH">Ohio</option>
                      <option value="OK">Oklahoma</option>
                      <option value="OR">Oregon</option>
                      <option value="PA">Pennsylvania</option>
                      <option value="RI">Rhode Island</option>
                      <option value="SC">South Carolina</option>
                      <option value="SD">South Dakota</option>
                      <option value="TN">Tennessee</option>
                      <option value="TX">Texas</option>
                      <option value="UT">Utah</option>
                      <option value="VT">Vermont</option>
                      <option value="VA">Virginia</option>
                      <option value="WA">Washington</option>
                      <option value="WV">West Virginia</option>
                      <option value="WI">Wisconsin</option>
                      <option value="WY">Wyoming</option>
                    </select>
                  </div>

                  <div className="form-group col-md-2">
                    <label htmlFor="zip">Zip</label>
                    <input type="text" className="form-control" id="zip" value={this.state.zip} onChange={this.handleInputChange}/>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="language">Preferred Language</label>
                  <input type="text" className="form-control" id="preferredLanguage" value={this.state.preferredLanguage} onChange={this.handleInputChange}/>
                </div>

                <div className="form-group">
                  <label htmlFor="medicalCond">Medical Condition(s)</label>
                  <input type="text" className="form-control" id="medicalCond" value={this.state.medicalCond} onChange={this.handleInputChange}/>
                </div>

                <div className="form-group">
                  <label htmlFor="medication">Medication(s)</label>
                  <input type="text" className="form-control" id="medication" value={this.state.medication} onChange={this.handleInputChange}/>
                </div>

                <div className="form-group">
                  <label htmlFor="allergies">Allergies</label>
                  <input type="text" className="form-control" id="allergies" placeholder="Foods, Medications, Other" value={this.state.allergies} onChange={this.handleInputChange}/>
                </div>

                <div className="form-group">
                  <label htmlFor="notes">Notes</label>
                  <input type="text" className="form-control" id="notes" value={this.state.notes} onChange={this.handleInputChange}/>
                </div>

                <h3 className="text-dark pt-3 pb-3">Primary Care Physician</h3>
                <div className="form-row mt-4">
                  <div className="form-group col-md-6">

           		      <label htmlFor="primaryCareName">Physician Name</label>
            	   	  <input type="text" className="form-control" id="primaryCareName" value={this.state.primaryCareName} onChange={this.handleInputChange}/>
                  </div>
                  
                  <div className="form-group col-md-6"> 
                    <label htmlFor="primaryCareNumber">Physician Phone Number</label> 
            		    <input type="text" className="form-control" id="primaryCareNumb" value={this.state.primaryCareNumb} onChange={this.handleInputChange}/>
            	    </div>
                </div>  

                <h3 className="text-dark pt-3 pb-3">Emergency Contact</h3>
                <div className="form-row mt-4"> 
            	    <div className="form-group col-md-6">
           			    <label htmlFor="contactFirstName">First Name</label>
            		    <input type="text" className="form-control" id="contactFirstName" value={this.state.contactFirstName} onChange={this.handleInputChange}/>
                  </div>
                    
                  <div className="form-group col-md-6">
                    <label htmlFor="contactLastName">Last Name</label>  
            		    <input type="text" className="form-control" id="contactLastName" value={this.state.contactLastName} onChange={this.handleInputChange}/>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6"> 
                    <label htmlFor="contactRelationship">Relationship</label>    
                    <input type="text" className="form-control" id="contactRelationship" value={this.state.contactRelationship} onChange={this.handleInputChange}/>
                  </div>
                  
                  <div className="form-group col-md-6">  
                    <label htmlFor="contactNumb">Phone Number</label>    
            		    <input type="text" className="form-control" id="contactNumb" value={this.state.contactNumb} onChange={this.handleInputChange}/>
            	    </div>
                </div>  
            
        		    <button type="submit" className="btn text-white patientBtn" onClick={this.handleFormSubmit}>Submit</button>
      		    </form>
          </div>
        </div>
      </div>
    );
  }    
};

export default PatientInputForm;