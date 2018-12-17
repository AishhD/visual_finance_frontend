import React from 'react';
import { connect } from 'react-redux'
import updateUserLocation from '../actions/updateUserLocation';
import * as adapter from "../Adapter.js";
import updateAllCities from '../actions/updateAllCities'
import { Form } from 'semantic-ui-react'


class LocationGroup extends React.Component {


    componentDidMount() {
        adapter.getCityGroups()
            .then(allLocations => this.props.updateAllCities(allLocations))
    }

    selectedCity = (event) => {
        const city = this.props.allCities.find(city => city["city_name"] === event.target.value)
        return city["city_name"]
    }

    render() {

        return (
            <div className="ui stackable center aligned page grid">
                <h1>Selct your location group</h1>
                <Form>
                    <Form.Field required>
                        {this.props.allCities ?
                            <select value={this.props.location} onChange={(event) => { this.props.updateUserLocation(this.selectedCity(event)) }} name='location'>
                                {this.props.allCities.map(place =>
                                    < option value={place["city_name"]} key={place["city_name"]} > {place["city_name"]}</option>
                                )}
                            </select> :
                            "not done"}
                    </Form.Field>
                </Form>
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
    updateAllCities: (allCities) => { dispatch(updateAllCities(allCities)) }
})

export default connect(mapStateToProps, mapDipatchToProps)(LocationGroup);