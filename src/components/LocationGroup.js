import React from 'react';
import { connect } from 'react-redux'
import updateUserLocation from '../actions/updateUserLocation';
import updateUserLocationData from '../actions/updateUserLocationData';
import * as adapter from "../Adapter.js";
import updateAllCities from '../actions/updateAllCities'
import { Form, Dropdown } from 'semantic-ui-react'


class LocationGroup extends React.Component {


    componentDidMount() {
        adapter.getCityGroups()
            .then(allLocations => this.props.updateAllCities(allLocations))
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
        let options = []
        const locationGroupsHandler = () => {
            this.props.allCities.forEach(cityGroup => {
                let option = {};

                option.text = cityGroup.city_name
                option.value = cityGroup.city_name

                options.push(option);
            })
        }
        if (this.props.allCities) locationGroupsHandler()

        return (

            <div className="ui stackable center aligned page grid">
                <h1>Selct your location group</h1>
                {(this.props.allCities) ?
                    <Form>
                        <Form.Field required>
                            <Dropdown placeholder='Select Location' fluid selection onChange={(event, data) => { this.props.updateUserLocation(this.selectedCity(event, data)) }} options={options} />
                        </Form.Field>
                    </Form>
                    : "Please wait"}
            </div>


        )
    }
}



const mapStateToProps = (state) => ({
    place: state.userLocation,
    allCities: state.allCities
})

const mapDipatchToProps = (dispatch) => ({
    updateUserLocation: (newLocation) => { dispatch(updateUserLocation(newLocation)) },
    updateUserLocationData: (locationData) => { dispatch(updateUserLocationData(locationData)) },
    updateAllCities: (allCities) => { dispatch(updateAllCities(allCities)) }
})

export default connect(mapStateToProps, mapDipatchToProps)(LocationGroup);