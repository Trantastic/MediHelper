import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Root from "./components/Root";
import Help from "./components/Help";
import Dashboard from "./components/Dashboard";
import PatientInputForm from "./components/PatientInputForm";
import MedicalServices from "./components/MedicalServices";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/help" component={Help} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/patientform" component={PatientInputForm} />
        <Route exact path="/medicalservices" component={MedicalServices} />
      </Switch>
    </div>
  </Router>
);
  
export default App;

// import React from "react";
// import AssessmentForm from "./components/AssessmentForm";

// const App = () => <AssessmentForm />;

// export default App;


