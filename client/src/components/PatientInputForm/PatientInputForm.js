import React from "React";
import "./PatientInputForm.css";

const PatientInputForm = props => (
	<div>
		<form>
  			<div class="form-group">
   				<label for="firstName">First Name</label>
    			<input type="text" class="form-control" id="firstName">
    		</div>
    		<div class="form-group">
   				<label for="lastName">Last Name</label>
    			<input type="text" class="form-control" id="lastName">
    		</div>
    		<div class="form-group">
    			<label for="address">Address</label>
    			<input type="text" class="form-control" id="Address">
  			</div>
    		<div class="form-group">
   				<label for="primaryCare">Primary Care Physician</label>
    			<input type="text" class="form-control" id="primaryCareName" placeholder="Physician Name">
    			<input type="text" class="form-control" id="primaryCareNumb" placeholder="Physician's Phone Number">
    		</div>
    		<div class="form-group">
   				<label for="emergencyContact">Emergency Contact</label>
    			<input type="text" class="form-control" id="contactFirstName" placeholder="First Name">
    			<input type="text" class="form-control" id="contactLastNAme" placeholder="Last Name">
    			<input type="text" class="form-control" id="contactRelationship" placeholder="Relationship">
    			<input type="text" class="form-control" id="contactNumb" placeholder="Phone Number">
    		</div>
    		<div class="form-group">
   				<label for="language">Preferred Language</label>
    			<input type="text" class="form-control" id="preferredLanguage">
    		</div>
  			<div class="form-group">
    			<label for="medicalCond">Medical Condition(s)</label>
    			<input type="text" class="form-control" id="medicalCond">
  			</div>
  			<div class="form-group">
    			<label for="medication">Medication(s)</label>
    			<input type="text" class="form-control" id="medication">
  			</div>
  			<div class="form-group">
    			<label for="allergies">Allergies</label>
    			<input type="text" class="form-control" id="allergies" placeholder="Foods, Medications, Other">
  			</div>
  			<div class="form-group">
    			<label for="notes">Notes</label>
    			<input type="text" class="form-control" id="notes">
  			</div>
  			<button type="submit" class="btn btn-primary">Submit</button>
		</form>
	</div>
	);