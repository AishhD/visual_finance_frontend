import React from 'react';


export default class LocationGroup extends React.Component {


    render() {
        return (
            <div className="ui stackable center aligned page grid">
                <h1>Selct your location group</h1>
                <select onChange={this.props.onLocationChange} name='location'>
                    {/* <option selected disabled>Location</option> */}
                    <option value="London">London</option>
                    <option value="North East">North East</option>
                    <option value="North West">North West</option>
                    <option value="Yorkshire">Yorkshire</option>
                    <option value="East Midlands">East Midlands</option>
                    <option value="West Midlands">West Midlands</option>
                    <option value="East">East</option>
                    <option value="South East">South East</option>
                    <option value="South West">South West</option>
                </select>
            </div>
        )
    }
}