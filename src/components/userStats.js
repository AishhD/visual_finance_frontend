import React from 'react';
import { connect } from "react-redux";
import * as adapter from "../Adapter.js";
import updateAllAgeGroups from '../actions/updateAllAgeGroups';
import updateChildrenData from "../actions/updateChildrenData"
import updateErrors from "../actions/updateErrors"
import updateAllCities from '../actions/updateAllCities'
import updateNationalAverage from '../actions/updateNationalAverage'
import 'c3/c3.css';
import C3Chart from 'react-c3js';
import { Segment, Container } from 'semantic-ui-react'
import ComparisonLineGraph from './ComparisonLineGraph.js';


class UserStats extends React.Component {

    //check for token localstorage.getItem(token)
    //send validation request to the back to check if token is valid

    handleError() {
        this.props.updateError("Please retry")

    }

    componentDidMount() {
        adapter.validate()
            .catch(error => {
                this.props.history.push(`/Login`)
            })
        if (this.props.allAgeGroups === "" && this.props.allCities === "" && this.props.childrenData === "") {
            adapter.getAgeGroups()
                .then(allAges => this.props.updateAllAgeGroups(allAges))

            adapter.getChildrenData()
                .then(childrenData => this.props.updateChildrenData(childrenData))

            adapter.getCityGroups()
                .then(allLocations => this.props.updateAllCities(allLocations))
        }
        adapter.getNationalAverage()
            .then(average => this.props.updateNationalAverage(average))
    }

    render() {
        const data = {
            columns: [

                ["National Average",
                    0, 2, 3, 5]
                ,
                ["Your spending",
                    0, 25, 3, 5]
            ],
            type: 'line',
            labels: true,
        };
        const axis = {
            x: {
                type: 'category',
                categories: ['Food & non-alcholic drinks', 'Alcoholic drinks, tobacco & narcotics', 'Clothing & Footwear', 'Household and Bills', 'Recreation & Culture', 'Education', 'Resturants & Hotels', 'Transport', 'Other']
            },
        }



        console.log(this.props.userSpending)
        return (
            <Segment raised style={{ marginTop: '15em' }}>
                <Container>
                    <div >
                        {this.props.nationalAverage && this.props.userSpending ?
                            <ComparisonLineGraph userData={this.props.userSpending} nationalAverageData={this.props.nationalAverage[0]} userTitle={"Average spending breakdown for " + this.props.userAgeData["age_group"] + " year olds"} />
                            :
                            ""
                        }

                    </div >
                </Container>
            </Segment>
        )
    }
}







const mapStateToProps = (state) => {
    return {
        allAgeGroups: state.allAgeGroups,
        allCities: state.allCities,
        childrenData: state.childrenData,
        userLocationData: state.userLocationData,
        userAgeData: state.userAgeData,
        userSpending: state.userSpending,
        userChildrenData: state.userChildrenData,
        children: state.userChildren,
        nationalAverage: state.nationalAverage,
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateAllAgeGroups: (allAges) => { dispatch(updateAllAgeGroups(allAges)) },
    updateChildrenData: (childrenData) => { dispatch(updateChildrenData(childrenData)) },
    updateAllCities: (allCities) => { dispatch(updateAllCities(allCities)) },
    updateErrors: (error) => { dispatch(updateErrors(error)) },
    updateNationalAverage: (average) => { dispatch(updateNationalAverage(average)) },
})

export default connect(mapStateToProps, mapDispatchToProps)(UserStats)