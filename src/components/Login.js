import React from 'react'
import { Menu, Segment, Form, Button, Container } from 'semantic-ui-react'
import { connect } from 'react-redux';
import updateUsername from "../actions/updateUsername";
import updateUserAge from "../actions/updateUserAge";
import updateUserLocation from "../actions/updateUserLocation";
import updateUserChildren from "../actions/updateUserChildren";
import updateUserToken from "../actions/updateUserToken";
import updateErrors from '../actions/updateErrors';
import ValidatingLoginQues from './ValidatingLoginQues'


import updateAuthorised from "../actions/updateAuthorised";
import * as adapter from "../Adapter.js";

class Login extends React.Component {

    state = {
        password: "",
        password_confirmation: ""
    }

    signin = user => {

        localStorage.setItem('token', user.token)

    }


    signUp = () => {
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
        let serverResponse = (user) => {
            localStorage.setItem("token", user.token)
            this.props.updateUserAge(user.age)
            this.props.updateUserLocation(user.location)
            this.props.updateUserChildren(user.children)
            this.props.updateUserToken(user.token)
        }
        const { username } = this.props
        const { password } = this.state

        const successful = (resp) => {
            serverResponse(resp)
            this.props.history.push('/SpendingQuestionnaire')
        }
        const newUser = {
            username: username,
            password: password,
        }

        adapter.signInUsers(newUser)
            .then(resp => successful(resp))
            .catch(error => this.props.updateErrors("Your username and/or password did not match our records"))



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
                        <Container>
                            <ValidatingLoginQues onSubmit={this.handleSubmit} />
                        </Container>
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
    updateUserAge: (userAge) => { dispatch(updateUserAge(userAge)) },
    updateUserLocation: (userLocation) => { dispatch(updateUserLocation(userLocation)) },
    updateUserChildren: (userChildren) => { dispatch(updateUserChildren(userChildren)) },
    updateUserToken: (userToken) => { dispatch(updateUserToken(userToken)) },
    updateErrors: (errors) => dispatch(updateErrors(errors)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)