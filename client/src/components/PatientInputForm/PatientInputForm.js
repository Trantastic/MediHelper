import React from "react";
import "./PatientInputForm.css";

const PatientInputForm = () => (
	<div className="card border-secondary mb-3">
    <div className="card-header">Patient Infomation Form</div>
      <div className="card-body text-secondary">

		    <form>
          <div className="row">
            <div className="col-md-6">
            <label for="firstName">First Name</label>
              <input type="text" className="form-control" id="firstName" />
            </div>
            <div className="col-md-6">
              <label for="lastName">Last Name</label>
              <input type="text" className="form-control" id="lastName" />
            </div>
          </div>

          <div className="form-group">
            <label for="address">Address</label>
            <input type="text" className="form-control" id="address" placeholder="1234 Main St" />
          </div>

          <div className="form-group">
            <label for="address2">Address 2</label>
            <input type="text" className="form-control" id="address2" placeholder="Apartment, studio, or floor" />
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="city">City</label>
              <input type="text" className="form-control" id="city" />
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
              <input type="text" className="form-control" id="zip" />
            </div>
          </div>

          <div className="form-row">
      	    <div className="form-group col-md-6">
     		      <label for="primaryCare">Primary Care Physician</label>
      	   	  <input type="text" className="form-control" id="primaryCareName" placeholder="Physician Name" />
            </div>
            
            <div className="form-group col-md-6">  
      		    <input type="text" className="form-control" id="primaryCareNumb" placeholder="Physician's Phone Number" />
      	    </div>
          </div>  

          <div className="form-row"> 
      	    <div className="form-group col-md-6">
     			    <label for="emergencyContact">Emergency Contact</label>
      		    <input type="text" className="form-control" id="contactFirstName" placeholder="First Name" />
            </div>
              
            <div className="form-group col-md-6">  
      		    <input type="text" className="form-control" id="contactLastNAme" placeholder="Last Name" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">     
      		    <input type="text" className="form-control" id="contactRelationship" placeholder="Relationship" />
            </div>
            
            <div className="form-group col-md-6">  
      		    <input type="text" className="form-control" id="contactNumb" placeholder="Phone Number" />
      	    </div>
          </div>  

    	    <div className="form-group">
   		    	<label for="language">Preferred Language</label>
    	    	<input type="text" className="form-control" id="preferredLanguage" />
    	    </div>

  		    <div className="form-group">
    	   	  <label for="medicalCond">Medical Condition(s)</label>
    	   	  <input type="text" className="form-control" id="medicalCond" />
  		    </div>

  		    <div className="form-group">
    	   	  <label for="medication">Medication(s)</label>
    	   	  <input type="text" className="form-control" id="medication" />
  		    </div>

  		    <div className="form-group">
    	   	  <label for="allergies">Allergies</label>
    	   	  <input type="text" className="form-control" id="allergies" placeholder="Foods, Medications, Other" />
  		    </div>

  		    <div className="form-group">
    		    <label for="notes">Notes</label>
    		    <input type="text" className="form-control" id="notes" />
  		    </div>
      
  		    <button type="submit" className="btn btn-primary">Submit</button>
		    </form>
    </div>
  </div>    
);

export default PatientInputForm;