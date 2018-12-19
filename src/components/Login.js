import React from 'react'
import { Menu, Segment, Form, Button } from 'semantic-ui-react'
import { connect } from 'react-redux';
import updateUsername from "../actions/updateUsername";
import Navbar from "./Navbar"

import updateAuthorised from "../actions/updateAuthorised";
import * as adapter from "../Adapter.js";

class Login extends React.Component {

    state = {
        password: "",
        password_confirmation: ""
    }

    signin = user => {
        console.log(user)
        localStorage.setItem('token', user.token)
    }


    signUp = () => {
        console.log(this.props.userAge)
        const { userAge, location, children, username } = this.props
        console.log(userAge)

        const newUser = {
            username: username,
            age: userAge,
            location: location,
            children: children,
            password: this.state.password
        }

        adapter.postUsers(newUser)
            .then(resp => this.signin(resp))

        // localStorage.setItem("token", resp.token)
        this.props.history.push('/UserStats')
    }


    login = () => {
        let serverResponse = (resp) => {
            localStorage.setItem("token", resp.token)
            console.log(resp)
        }
        const { username } = this.props
        const { password } = this.state


        const newUser = {
            username: username,
            password: password,
        }

        adapter.signInUsers(newUser)
            .then(resp => serverResponse(resp))


        this.props.history.push('/UserStats')
    }

    render() {
        const { authorised } = this.props

        return (
            <div>
                <Menu pointing>
                    <Menu.Item name='Sign up' active={authorised === 'Sign up'} onClick={() => this.props.updateAuthorised('Sign up')} />
                    <Menu.Item name='login' active={authorised === 'login'} onClick={() => this.props.updateAuthorised('login')} />
                </Menu>

                {this.props.authorised === 'Sign up' ?
                    <Form>
                        <Form.Field>
                            <label>Username</label>
                            <input placeholder='Username' onChange={(event) => { this.props.updateUsername(event.target.value) }} />
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <input placeholder='Password' type="password" onChange={(event) => { this.setState({ password: event.target.value }) }} />
                        </Form.Field>
                        <Form.Field>
                            <label>Confirm Passsword</label>
                            <input placeholder='Confirm Passsword' type="password" onChange={(event) => { this.setState({ password_confirmation: event.target.value }) }} />
                        </Form.Field>
                        <Button type="button" onClick={this.signUp} >Sign Up</Button>
                    </Form> : ""
                }

                {this.props.authorised === 'login' ?
                    <Segment>
                        <Form>
                            <Form.Field>
                                <label>Username</label>
                                <input placeholder='Username' onChange={(event) => { this.props.updateUsername(event.target.value) }} />
                            </Form.Field>
                            <Form.Field>
                                <label>Password</label>
                                <input placeholder='Password' type="password" onChange={(event) => { this.setState({ password: event.target.value }) }} />
                            </Form.Field>
                            <Button type='submit' onClick={this.login}>Login</Button>
                        </Form>
                    </Segment> : ""}
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    username: state.username,
    authorised: state.authorised,
    userAge: state.userAge,
    location: state.userLocation,
    children: state.userChildren,
})

const mapDispatchToProps = (dispatch) => ({
    updateUsername: (newUsername) => { dispatch(updateUsername(newUsername)) },
    updateAuthorised: (status) => { dispatch(updateAuthorised(status)) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)