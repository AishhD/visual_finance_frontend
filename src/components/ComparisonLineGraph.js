import React from 'react';
import C3Chart from 'react-c3js';
import 'c3/c3.css';

export default class ComparisonLineGraph extends React.Component {

    render() {
        const data = {
            columns: [
                ['Food & non-alcholic drinks', this.props.userData["spending_category"]["food_non_alcholic_drinks"], this.props.userData["spending_category"]["alcoholic_drinks_tobacco_narcotics"], this.props.userData["spending_category"]["clothing_footwear"], this.props.userData["spending_category"]["household_bills"], this.props.userData["spending_category"]["recreation_culture"], this.props.userData["spending_category"]["education"], this.props.userData["spending_category"]["resturants_hotels"], this.props.userData["spending_category"]["transport"], this.props.userData["spending_category"]["other"]],


                ['Alcoholic drinks, tobacco & narcotics', this.props.userData["spending_category"]["alcoholic_drinks_tobacco_narcotics"]],
                ['Clothing & Footwear', this.props.userData["spending_category"]["clothing_footwear"]],

            ],
            type: 'line',
        };


        const title = {
            text: this.props.title
        }

        const axis = {
            x: {
                type: 'category',
                categories: ['Food & non-alcholic drinks', 'Alcoholic drinks, tobacco & narcotics', 'Clothing & Footwear', 'Household and Bills', 'Recreation & Culture', 'Education', 'Resturants & Hotels', 'Transport', 'Other']
            },
            y: {
                max: 180,
                min: 0,
                padding: { top: 0, bottom: 0 }
            }
        }

        const legend = {
            position: 'inset'
        }

        return (
            <div >
                <div id="chart">
                    <C3Chart data={data} title={title} axis={axis} legend={legend} />
                </div>
            </div >
        )
    }
}
