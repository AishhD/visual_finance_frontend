import React, { Component } from 'react';
import AmCharts from "@amcharts/amcharts3-react";
import { getAllCountriesrtyHouseholdSpending } from "../Adapter.js";

class Map extends Component {

    state = {
        householdSpending: null
    }

    componentDidMount() {
        getAllCountriesrtyHouseholdSpending()
            .then(spending => this.setState({ householdSpending: spending }))
            .then(spending => this.removeID())
    }

    removeID() {
        const { getCode } = require('country-list');
        const spendingData = JSON.parse(JSON.stringify(this.state.householdSpending))
        const descriptionEngland = () => {
            return '<a href="/UK">Compare your spending</a><br /><br />'
        }
        let newSpendingData = spendingData
            .map(countryObj => (
                countryObj.country !== "United Kingdom" ?
                    {

                        id: getCode(countryObj.country),
                        value: Math.round(countryObj.value),
                    }
                    :
                    {
                        id: getCode(countryObj.country),
                        value: Math.round(countryObj.value),
                        "description": '<a href="/UK">Compare your spending</a><br /><br />'
                    }
            ))
            .filter(countryObj => countryObj.value !== 0)
            .filter(countryObj => countryObj.id !== undefined)
        this.setState({ householdSpending: newSpendingData })
    }

    render() {

        const config = {
            "type": "map",
            "theme": "light",
            "colorSteps": 10,
            "fill": "blue",
            "dataProvider": {
                "map": "worldLow",
                "areas": this.state.householdSpending
            },
            "include": "UK",

            "areasSettings": {
                // "fill": "blue",
                "color": "#8dc6ff",
                "rollOverOutineColor": "#000000",
                "selectable": true,
                // "selectedColor": "#001f3f",
                // "outlineColor": "#001f3f",
                "colorSolid": "#002266",
                "balloonText": "[[title]]: <b>[[value]]</b>",
                // "unlistedAreasAlpha": 0
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
                    // console.log(ev)
                },

            },]
        }

        return (
            <div class="flex-container">
                <div>
                    <h1>Household Consumption Expenditure per Capita</h1>
                </div>
                <div style={{ width: "100%", height: "500px" }}>
                    <AmCharts.React style={{ width: "100%", height: "100%" }} options={config} />
                </div>
                {/* <AmCharts.React style={{ width: "100%", height: "calc(100% - 60px)" }} options={config} /> */}
                <div><h4>2017 US$ </h4>
                    <h5>Source: <a href="https://data.worldbank.org/indicator/NE.CON.PRVT.PC.KD">The World Bank</a> </h5>
                </div>
            </div>
        );
    }
}

export default Map


