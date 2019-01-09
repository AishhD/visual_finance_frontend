import React from 'react';
import C3Chart from 'react-c3js';
import 'c3/c3.css';

export default class NatationalStatsPieChart extends React.Component {

    title() {
        if (this.props.userData["age_group"]) {
            console.log(this.props.userData["age_group"])
            return this.props.userData["age_group"]
        } else if (this.props.userData["city_name"]) {
            return this.props.userData["city_name"]
        } else if (this.props.userData["children"]) {
            return this.props.userData["children"]
        }
    }

    render() {
        const data = {
            columns: [
                ['Food & non-alcoholic drinks', this.props.userData["spending_category"]["food_non_alcoholic_drinks"]],
                ['Alcoholic drinks, tobacco & narcotics', this.props.userData["spending_category"]["alcoholic_drinks_tobacco_narcotics"]],
                ['Clothing & Footwear', this.props.userData["spending_category"]["clothing_footwear"]],
                ['Household and Bills', this.props.userData["spending_category"]["household_bills"]],
                ['Recreation & Culture', this.props.userData["spending_category"]["recreation_culture"]],
                ['Education', this.props.userData["spending_category"]["education"]],
                ['Resturants & Hotels', this.props.userData["spending_category"]["resturants_hotels"]],
                ['Transport', this.props.userData["spending_category"]["transport"]],
                ['Other', this.props.userData["spending_category"]["other"]],
            ],
            type: 'donut',
        };



        const title = {
            text: this.props.title
        }

        return (
            <div >
                <div id="chart">
                    <C3Chart data={data} title={title} />
                </div>
            </div >
        )
    }
}
