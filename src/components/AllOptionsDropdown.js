import React from 'react';
import { connect } from "react-redux";
import updateUserAge from "../actions/updateUserAge";
import updateUserAgeData from "../actions/updateUserAgeData";
import * as adapter from "../Adapter.js";
import updateAllAgeGroups from '../actions/updateAllAgeGroups';
import updateUserLocation from '../actions/updateUserLocation';
import updateUserLocationData from '../actions/updateUserLocationData';
import updateAllCities from '../actions/updateAllCities'
import { Form, Dropdown } from 'semantic-ui-react';
import updateUserChildren from "../actions/updateUserChildren";
import updateChildrenData from "../actions/updateChildrenData"
import updateUserChildrenData from '../actions/updateUserChildrenData'



class AllOptionsDropdown extends React.Component {

    componentDidMount() {
        adapter.getAgeGroups()
            .then(allAges => this.props.updateAllAgeGroups(allAges))
        adapter.getCityGroups()
            .then(allLocations => this.props.updateAllCities(allLocations))
        adapter.getChildrenData()
            .then(childrenData => this.props.updateChildrenData(childrenData))
    }

    userAgeData(age) {
        this.props.updateUserAgeData(age)
    }

    selectedAge = (event, data) => {
        const age = this.props.allAgeGroups.find(age => age["age_group"] === data.value);
        this.userAgeData(age)
        return age["age_group"]
    }

    userLocationData(location) {
        this.props.updateUserLocationData(location)
    }

    selectedCity = (event, data) => {
        const city = this.props.allCities.find(city => city["city_name"] === data.value)
        this.userLocationData(city)
        return city["city_name"]
    }

    render() {
        let options = [{
            "text": "With Children",
            "value": "With Children"
        },
        {
            "text": "National Average",
            "value": "National Average"
        }]
        const ageGroupsHandler = () => {
            this.props.allAgeGroups.forEach(ageGroup => {
                let option = {};

                option.text = ageGroup.age_group
                option.value = ageGroup.age_group

                options.push(option);
            })
        }
        const locationGroupsHandler = () => {
            this.props.allCities.forEach(cityGroup => {
                let option = {};

                option.text = cityGroup.city_name
                option.value = cityGroup.city_name

                options.push(option);
            })
        }
        if (this.props.allCities) locationGroupsHandler()
        if (this.props.allAgeGroups) ageGroupsHandler()
        return (
            <div className="ui stackable center aligned page grid">
                <h1>Select what to compare</h1>
                {(this.props.allAgeGroups) ?
                    <Form>
                        <Form.Field required>
                            <Dropdown placeholder='Select' fluid selection onChange={(event, data) => { this.props.selectHandler(event, data, this.props.state) }} options={options} />
                        </Form.Field>
                    </Form>
                    : "Please wait"}
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    age: state.userAge,
    allAgeGroups: state.allAgeGroups,
    place: state.userLocation,
    allCities: state.allCities,
    children: state.userChildren,
    childrenData: state.childrenData,
})

const mapDispatchToProps = (dispatch) => ({
    updateUserAge: (newAge) => { dispatch(updateUserAge(newAge)) },
    updateUserAgeData: (newAgeData) => { dispatch(updateUserAgeData(newAgeData)) },
    updateAllAgeGroups: (allAges) => { dispatch(updateAllAgeGroups(allAges)) },
    updateUserLocation: (newLocation) => { dispatch(updateUserLocation(newLocation)) },
    updateUserLocationData: (locationData) => { dispatch(updateUserLocationData(locationData)) },
    updateAllCities: (allCities) => { dispatch(updateAllCities(allCities)) },
    updateUserChildren: (children) => { dispatch(updateUserChildren(children)) },
    updateChildrenData: (childrenData) => { dispatch(updateChildrenData(childrenData)) },
    updateUserChildrenData: (userChildrenData) => { dispatch(updateUserChildrenData(userChildrenData)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(AllOptionsDropdown)

