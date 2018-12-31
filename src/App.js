import React, { Component } from "react";
import "./App.css";
// import * as adapter from "./Adapter.js";
// import HomePage from "./components/HomePage";
import Questionnaire from './components/Questionnaire'
import NationalCharts from './components/NationalCharts'
import UserStats from './components/UserStats'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import ukMap from './components/ukMap'
import api from './components/api'
import design from './components/Homepage'
import SpendingQuestionnaire from './components/SpendingQuestionnaire'
import { Route, Switch } from "react-router-dom";

class App extends Component {


  // postRequest() {
  //   adapter.postUsers({ username: "sam", password: "wheat", password_confirmation: "wheat", age: "less than 30", location: "london", children: "false" })
  //     .then(user => console.log(user))
  // }

  // patchRequest() {
  //   adapter.patchUser({
  //     age: "less than 30",
  //     children: "false",
  //     id: 3,
  //     location: "london",
  //     password: "scoobySnacks",
  //     username: "scrapy"
  //   })
  //     .then(user => console.log(user))
  // }


  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/Questionnaire" component={Questionnaire} />
          <Route path="/NationalCharts" component={NationalCharts} />
          <Route path="/Login" component={Login} />
          <Route path="/SpendingQuestionnaire" component={SpendingQuestionnaire} />
          <Route path="/UserStats" component={UserStats} />
          <Route path="/UK" component={ukMap} />
          <Route path="/api" component={api} />
          <Route path="/" component={Homepage} />
        </Switch>
      </div>
    );
  }
}

export default App;


// for error message. if (resp.error) rerender page with error message else redirect to next page