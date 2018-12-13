import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import * as adapter from "./Adapter.js";

class App extends Component {

  componentDidMount() {
    adapter.getUsers()
      .then(users => console.log(users))
  }


  postRequest() {
    adapter.postUsers({ username: "aisha", password: "pineapple", age: "less than 30", location: "london", children: "false" })
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
    this.patchRequest()

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
