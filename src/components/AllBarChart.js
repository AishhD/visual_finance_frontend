import React from 'react';
import C3Chart from 'react-c3js';
import 'c3/c3.css';

class AllBarChart extends React.Component {

    title(data) {
        // if (data["city_name"] && data["city_name"] === "London" || data["city_name"] === "Yorkshire and The Humber") {
        //     return "Average spending in " + data["city_name"]
        // } else if (data["city_name"]) {
        //     return "Average spending in the " + data["city_name"]
        // } 
        if (data["age_group"] === "less than 30") {
            return "Average spending for people " + data["age_group"] + " year olds"
        } else if (data["age_group"]) {
            return "Average spending for " + data["age_group"] + " year olds"
        } else if (data["city_name"] === "London" || data["city_name"] === "Yorkshire and The Humber") {
            return "Average spending in " + data["city_name"]
        } else if (data["city_name"]) {
            return "Average spending in the " + data["city_name"]
        } else if (data["children"]) {
            return "Average spending for people with children"
        } else if (data["national_average"]) {
            return "National Average Spending"
        } else if (data["average_user_spending"]) {
            return "Average User Spending"
        }
        return "Your Spending"
        //need to add identifier to user spending
    }

    render() {
        const data = {
            columns: [
                [
                    this.title(this.props.firstData)
                    , this.props.firstData["spending_category"]["food_non_alcholic_drinks"],
                    this.props.firstData["spending_category"]["alcoholic_drinks_tobacco_narcotics"],
                    this.props.firstData["spending_category"]["clothing_footwear"],
                    this.props.firstData["spending_category"]["household_bills"],
                    this.props.firstData["spending_category"]["recreation_culture"],
                    this.props.firstData["spending_category"]["education"],
                    this.props.firstData["spending_category"]["resturants_hotels"],
                    this.props.firstData["spending_category"]["transport"],
                    this.props.firstData["spending_category"]["other"]],

                [this.title(this.props.secondData),
                this.props.secondData["spending_category"]["alcoholic_drinks_tobacco_narcotics"],
                this.props.secondData["spending_category"]["clothing_footwear"],
                this.props.secondData["spending_category"]["household_bills"],
                this.props.secondData["spending_category"]["recreation_culture"],
                this.props.secondData["spending_category"]["education"],
                this.props.secondData["spending_category"]["resturants_hotels"],
                this.props.secondData["spending_category"]["transport"],
                this.props.secondData["spending_category"]["other"]],

                [this.title(this.props.thirdData),
                this.props.thirdData["spending_category"]["food_non_alcholic_drinks"],
                this.props.thirdData["spending_category"]["alcoholic_drinks_tobacco_narcotics"],
                this.props.thirdData["spending_category"]["clothing_footwear"],
                this.props.thirdData["spending_category"]["household_bills"],
                this.props.thirdData["spending_category"]["recreation_culture"],
                this.props.thirdData["spending_category"]["education"],
                this.props.thirdData["spending_category"]["resturants_hotels"],
                this.props.thirdData["spending_category"]["transport"],
                this.props.thirdData["spending_category"]["other"]]
            ],
            type: 'bar',
            labels: true,
        };

        const title = {
            text: "Average Spending breakdown by category"
        }

        const legend = {
            position: 'inset'
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

        return (
            <div >
                <div id="chart">
                    <C3Chart data={data} title={title} axis={axis} legend={legend} />
                </div>
            </div >
        )
    }
}



export default (AllBarChart)