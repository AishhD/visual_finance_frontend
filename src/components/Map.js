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
                "colorRanges": [{
                    "start": 0,
                    "end": 10000,
                    "color": "#0080FF",
                    "variation": 0.4
                }, {
                    "start": 10001,
                    "end": 20000,
                    "color": "#FF2626",
                    "variation": 0.4
                }, {
                    "start": 20001,
                    "end": 100000,
                    "color": "#00B22D",
                    "variation": 0.4
                }],
                "areas": [{
                    "id": "AU",
                    "value": 10006
                },
                {
                    "id": "US",
                    "value": 30788
                },
                {
                    "id": "FR",
                    "value": 307784
                },
                {
                    "id": "AQ",
                    "value": 307983
                },
                {
                    "id": "BO",
                    "value": 3079876
                },
                {
                    "id": "CL",
                    "value": 3079875
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
                "selectable": true,
                "balloonText": "National Spending in [[title]]: <b>[[value]]</b>"
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


