import React from "react";
// import LinkToAssessmentForm from "../LinkToAssessmentForm";
import AssessmentForm from '../AssessmentForm';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Button } from 'react-native';

const LinkToAssessmentForm = () => (
	<div>
	 <Switch>

		<AssessmentForm />
		        <button class="btn btn-primary" onClick={this.AssessmentForm}>AssessmentForm</button>
      

 <Route exact path="/AssessmentForm" component={AssessmentForm} />


  </Switch>
	</div>
);

export default LinkToAssessmentForm;