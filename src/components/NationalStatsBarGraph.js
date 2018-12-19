import React from 'react';
import C3Chart from 'react-c3js';
import 'c3/c3.css';
import { connect } from 'react-redux'

class NatationalStatsPieChart extends React.Component {

    render() {
        const data = {
            columns: [
                [
                    this.props.userLocationData["city_name"] === "London" || this.props.userLocationData["city_name"] === "Yorkshire and The Humber" ?
                        "Average spending breakdown for people in " + this.props.userLocationData["city_name"]
                        :
                        "Average spending breakdown for people in the " + this.props.userLocationData["city_name"]
                    , this.props.userLocationData["spending_category"]["food_non_alcholic_drinks"],
                    this.props.userLocationData["spending_category"]["alcoholic_drinks_tobacco_narcotics"],
                    this.props.userLocationData["spending_category"]["clothing_footwear"],
                    this.props.userLocationData["spending_category"]["household_bills"],
                    this.props.userLocationData["spending_category"]["recreation_culture"],
                    this.props.userLocationData["spending_category"]["education"],
                    this.props.userLocationData["spending_category"]["resturants_hotels"],
                    this.props.userLocationData["spending_category"]["transport"],
                    this.props.userLocationData["spending_category"]["other"]],

                [this.props.userAgeData["age_group"] === "less than 30" ?
                    "Average spending breakdown for people " + this.props.userAgeData["age_group"] + " year olds"
                    :
                    "Average spending breakdown for " + this.props.userAgeData["age_group"] + " year olds", this.props.userLocationData["spending_category"]["food_non_alcholic_drinks"],
                this.props.userAgeData["spending_category"]["alcoholic_drinks_tobacco_narcotics"],
                this.props.userAgeData["spending_category"]["clothing_footwear"],
                this.props.userAgeData["spending_category"]["household_bills"],
                this.props.userAgeData["spending_category"]["recreation_culture"],
                this.props.userAgeData["spending_category"]["education"],
                this.props.userAgeData["spending_category"]["resturants_hotels"],
                this.props.userAgeData["spending_category"]["transport"],
                this.props.userAgeData["spending_category"]["other"]],

                (this.props.children === "Yes") ? ["Average spending breakdown for people with children",
                    this.props.userChildrenData["spending_category"]["food_non_alcholic_drinks"],
                    this.props.userChildrenData["spending_category"]["alcoholic_drinks_tobacco_narcotics"],
                    this.props.userChildrenData["spending_category"]["clothing_footwear"],
                    this.props.userChildrenData["spending_category"]["household_bills"],
                    this.props.userChildrenData["spending_category"]["recreation_culture"],
                    this.props.userChildrenData["spending_category"]["education"],
                    this.props.userChildrenData["spending_category"]["resturants_hotels"],
                    this.props.userChildrenData["spending_category"]["transport"],
                    this.props.userChildrenData["spending_category"]["other"]] : ""
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

const mapStateToProps = (state) => {
    return {
        userLocationData: state.userLocationData,
        userAgeData: state.userAgeData,
        userChildrenData: state.userChildrenData,
        children: state.userChildren,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(NatationalStatsPieChart)