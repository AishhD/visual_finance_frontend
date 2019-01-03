import React from 'react';
import { connect } from 'react-redux';
import updateUsername from "../actions/updateUsername";
import updateAuthorised from "../actions/updateAuthorised";
import updateUserAge from "../actions/updateUserAge";
import updateUserChildren from "../actions/updateUserChildren";
import updateUserLocation from '../actions/updateUserLocation';



const Logout = (props) => {
    const { updateUsername,
        updateAuthorised,
        updateUserLocation,
        updateUserChildren,
        updateUserAge } = props
    localStorage.removeItem("token");
    updateUserAge("")
    updateUsername("")
    updateUserChildren("")
    updateUserLocation("")
    updateAuthorised("")
    props.history.push('/UserStats')
}

const mapStateToProps = (state) => ({
    username: state.username,
    authorised: state.authorised,
    userAge: state.userAge,
    location: state.userLocation,
    children: state.userChildren
})

const mapDispatchToProps = (dispatch) => ({
    updateUsername: (newUsername) => { dispatch(updateUsername(newUsername)) },
    updateAuthorised: (status) => { dispatch(updateAuthorised(status)) },
    updateUserLocation: (newLocation) => { dispatch(updateUserLocation(newLocation)) },
    updateUserChildren: (children) => { dispatch(updateUserChildren(children)) },
    updateUserAge: (newAge) => { dispatch(updateUserAge(newAge)) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Logout)