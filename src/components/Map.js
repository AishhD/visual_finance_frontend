import React, { Component } from 'react';
import AmCharts from "@amcharts/amcharts3-react";
import { connect } from "react-redux"
import * as adapter from "../Adapter.js";
import mapData from "./mapData"




class App extends Component {


    componentDidMount() {
        adapter.getAllCountriesrtyHouseholdSpending()
            .then(spendingData => this.setState({ allCountriesHouseholdSpending: spendingData }))
    }

    render() {

        const config = {
            "type": "map",
            "theme": "dark",
            "colorSteps": 60,

            "dataProvider": {
                "map": "worldLow",
                "areas": mapData()

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


