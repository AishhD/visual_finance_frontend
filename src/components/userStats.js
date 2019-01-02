import React from 'react';
import { connect } from "react-redux";
import * as adapter from "../Adapter.js";
import updateAllAgeGroups from '../actions/updateAllAgeGroups';
import updateChildrenData from "../actions/updateChildrenData"
import updateErrors from "../actions/updateErrors"
import updateAllCities from '../actions/updateAllCities'
import updateNationalAverage from '../actions/updateNationalAverage'
import updateAverageUserSpending from '../actions/updateAverageUserSpending'
import 'c3/c3.css';
import { Segment, Container, Grid, Divider } from 'semantic-ui-react'
import ComparisonLineGraph from './ComparisonLineGraph.js';
import LinkButton from './link-button'


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
        adapter.getUserAverage()
            .then(average => this.props.updateAverageUserSpending(average))
    }

    render() {
        // const data = {
        //     columns: [

        //         ["National Average",
        //             0, 2, 3, 5]
        //         ,
        //         ["Your spending",
        //             0, 25, 3, 5]
        //     ],
        //     type: 'line',
        //     labels: true,
        // // };
        // const axis = {
        //     x: {
        //         type: 'category',
        //         categories: ['Food & non-alcholic drinks', 'Alcoholic drinks, tobacco & narcotics', 'Clothing & Footwear', 'Household and Bills', 'Recreation & Culture', 'Education', 'Resturants & Hotels', 'Transport', 'Other']
        //     },
        // }




        return (
            <Segment raised style={{ marginTop: '15em' }}>
                <Container>
                    <div >

                        {this.props.nationalAverage && this.props.userSpending && this.props.averageUserSpending ?
                            <ComparisonLineGraph userData={this.props.userSpending} nationalAverageData={this.props.nationalAverage[0]} averageUserData={this.props.averageUserSpending} title={"Weekly Spending"} />
                            :
                            ""
                        }
                        <Grid celled='internally' columns='equal' stackable >
                            <Grid.Row centered>
                                <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                                    <Divider
                                        as='h3'
                                        className='header'
                                        horizontal
                                        style={{ margin: '1em 0em', textTransform: 'uppercase' }}
                                    >
                                        What would you like to compare
                                    </Divider>
                                    <LinkButton to="/AllQuestionnaire">Compare</LinkButton>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </div >
                </Container>
            </Segment >
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
        averageUserSpending: state.averageUserSpending
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateAllAgeGroups: (allAges) => { dispatch(updateAllAgeGroups(allAges)) },
    updateChildrenData: (childrenData) => { dispatch(updateChildrenData(childrenData)) },
    updateAllCities: (allCities) => { dispatch(updateAllCities(allCities)) },
    updateErrors: (error) => { dispatch(updateErrors(error)) },
    updateNationalAverage: (average) => { dispatch(updateNationalAverage(average)) },
    updateAverageUserSpending: (average) => { dispatch(updateAverageUserSpending(average)) },
})

export default connect(mapStateToProps, mapDispatchToProps)(UserStats)