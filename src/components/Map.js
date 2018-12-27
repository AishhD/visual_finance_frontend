import React, { Component } from 'react';
import AmCharts from "@amcharts/amcharts3-react";
import { connect } from "react-redux"
import * as adapter from "../Adapter.js";




class App extends Component {


    componentDidMount() {
        adapter.getAllCountriesrtyHouseholdSpending()
            .then(spendingData => this.setState({ allCountriesHouseholdSpending: spendingData }))
    }

    // selectedCountrySpending = (country) => {
    //     if (country.mapObject.enTitle === "United Kingdom") {
    //         this.props.history.push(`/Questionnaire`)
    //     }
    // }

    render() {

        const descriptionEngland = () => {
            return '<a href="/Questionnaire">Compare your spending</a><br /><br />'
        }

        const config = {
            "type": "map",
            "theme": "dark",
            "colorSteps": 60,

            "dataProvider": {
                "map": "worldLow",
                "areas": [{
                    "id": "AU",
                    "value": 658189,
                },
                {
                    "id": "AT",
                    "value": 217653
                },
                {
                    "id": "BE",
                    "value": 255660
                },
                {
                    "id": "CA",
                    "value": 896977
                },
                {
                    "id": "CZ",
                    "value": 163205
                },
                {
                    "id": "DK",
                    "value": 126823
                },
                {
                    "id": "FI",
                    "value": 121446
                },
                {
                    "id": "FR",
                    "value": 1403614
                },
                {
                    "id": "DE",
                    "value": 2025195
                },
                {
                    "id": "GR",
                    "value": 193573
                },
                {
                    "id": "HU",
                    "value": 123185
                },
                {
                    "id": "IS",
                    "value": 7751
                },
                {
                    "id": "IE",
                    "value": 104897
                },
                {
                    "id": "IT",
                    "value": 1343002
                },
                {
                    "id": "JP",
                    "value": 2858279
                },
                {
                    "id": "KR",
                    "value": 843198
                },
                {
                    "id": "LU",
                    "value": 16924
                },
                {
                    "id": "MX",
                    "value": 1397196
                },
                {
                    "id": "NL",
                    "value": 374867
                },
                {
                    "id": "NZ",
                    "value": 98121
                },
                {
                    "id": "NO",
                    "value": 131627
                },
                {
                    "id": "PL",
                    "value": 582920
                },
                {
                    "id": "PT",
                    "value": 194040
                },
                {
                    "id": "SK",
                    "value": 86246
                },
                {
                    "id": "SE",
                    "value": 204506
                },
                {
                    "id": "CH",
                    "value": 272084
                },
                {
                    "id": "TR",
                    "value": 1173948
                },
                {
                    "id": "GB",
                    "value": 1690314,
                    "description": descriptionEngland()
                },
                {
                    "id": "US",
                    "value": 11927466
                },
                {
                    "id": "CN",
                    "value": 7647509
                },
                {
                    "id": "CO",
                    "value": 457024
                },
                {
                    "id": "EE",
                    "value": 718997
                },
                {
                    "id": "ID",
                    "value": 1604084
                },
                {
                    "id": "IL",
                    "value": 160787
                },
                {
                    "id": "RU",
                    "value": 1878152
                },
                {
                    "id": "SI",
                    "value": 34171
                },
                {
                    "id": "ZA",
                    "value": 434411
                },
                {
                    "id": "LV",
                    "value": 28685
                },
                {
                    "id": "BR",
                    "value": 2008772
                },
                {
                    "id": "LT",
                    "value": 52216
                },
                {
                    "id": "AR",
                    "value": 1591951
                },
                {
                    "id": "CR",
                    "value": 48779
                },
                {
                    "id": "BG",
                    "value": 80496
                },
                {
                    "id": "HR",
                    "value": 54175
                },
                {
                    "id": "CY",
                    "value": 18293
                },
                {
                    "id": "MT",
                    "value": 7540
                },
                {
                    "id": "RO",
                    "value": 259423
                },
                {
                    "id": "MK",
                    "value": 19497
                },
                {
                    "id": "ZM",
                    "value": 29721
                },

                ],

            },

            "areasSettings": {
                "fill": "pink",
                "color": "#8dc6ff",
                "selectable": true,
                "selectedColor": "#001f3f",
                // "outlineColor": "#001f3f",
                "colorSolid": "#002266",
                "balloonText": "[[title]]: <b>[[value]]</b>"
            },



            "valueLegend": {
                divId: "legenddiv",
                "bottom": 10,
                "right": 10,
                "align": "center",
            },

            "zoomControl": {
                // "zoomControlEnabled": false,   
                // "homeButtonEnabled": false
                // "maxZoomLevel": 0
                "zoomFactor": false,
            },

            "listeners": [{
                // "event": "clickMapObject",
                // "method": (e) => {
                //     console.log(e.mapObject.enTitle)
                //     this.selectedCountrySpending(e)
                // },
                "event": "descriptionClosed",
                "method": function (ev) {
                    // ev.chart.selectObject();
                    console.log(ev)
                },
            }

            ]
        }
        return (
            <div>
                <h1>Total Household Spending</h1>

                <AmCharts.React style={{ width: "100%", height: "700px" }} options={config} />
                {/* <AmCharts.React style={{ width: "100%", height: "calc(100% - 60px)" }} options={config} /> */}
                <h5>Measured in million USD</h5>
                <h5>Source: <a href="https://data.oecd.org/hha/household-spending.htm">OECD</a> </h5>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(App)


