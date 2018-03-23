import React from "React";
import "./PatientInputForm.css";

const PatientInputForm = props => (
	<div>
		<form>
  			<div className="form-group">
   				<label for="firstName">First Name</label>
    			<input type="text" className="form-control" id="firstName">
    		</div>
    		<div className="form-group">
   				<label for="lastName">Last Name</label>
    			<input type="text" className="form-control" id="lastName">
    		</div>
    		<div className="form-group">
    			<label for="address">Address</label>
    			<input type="text" className="form-control" id="Address">
  			</div>
    		<div className="form-group">
   				<label for="primaryCare">Primary Care Physician</label>
    			<input type="text" className="form-control" id="primaryCareName" placeholder="Physician Name">
    			<input type="text" className="form-control" id="primaryCareNumb" placeholder="Physician's Phone Number">
    		</div>
    		<div className="form-group">
   				<label for="emergencyContact">Emergency Contact</label>
    			<input type="text" className="form-control" id="contactFirstName" placeholder="First Name">
    			<input type="text" className="form-control" id="contactLastNAme" placeholder="Last Name">
    			<input type="text" className="form-control" id="contactRelationship" placeholder="Relationship">
    			<input type="text" className="form-control" id="contactNumb" placeholder="Phone Number">
    		</div>
    		<div className="form-group">
   				<label for="language">Preferred Language</label>
    			<input type="text" className="form-control" id="preferredLanguage">
    		</div>
  			<div className="form-group">
    			<label for="medicalCond">Medical Condition(s)</label>
    			<input type="text" className="form-control" id="medicalCond">
  			</div>
  			<div className="form-group">
    			<label for="medication">Medication(s)</label>
    			<input type="text" className="form-control" id="medication">
  			</div>
  			<div className="form-group">
    			<label for="allergies">Allergies</label>
    			<input type="text" className="form-control" id="allergies" placeholder="Foods, Medications, Other">
  			</div>
  			<div className="form-group">
    			<label for="notes">Notes</label>
    			<input type="text" className="form-control" id="notes">
  			</div>
  			<button type="submit" className="btn btn-primary">Submit</button>
		</form>
	</div>
	);