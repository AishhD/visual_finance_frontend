import React from 'react';
import C3Chart from 'react-c3js';
import 'c3/c3.css';

export default class UserLocationPieChart extends React.Component {

    render() {
        const data = {
            columns: [
                ['data1', 30, 200, 100, 400, 150, 250],
                ['data2', 50, 20, 10, 40, 15, 25]
            ],
            type: 'pie',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        };

        const title = {
            text: 'Mad cat'
        }

        return (
            <div >
                <h1> hello</h1>
                <div id="chart">
                    <C3Chart data={data} title={title} />
                </div>
            </div >
        )
    }
}