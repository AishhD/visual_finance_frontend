import React from 'react';
import C3Chart from 'react-c3js';
import 'c3/c3.css';

export default class ComparisonLineGraph extends React.Component {

    render() {
        const data = {
            columns: [
                ['Your Spending', this.props.userData["spending_category"]["food_non_alcholic_drinks"], this.props.userData["spending_category"]["alcoholic_drinks_tobacco_narcotics"], this.props.userData["spending_category"]["clothing_footwear"], this.props.userData["spending_category"]["household_bills"], this.props.userData["spending_category"]["recreation_culture"], this.props.userData["spending_category"]["education"], this.props.userData["spending_category"]["resturants_hotels"], this.props.userData["spending_category"]["transport"], this.props.userData["spending_category"]["other"]],

                ['National Average Spending', this.props.nationalAverageData["spending_category"]["food_non_alcholic_drinks"], this.props.nationalAverageData["spending_category"]["alcoholic_drinks_tobacco_narcotics"], this.props.nationalAverageData["spending_category"]["clothing_footwear"], this.props.nationalAverageData["spending_category"]["household_bills"], this.props.nationalAverageData["spending_category"]["recreation_culture"], this.props.nationalAverageData["spending_category"]["education"], this.props.nationalAverageData["spending_category"]["resturants_hotels"], this.props.nationalAverageData["spending_category"]["transport"], this.props.nationalAverageData["spending_category"]["other"]],

                ['Average User Spending', this.props.averageUserData["spending_category"]["food_non_alcholic_drinks"], this.props.averageUserData["spending_category"]["alcoholic_drinks_tobacco_narcotics"], this.props.averageUserData["spending_category"]["clothing_footwear"], this.props.averageUserData["spending_category"]["household_bills"], this.props.averageUserData["spending_category"]["recreation_culture"], this.props.averageUserData["spending_category"]["education"], this.props.averageUserData["spending_category"]["resturants_hotels"], this.props.averageUserData["spending_category"]["transport"], this.props.averageUserData["spending_category"]["other"]],

            ],
            type: 'bar',
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
