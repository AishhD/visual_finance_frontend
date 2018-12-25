import React, { Component } from 'react';
import AmCharts from "@amcharts/amcharts3-react";
import { connect } from "react-redux"
import { lookup } from 'country-data';
import * as adapter from "../Adapter.js";




class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            allCountriesHouseholdSpending: null,
            selectedCoutry: null,
            countrySpending: [{
                "id": "AU",
                "value": 4447100
            },
            {
                "id": "US",
                "value": 658188
            }]
        }
    }

    componentDidMount() {
        adapter.getAllCountriesrtyHouseholdSpending()
            .then(spendingData => this.setState({ allCountriesHouseholdSpending: spendingData }))
    }

    selectedCountrySpending = (country) => {
        let selectedCity = country.mapObject.enTitle
        if (selectedCity !== "Russia" && selectedCity !== "Venezuela" && selectedCity !== "Bolivia" && selectedCity !== "Svalbard and Jan Mayen" && selectedCity !== "Syria" && selectedCity !== "Tanzania" && selectedCity !== "Democratic Republic of Congo") {
            // console.log(lookup.countries({ name: selectedCity }));

            console.log(lookup.countries({ name: selectedCity })[0].alpha3);
            console.log('selected!', selectedCity)
            return selectedCity
        }
    }

    render() {
        const config = {
            "type": "map",
            "theme": "light",
            "colorSteps": 10,
            "dataProvider": {
                "map": "worldLow",
                "getAreasFromMap": true,
                "areas": [{
                    "id": "AU",
                    "value": 4447100
                },
                {
                    "id": "US",
                    "value": 4447100
                },
                {
                    "id": "FR",
                    "value": 4447100
                },
                ],

                "valueLegend": {
                    "right": 10,
                    "minValue": "little",
                    "maxValue": "a lot!"
                },
            },



            "areasSettings": {
                // "selectedColor": "#CC0000",
                "selectable": true
            },

            "listeners": [{
                "event": "clickMapObject",
                "method": (e) => {
                    console.log(e.mapObject.enTitle)
                    this.selectedCountrySpending(e)
                }
            }]
        }
        return (

            <AmCharts.React style={{ width: "100%", height: "600px" }} options={config} />

        );
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(App)


