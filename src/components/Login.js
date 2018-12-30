import React from 'react'
import { Menu, Segment, Container } from 'semantic-ui-react'
import { connect } from 'react-redux';
import updateUsername from "../actions/updateUsername";
import updateUserAge from "../actions/updateUserAge";
import updateUserLocation from "../actions/updateUserLocation";
import updateUserChildren from "../actions/updateUserChildren";
import updateUserToken from "../actions/updateUserToken";
import updateErrors from '../actions/updateErrors';
import ValidatingLoginQues from './ValidatingLoginQues'
import ValidatingSignUpQues from './ValidatingSignUpQues'


import updateAuthorised from "../actions/updateAuthorised";
import * as adapter from "../Adapter.js";

class Login extends React.Component {

    signin = user => {

        localStorage.setItem('token', user.token)

    }


    handleSubmitSignUp = (userInput) => {
        const { userAge, location, children, username, updateUsername, spendingDatumID } = this.props
        updateUsername(userInput.username)

        const newUser = {
            username: userInput.username,
            password: userInput.password,
            age: userAge,
            location: location,
            children: children,
            spending_datum_id: spendingDatumID
        }

        adapter.postUsers(newUser)
            .then(resp => this.signin(resp))

        // localStorage.setItem("token", resp.token)
        // this.props.history.push('/UserStats')
    }


    handleSubmitlogin = (userInput) => {

        const { updateUsername } = this.props

        updateUsername(userInput.username)

        const loginUser = {
            username: userInput.username,
            password: userInput.password,
        }

        adapter.signInUsers(loginUser)
            .then(resp => successful(resp))
            .catch(error => this.props.updateErrors("Your username and/or password did not match our records"))

        const successful = (resp) => {
            serverResponse(resp)
            this.props.history.push('/SpendingQuestionnaire')
        }

        let serverResponse = (user) => {
            localStorage.setItem("token", user.token)
            this.props.updateUserAge(user.age)
            this.props.updateUserLocation(user.location)
            this.props.updateUserChildren(user.children)
            this.props.updateUserToken(user.token)
        }
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
                    <Segment>
                        <Container>
                            <ValidatingSignUpQues onSubmit={this.handleSubmitSignUp} />
                        </Container>
                    </Segment> : ""}


                {this.props.authorised === 'login' ?
                    <Segment>
                        <Container>
                            <ValidatingLoginQues onSubmit={this.handleSubmitlogin} />
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
    spendingDatumID: state.spendingDatumID
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