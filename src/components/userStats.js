import React from 'react';
import { connect } from "react-redux";
import * as adapter from "../Adapter.js";
import updateAllAgeGroups from '../actions/updateAllAgeGroups';
import updateChildrenData from "../actions/updateChildrenData"
import updateAllCities from '../actions/updateAllCities'

class UserStats extends React.Component {

    //check for token localstorage.getItem(token)
    //send validation request to the back to check if token is valid

    componentDidMount() {
        if (this.props.allAgeGroups === "" && this.props.allCities === "" && this.props.childrenData === "") {
            adapter.getAgeGroups()
                .then(allAges => this.props.updateAllAgeGroups(allAges))

            adapter.getChildrenData()
                .then(childrenData => this.props.updateChildrenData(childrenData))

            adapter.getCityGroups()
                .then(allLocations => this.props.updateAllCities(allLocations))
        }
    }

    loggedin() {
        const token = localStorage.getItem("token")
    }


    render() {

        return (
            <div>
                {localStorage.getItem("token") ?
                    <h1>logged in</h1> :
                    ""}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    allAgeGroups: state.allAgeGroups,
    allCities: state.allCities,
    childrenData: state.childrenData
})

const mapDispatchToProps = (dispatch) => ({
    updateAllAgeGroups: (allAges) => { dispatch(updateAllAgeGroups(allAges)) },
    updateChildrenData: (childrenData) => { dispatch(updateChildrenData(childrenData)) },
    updateAllCities: (allCities) => { dispatch(updateAllCities(allCities)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(UserStats)