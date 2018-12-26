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
                    "value": 658188.6034
                },
                {
                    "id": "AT",
                    "value": 217653.4063
                },
                {
                    "id": "BE",
                    "value": 255659.6354
                },
                {
                    "id": "CA",
                    "value": 896977.0966
                },
                {
                    "id": "CZ",
                    "value": 163205.4061
                },
                {
                    "id": "DK",
                    "value": 126823.0316
                },
                {
                    "id": "FI",
                    "value": 121446.2354
                },
                {
                    "id": "FR",
                    "value": 1403614.3297
                },
                {
                    "id": "DE",
                    "value": 2025194.7713
                },
                {
                    "id": "GR",
                    "value": 193573.1991
                },
                {
                    "id": "HU",
                    "value": 123184.6912
                },
                {
                    "id": "IS",
                    "value": 7750.9996
                },
                {
                    "id": "IE",
                    "value": 104896.5726
                },
                {
                    "id": "IT",
                    "value": 1343001.8871
                },
                {
                    "id": "JP",
                    "value": 2858279.4738
                },
                {
                    "id": "KR",
                    "value": 843197.7037
                },
                {
                    "id": "LU",
                    "value": 16924.2754
                },
                {
                    "id": "MX",
                    "value": 1397196.1327
                },
                {
                    "id": "NL",
                    "value": 374867.3299
                },
                {
                    "id": "NZ",
                    "value": 98121.1706
                },
                {
                    "id": "NO",
                    "value": 131626.6558
                },
                {
                    "id": "PL",
                    "value": 582920.2456
                },
                {
                    "id": "PT",
                    "value": 194040.4139
                },
                {
                    "id": "SK",
                    "value": 86245.6174
                },
                {
                    "id": "SE",
                    "value": 204506.4823
                },
                {
                    "id": "CH",
                    "value": 272084.3728
                },
                {
                    "id": "TR",
                    "value": 1173948.4546
                },
                {
                    "id": "GB",
                    "value": 1690313.7486
                },
                {
                    "id": "US",
                    "value": 11927466
                },
                {
                    "id": "CN",
                    "value": 7647509.0513
                },
                {
                    "id": "CO",
                    "value": 457024.4046
                },
                {
                    "id": "EE",
                    "value": 718996.8247
                },
                {
                    "id": "ID",
                    "value": 1604083.5143
                },
                {
                    "id": "IL",
                    "value": 160786.6547
                },
                {
                    "id": "RU",
                    "value": 1878151.8028
                },
                {
                    "id": "SI",
                    "value": 34171.3078
                },
                {
                    "id": "ZA",
                    "value": 434411.0314
                },
                {
                    "id": "LV",
                    "value": 28685.4382
                },
                {
                    "id": "BR",
                    "value": 2008772.3645
                },
                {
                    "id": "LT",
                    "value": 52215.6076
                },
                {
                    "id": "AR",
                    "value": 1591951.0939
                },
                {
                    "id": "CR",
                    "value": 48779.4833
                },
                {
                    "id": "BG",
                    "value": 80496.4417
                },
                {
                    "id": "HR",
                    "value": 54174.6536
                },
                {
                    "id": "CY",
                    "value": 18292.5731
                },
                {
                    "id": "MT",
                    "value": 7539.5316
                },
                {
                    "id": "RO",
                    "value": 259423.3035
                },
                {
                    "id": "MK",
                    "value": 19497.3638
                },
                {
                    "id": "ZM",
                    "value": 29721.2534
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


