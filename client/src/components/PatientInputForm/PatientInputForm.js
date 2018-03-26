import React, { Component } from "react";
import "./PatientInputForm.css";


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
    contactNumb: ""
  };

handleFormSubmitt = event => {
  event.preventDefault();

    API.savePatient({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      address: this.state.address,
      address2: this.state.address2,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      preferredLanguage: this.state.language,
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
    .catch(err => console.log(err));
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
                  <label for="firstName">First Name</label>
                    <input type="text" className="form-control" id="firstName" value={this.state.firstName} />
                  </div>
                  <div className="col-md-6">
                    <label for="lastName">Last Name</label>
                    <input type="text" className="form-control" id="lastName" value={this.state.lastName}/>
                  </div>
                </div>

                <div className="form-group">
                  <label for="address">Address</label>
                  <input type="text" className="form-control" id="address" placeholder="1234 Main St" value={this.state.address}/>
                </div>

                <div className="form-group">
                  <label for="address2">Address 2</label>
                  <input type="text" className="form-control" id="address2" placeholder="Apartment, studio, or floor" value={this.state.address2}/>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="city">City</label>
                    <input type="text" className="form-control" id="city" value={this.state.city}/>
                  </div>

                  <div className="form-group col-md-4">
                    <label for="state">State</label>
                    <select id="state" className="form-control">
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
                    <label for="zip">Zip</label>
                    <input type="text" className="form-control" id="zip" value={this.state.zip}/>
                  </div>
                </div>

                <div className="form-group">
                  <label for="language">Preferred Language</label>
                  <input type="text" className="form-control" id="preferredLanguage" value={this.state.preferredLanguage}/>
                </div>

                <div className="form-group">
                  <label for="medicalCond">Medical Condition(s)</label>
                  <input type="text" className="form-control" id="medicalCond" value={this.state.medicalCond}/>
                </div>

                <div className="form-group">
                  <label for="medication">Medication(s)</label>
                  <input type="text" className="form-control" id="medication" value={this.state.medication}/>
                </div>

                <div className="form-group">
                  <label for="allergies">Allergies</label>
                  <input type="text" className="form-control" id="allergies" placeholder="Foods, Medications, Other" value={this.state.allergies}/>
                </div>

                <div className="form-group">
                  <label for="notes">Notes</label>
                  <input type="text" className="form-control" id="notes" value={this.state.notes}/>
                </div>

                <h3>Primary Care Physician</h3>
                <div className="form-row mt-4">
                  <div className="form-group col-md-6">

           		      <label for="primaryCareName">Physician Name</label>
            	   	  <input type="text" className="form-control" id="primaryCareName" value={this.state.primaryCareName}/>
                  </div>
                  
                  <div className="form-group col-md-6"> 
                    <label for="primaryCareNumber">Physician Phone Number</label> 
            		    <input type="text" className="form-control" id="primaryCareNumb" value={this.state.primaryCareNumb}/>
            	    </div>
                </div>  

                <h3>Emergency Contact</h3>
                <div className="form-row mt-4"> 
            	    <div className="form-group col-md-6">
           			    <label for="contactFirstName">First Name</label>
            		    <input type="text" className="form-control" id="contactFirstName" value={this.state.contactFirstName}/>
                  </div>
                    
                  <div className="form-group col-md-6">
                    <label for="contactLastName">Last Name</label>  
            		    <input type="text" className="form-control" id="contactLastName" value={this.state.contactLastName}/>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6"> 
                    <label for="contactRelationship">Relationship</label>    
                    <input type="text" className="form-control" id="contactRelationship" value={this.state.contactRelationship}/>
                  </div>
                  
                  <div className="form-group col-md-6">  
                    <label for="contactNumb">Phone Number</label>    
            		    <input type="text" className="form-control" id="contactNumb" value={this.state.contactNumb}/>
            	    </div>
                </div>  
            
        		    <button type="submit" className="btn btn-primary">Submit</button>
      		    </form>
          </div>
        </div>
      </div>
    );
  }    
};

export default PatientInputForm;