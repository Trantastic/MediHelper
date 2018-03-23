import React from "React";
import "./AssessmentForm.css";


const AssessmentForm = props => (

	<div className="row">
        <div className="col">
          <input type="text" className="form-control" id="painLevel">
        </div>
        <div className="col">
          <input type="text" className="form-control" id="locationPain">
        </div>
      </div>

        <div className="form-group">
        <label for="Date">Date</label>
        <input type="text" className="form-control" id="date" placeholder="3/22/2019">
      </div>

         <div className="form-group">
        <label for="Notes">Notes</label>
        <input type="text" className="form-control" id="notes">
      </div>
