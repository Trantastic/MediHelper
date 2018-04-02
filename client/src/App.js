import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Help from "./components/Help";
import Dashboard from "./components/Dashboard";
import PatientInputForm from "./components/PatientInputForm";
import MedicalServices from "./components/MedicalServices";
import AssessmentButton from "./components/AssessmentButton";
import "./App.css";
import Navbar from "./components/Navbar";
import PatientProfile from './components/PatientProfile';
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Calendar from "./components/Calendar";
import EventInput from "./components/Calendar";

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      caretaker: null,
      redirectTo: null
    };
    this._logout = this._logout.bind(this);
    this._login = this._login.bind(this);
  };

  componentDidMount() {
    axios.get('/auth/user').then(response => {
      if (!!response.data.caretaker) {
        this.setState({
          loggedIn: true,
          caretaker: response.data.caretaker
        });
      } else {
        this.setState({
          loggedIn: false,
          caretaker: null
        });
      }
    });
  };

  _logout() {
    axios.post('/auth/logout').then(response => {
      console.log(response.data)
      if (response.status === 200) {
        this.setState({
          loggedIn: false,
          caretaker: null,
          redirectTo: "/"
        });
      }
    });
  };

 _login(username, password) {
    console.log(username, password)
    axios.post('/auth/login', {
        username,
        password
      }).then(response => {
        if (response.status === 200) {
          // update the state
          this.setState({
            loggedIn: true,
            caretaker: response.data.caretaker
          });
          caretaker = this.state.caretaker._id;
          // caretakerId();
        }
      }).catch(err => {
        console.log(err.response)
      });
  };

    // caretakerId() {
    //   return console.log("caretaker id is ", caretaker);
    // };
  // <Route exact path="/dashboard" render={() => <Dashboard caretaker={this.state.caretaker} />} />

  render() {

    return (
      <Router>
        <div>
          <Navbar _logout={this._logout} loggedIn={this.state.loggedIn} />
          <Route exact path="/" render={() => <Login _login={this._login} loggedIn={this.state.loggedIn}/>} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/dashboard" render={() => <Dashboard caretaker={this.state.caretaker} />} />
          <Route exact path="/dashboard/assessment" component={AssessmentButton} />
          <Route exact path="/dashboard/PatientProfile/:id" component={PatientProfile} />
          <Route exact path="/dashboard/help" component={Help} />
          <Route exact path="/patientform" component={PatientInputForm} />
          <Route exact path="/medicalservices" component={MedicalServices} />
          <Route exact path="/calendar" component={Calendar} />
          <Route exact path="/event" component={EventInput} />

        </div>
      </Router>  
    )
  }
}

export default App;
export let caretaker;