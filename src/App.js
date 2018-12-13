import React, { Component } from "react";
import "./App.css";
import * as adapter from "./Adapter.js";
import { Button, Form } from 'semantic-ui-react';

class App extends Component {

  componentDidMount() {
    adapter.getUsers()
      .then(users => console.log(users))
  }


  postRequest() {
    adapter.postUsers({ username: "sassssm", password: "wheat", password_confirmation: "wheat", age: "less than 30", location: "london", children: "false" })
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
    this.postRequest()

    return (
      <div className="App">
        <Form>
          <Form.Field>
            <label>Username</label>
            <input placeholder='Username' />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input placeholder='Password' />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default App;
