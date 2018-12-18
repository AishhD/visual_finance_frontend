import React from 'react';
import C3Chart from 'react-c3js';
import 'c3/c3.css';

export default class UserPieChart extends React.Component {

    render() {
        // console.log("crazy", this.props.userAgeData["spending_category"]["food_non_alcholic_drinks"])
        const data = {
            columns: [
                ['Food & non-alcholic drinks', this.props.userData["spending_category"]["food_non_alcholic_drinks"]],
                ['Alcoholic drinks, tobacco & narcotics', this.props.userData["spending_category"]["alcoholic_drinks_tobacco_narcotics"]],
                ['Clothing & Footwear', this.props.userData["spending_category"]["clothing_footwear"]],
                ['Household and Bills', this.props.userData["spending_category"]["household_bills"]],
                ['Recreation & Culture', this.props.userData["spending_category"]["recreation_culture"]],
                ['Education', this.props.userData["spending_category"]["education"]],
                ['Resturants & Hotels', this.props.userData["spending_category"]["resturants_hotels"]],
                ['Transport', this.props.userData["spending_category"]["transport"]],
                ['Other', this.props.userData["spending_category"]["other"]],
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
