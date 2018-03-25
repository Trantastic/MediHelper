import React, { Component }from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Help from "./components/Help";
import Dashboard from "./components/Dashboard";
import PatientInputForm from "./components/PatientInputForm";
import MedicalServices from "./components/MedicalServices";
import AssessmentButton from "./components/AssessmentButton";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      user: null
    }
    this._logout = this._logout.bind(this)
    this._login = this._login.bind(this)
  }
  componentDidMount() {
    axios.get('/auth/user').then(response => {
      console.log(response.data)
      if (!!response.data.user) {
        console.log('THERE IS A USER')
        this.setState({
          loggedIn: true,
          user: response.data.user
        })
      } else {
        this.setState({
          loggedIn: false,
          user: null
        })
      }
    })
  }

  _logout(event) {
    event.preventDefault()
    console.log('logging out')
    axios.post('/auth/logout').then(response => {
      console.log(response.data)
      if (response.status === 200) {
        this.setState({
          loggedIn: false,
          user: null
        })
      }
    })
  }

  _login(username, password) {
    axios
      .post('/auth/login', {
        username,
        password
      })
      .then(response => {
        console.log(response)
        if (response.status === 200) {
          // update the state
          this.setState({
            loggedIn: true,
            user: response.data.user
          })
        }
      })
  }

  render() {
    return (
      <Router>
      <div>
        <Navbar _logout={this._logout} loggedIn={this.state.loggedIn} />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" render={() => <Login _login={this._login} />} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/help" component={Help} />
        <Route exact path="/dashboard" render={() => <Dashboard user={this.state.user} />} />
        <Route exact path="/dashboard/assessment" component={AssessmentButton} />
        <Route exact path="/patientform" component={PatientInputForm} />
        <Route exact path="/medicalservices" component={MedicalServices} />
      </div>
    </Router>  
    )
  }
}
 

// <Router>
//     <div>
//       <Navbar />
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route exact path="/help" component={Help} />
//         <Route exact path="/dashboard" component={Dashboard} />
//         <Route exact path="/dashboard/assessment" component={AssessmentButton} />
//         <Route exact path="/patientform" component={PatientInputForm} />
//         <Route exact path="/medicalservices" component={MedicalServices} />
//       </Switch>
//     </div>
//   </Router>
  
export default App;

// import React from "react";
// import AssessmentForm from "./components/AssessmentForm";

// const App = () => <AssessmentForm />;

// export default App;


