import React, { Component } from "react";
import "./App.css";
import * as adapter from "./Adapter.js";
import HomePage from "./components/HomePage";

class App extends Component {

  componentDidMount() {
    adapter.getUsers()
      .then(users => console.log(users))
  }


  postRequest() {
    adapter.postUsers({ username: "sam", password: "wheat", password_confirmation: "wheat", age: "less than 30", location: "london", children: "false" })
      .then(user => console.log(user))
  }

  patchRequest() {
    adapter.patchUser({
      age: "less than 30",
      children: "false",
      id: 3,
      location: "london",
      password: "scoobySnacks",
      username: "scrapy"
    })
      .then(user => console.log(user))
  }


  render() {
    return (
      <div className="App">

        <header className="App-header">
          <HomePage />
        </header>
      </div>
    );
  }
}

export default App;


// for error message. if (resp.error) rerender page with error message else redirect to next page