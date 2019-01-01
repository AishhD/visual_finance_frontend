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
import updateUserSpendingFood from '../actions/updateUserSpendingFood';
import updateUserSpendingClothing from '../actions/updateUserSpendingClothing';
import updateUserSpendingEducation from '../actions/updateUserSpendingEducation';
import updateUserSpendingAlcohol from '../actions/updateUserSpendingAlcohol';
import updateUserSpendingHousehold from '../actions/updateUserSpendingHousehold';
import updateUserSpendingOther from '../actions/updateUserSpendingOther';
import updateUserSpendingRecreation from '../actions/updateUserSpendingRecreation';
import updateUserSpendingTransport from '../actions/updateUserSpendingTransport';
import updateUserSpendingResturants from '../actions/updateUserSpendingResturants';
import updateSpendingDataID from '../actions/updateSpendingDataID';


import updateAuthorised from "../actions/updateAuthorised";
import * as adapter from "../Adapter.js";

class Login extends React.Component {

    signin = user => {

        localStorage.setItem('token', user.token)

    }

    componentDidMount() {
        this.props.updateAuthorised('Sign up')
    }

    handleSubmitSignUp = (userInput) => {
        const { userAge, location, children, updateUsername, spendingDataID } = this.props
        updateUsername(userInput.username)

        const newUser = {
            username: userInput.username,
            password: userInput.password,
            age: userAge,
            location: location,
            children: children,
            spending_datum_id: spendingDataID
        }

        adapter.postUsers(newUser)
            .then(resp => this.signin(resp))
            .catch(error => this.props.history.push('/Login'))
            .then(resp => localStorage.setItem("token", resp.token),
                this.props.history.push('/UserStats'))
    }


    handleSubmitlogin = (userInput) => {

        const { updateUsername, updateUserSpendingFood, updateUserSpendingAlcohol, updateUserSpendingClothing, updateUserSpendingEducation, updateUserSpendingHousehold, updateUserSpendingOther, updateUserSpendingRecreation, updateUserSpendingTransport, updateUserSpendingResturants, updateSpendingDataID } = this.props

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
            this.props.history.push('/UserStats')
        }

        let serverResponse = (user) => {

            updateUserSpendingAlcohol(user.spending_datum["alcoholic_drinks_tobacco_narcotics"])
            updateUserSpendingClothing(user.spending_datum["clothing_footwear"])
            updateUserSpendingEducation(user.spending_datum["education"])
            updateUserSpendingFood(user.spending_datum["food_non_alcholic_drinks"])
            updateUserSpendingHousehold(user.spending_datum["household_bills"])
            updateUserSpendingOther(user.spending_datum["other"])
            updateUserSpendingRecreation(user.spending_datum["recreation_culture"])
            updateUserSpendingResturants(user.spending_datum["resturants_hotels"])
            updateUserSpendingTransport(user.spending_datum["transport"])
            localStorage.setItem("token", user.token)
            this.props.updateUserAge(user.age)
            this.props.updateUserLocation(user.location)
            this.props.updateUserChildren(user.children)
            this.props.updateUserToken(user.token)
            updateSpendingDataID(user.spending_datum.id)
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
    authorised: state.authorised,
    userAge: state.userAge,
    location: state.userLocation,
    children: state.userChildren,
    spendingDataID: state.spendingDataID
})

const mapDispatchToProps = (dispatch) => ({
    updateUsername: (newUsername) => { dispatch(updateUsername(newUsername)) },
    updateAuthorised: (status) => { dispatch(updateAuthorised(status)) },
    updateUserAge: (userAge) => { dispatch(updateUserAge(userAge)) },
    updateUserLocation: (userLocation) => { dispatch(updateUserLocation(userLocation)) },
    updateUserChildren: (userChildren) => { dispatch(updateUserChildren(userChildren)) },
    updateUserToken: (userToken) => { dispatch(updateUserToken(userToken)) },
    updateErrors: (errors) => dispatch(updateErrors(errors)),
    updateUserSpendingFood: (spending) => dispatch(updateUserSpendingFood(spending)),
    updateUserSpendingClothing: (spending) => dispatch(updateUserSpendingClothing(spending)),
    updateUserSpendingEducation: (spending) => dispatch(updateUserSpendingEducation(spending)),
    updateUserSpendingAlcohol: (spending) => dispatch(updateUserSpendingAlcohol(spending)),
    updateUserSpendingHousehold: (spending) => dispatch(updateUserSpendingHousehold(spending)),
    updateUserSpendingOther: (spending) => dispatch(updateUserSpendingOther(spending)),
    updateUserSpendingRecreation: (spending) => dispatch(updateUserSpendingRecreation(spending)),
    updateUserSpendingTransport: (spending) => dispatch(updateUserSpendingTransport(spending)),
    updateUserSpendingResturants: (spending) => dispatch(updateUserSpendingResturants(spending)),
    updateSpendingDataID: (id) => dispatch(updateSpendingDataID(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)