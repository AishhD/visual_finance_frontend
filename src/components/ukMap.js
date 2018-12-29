import React, { Component } from 'react';
import AmCharts from "@amcharts/amcharts3-react";

class Map extends Component {

    render() {

        const config = {
            "type": "map",
            "theme": "light",
            "colorSteps": 60,
            "fill": "blue",
            "dataProvider": {
                "map": "worldLow",
                "zoomLevel": 8,
                "zoomLongitude": -2,
                "zoomLatitude": 53
                ,
                "areas": [{
                    "id": "GB",
                    "value": 1690314,
                },]
            },

            "areasSettings": {
                // "fill": "blue",
                "color": "#8dc6ff",
                "rollOverOutineColor": "#000000",
                "selectable": true,
                // "selectedColor": "#001f3f",
                // "outlineColor": "#001f3f",
                "colorSolid": "#002266",
                "balloonText": "[[title]]: <b>[[value]]</b>",
                "unlistedAreasAlpha": 0
            },

            "zoomControl": {
                // "zoomControlEnabled": false,   
                // "homeButtonEnabled": false
                // "maxZoomLevel": 0
                "zoomFactor": false,
            },

            "listeners": [{
                "event": "clickMapObject",
                "method": (e) => {
                    console.log(e.mapObject.enTitle)
                    this.selectedCountrySpending(e)
                },
                // "event": "descriptionClosed",
                // "method": function (ev) {
                //     // ev.chart.selectObject();
                //     console.log(ev)
                // },

            },]
        }

        return (
            <div>
                <h1>UK spending</h1>
                <AmCharts.React style={{ width: "100%", height: "250px" }} options={config} />
            </div>
        );
    }
}

export default Map


