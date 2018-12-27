import React, { Component } from 'react';
import AmCharts from "@amcharts/amcharts3-react";
import mapData from "./mapData"

class Map extends Component {

    render() {

        const config = {
            "type": "map",
            "theme": "light",
            "colorSteps": 60,
            "fill": "blue",
            "dataProvider": {
                "map": "worldLow",
                "areas": mapData()
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
                    console.log(ev)
                },

            },]
        }

        return (
            <div>
                <h1>Total Household Spending by Country</h1>
                <AmCharts.React style={{ width: "100%", height: "700px" }} options={config} />
                {/* <AmCharts.React style={{ width: "100%", height: "calc(100% - 60px)" }} options={config} /> */}
                <h4>This indicator is measured in million USD, in current prices and PPPs, as % of GDP, in annual growth rates and in % of disposable income. </h4>
                <h5>Source: <a href="https://data.oecd.org/hha/household-spending.htm">OECD</a> </h5>
            </div>
        );
    }
}

export default Map


