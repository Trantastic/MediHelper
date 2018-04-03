import React, { Component } from 'react';

class UpdatePatientProfile extends Component {
	render() {
		return (
			<div className="container mt-5 mb-5">
			  	<div className="card border-secondary mb-3">
			      <div className="card-header text-center"><h2>Only Change Inputs That Need to be Updated</h2></div>
			        <div className="card-body text-secondary">
			  		    <form>
			            	<div className="row">
			                  <div className="col-md-6">
			                  <label for="firstName">First Name</label>
			                    <input type="text" className="form-control" id="firstName" defaultValue={this.props.firstName} onChange={this.props.handleInputChange} />
			                  </div>
			                  <div className="col-md-6">
			                    <label for="lastName">Last Name</label>
			                    <input type="text" className="form-control" id="lastName" defaultValue={this.props.lastName} onChange={this.props.handleInputChange} />
			                  </div>
			                </div>

			                <div className="form-group">
			                  <label for="address">Address</label>
			                  <input type="text" className="form-control" id="address" placeholder={this.props.address} defaultValue={this.props.address} onChange={this.props.handleInputChange} />
			                </div>

			                <div className="form-group">
			                  <label for="address2">Address 2</label>
			                  <input type="text" className="form-control" id="address2" placeholder="Apartment, studio, or floor" defaultValue={this.props.address2} onChange={this.props.handleInputChange} />
			                </div>

			                <div className="form-row">
			                  <div className="form-group col-md-6">
			                    <label for="city">City</label>
			                    <input type="text" className="form-control" id="city" defaultValue={this.props.city} onChange={this.props.handleInputChange} />
			                  </div>

			                  <div className="form-group col-md-4">
			                    <label for="state">State</label>
			                    <select id="state" className="form-control" defaultValue={this.props.state} onChange={this.props.handleInputChange} >
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
			                    <input type="text" className="form-control" id="zip" defaultValue={this.props.zip} onChange={this.props.handleInputChange} />
			                  </div>
			                </div>

			                <div className="form-group">
			                  <label for="language">Preferred Language</label>
			                  <input type="text" className="form-control" id="preferredLanguage" defaultValue={this.props.preferredLanguage} onChange={this.props.handleInputChange} />
			                </div>

			                <div className="form-group">
			                  <label for="medicalCond">Medical Condition(s)</label>
			                  <input type="text" className="form-control" id="medicalCond" defaultValue={this.props.medicalCond} onChange={this.props.handleInputChange} />
			                </div>

			                <div className="form-group">
			                  <label for="medication">Medication(s)</label>
			                  <input type="text" className="form-control" id="medication" defaultValue={this.props.medication} onChange={this.props.handleInputChange} />
			                </div>

			                <div className="form-group">
			                  <label for="allergies">Allergies</label>
			                  <input type="text" className="form-control" id="allergies" placeholder="Foods, Medications, Other" defaultValue={this.props.allergies} onChange={this.props.handleInputChange} />
			                </div>

			                <div className="form-group">
			                  <label for="notes">Notes</label>
			                  <input type="text" className="form-control" id="notes" defaultValue={this.props.notes} onChange={this.props.handleInputChange} />
			                </div>

			                <h3>Primary Care Physician</h3>
			                <div className="form-row mt-4">
			                  <div className="form-group col-md-6">
			           		      <label for="primaryCareName">Physician Name</label>
			            	   	  <input type="text" className="form-control" id="primaryCareName" defaultValue={this.props.primaryCareName} onChange={this.props.handleInputChange} />
			                  </div>
			                  
			                  <div className="form-group col-md-6"> 
			                    <label for="primaryCareNumber">Physician Phone Number</label> 
			            		    <input type="text" className="form-control" id="primaryCareNumb" defaultValue={this.props.primaryCareNumber} onChange={this.props.handleInputChange} />
			            	    </div>
			                </div>  

			                <h3>Emergency Contact</h3>
			                <div className="form-row mt-4"> 
			            	    <div className="form-group col-md-6">
			           			    <label for="contactFirstName">First Name</label>
			            		    <input type="text" className="form-control" id="contactFirstName" defaultValue={this.props.contactFirstName} onChange={this.props.handleInputChange} />
			                  </div>
			                    
			                  <div className="form-group col-md-6">
			                    <label for="contactLastName">Last Name</label>  
			            		    <input type="text" className="form-control" id="contactLastName" defaultValue={this.props.contactLastName} onChange={this.props.handleInputChange} />
			                  </div>
			                </div>

			                <div className="form-row">
			                  <div className="form-group col-md-6"> 
			                    <label for="contactRelationship">Relationship</label>    
			                    <input type="text" className="form-control" id="contactRelationship" defaultValue={this.props.contactRelationship} onChange={this.props.handleInputChange} />
			                  </div>
			                  
			                  <div className="form-group col-md-6">  
			                    <label for="contactNumb">Phone Number</label>    
			            		    <input type="text" className="form-control" id="contactNumb" defaultValue={this.props.contactNumb} onChange={this.props.handleInputChange} />
			            	    </div>
			                </div>  

			        		<button type="submit" className="btn updateBtn text-white" onClick={this.props.updateProfile}>Update</button>
			  		    </form>
			      	</div>
			    </div>
			 </div>
    	);
	}
}

export default UpdatePatientProfile;