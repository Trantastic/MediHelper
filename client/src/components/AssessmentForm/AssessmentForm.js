import React, { Component } from "react";
import "./AssessmentForm.css"
import image from "../images/pain_scale.jpg"
import humanImage from "../images/human_anatomy.png"


class AssessmentForm extends Component {
  
  state = {
    painlevel: "",
    painlocation: "",
    otherpainlocation: ""
  };

  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;

    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };

  
  handleAssessmentFormSubmit = event => {
    event.preventDefault();
    alert(`Painlevel: ${this.state.painlevel}\nPainLocation: ${this.state.painlocation}\nOtherPainLocation: ${this.state.otherpainlocation}`);
    this.setState({ painlevel: "", painlocation: "" });
  };

  render() {
    return (
     <div id="header">
          <img src={image} className="pain-scale" alt="pain chart" />

        <form>

           <p><strong>Date of Information:</strong></p>
          <input class="date-input" id="date-input" type="date"/>

        <p><strong>Pain Level: {this.state.painlevel}</strong></p>
 
        <input
          type="text"
          placeholder="10"
          name="painlevel"
          value={this.state.painlevel}
          onChange={this.handleInputChange}
        />
       <p><strong>Location of Pain: {this.state.painlocation}</strong></p>
                <select class="selectpicker" data-style="btn-primary" multiple data-max-options="23" id="painlevel">
                    <option>Head</option>
                    <option>Eye</option>
                    <option>Mouth</option>
                    <option>Neck</option>
                    <option>Shoulder</option>
                    <option>Chest</option>
                    <option>Left Arm</option>
                    <option>Right Arm</option>
                    <option>Stomach</option>
                    <option>Elbow</option>
                    <option>Fingers</option>
                    <option>Left Hand</option>
                    <option>Right Hand</option>
                    <option>Stomach</option>
                    <option>Left Leg</option>
                     <option>Right Leg</option>
                    <option>Left Foot</option>
                    <option>Left Knee</option>
                    <option>Right Knee</option>
                    <option>Right Foot</option>
                    <option>Left Foot</option>
                    <option>Toes</option>
                </select>
      <p><strong>Other Pain Locations Not Listed Above: {this.state.otherpainlocation}</strong></p>
        <input
          type="text"
          placeholder=""
          name="otherpainlocation"
          value={this.state.otherpainlocation}
          onChange={this.handleInputChange}
        />

        <button id="assessmentbtn" onClick={this.handleFormSubmit}>Submit</button>
    </form>
          <img src={humanImage} className="human-image" alt="humanimage"/>

 </div>
    );
  }
}

export default AssessmentForm;