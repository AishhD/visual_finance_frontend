import React from 'react';
import AllOptionsDropdown from './AllOptionsDropdown';
import { sendFiltersAction } from '../actions/sendFiltersAction';
import { connect } from 'react-redux';
import { Divider, Grid } from 'semantic-ui-react'
import updateUserAge from "../actions/updateUserAge";
import updateUserAgeData from "../actions/updateUserAgeData";
import updateAllAgeGroups from '../actions/updateAllAgeGroups';
import updateUserLocation from '../actions/updateUserLocation';
import updateUserLocationData from '../actions/updateUserLocationData';
import updateAllCities from '../actions/updateAllCities'
import updateUserChildren from "../actions/updateUserChildren";
import updateChildrenData from "../actions/updateChildrenData"
import updateUserChildrenData from '../actions/updateUserChildrenData'
import updateNationalAverage from '../actions/updateNationalAverage'
import updateAverageUserSpending from '../actions/updateAverageUserSpending'
import AllBarChart from './AllBarChart'
import * as adapter from "../Adapter.js";



class BarChartQuestionnaire extends React.Component {


    state = {
        firstSelection: null,
        secondSelection: null,
        thirdSelection: null,
    }

    componentDidMount() {
        adapter.getNationalAverage()
            .then(average => this.props.updateNationalAverage(average))
        adapter.getUserAverage()
            .then(average => this.props.updateAverageUserSpending(average))
    }

    selectHandler = (event, data, state) => {
        if (this.props.allAgeGroups.find(age => age["age_group"] === data.value)) {
            const age = this.props.allAgeGroups.find(age => age["age_group"] === data.value);
            this.setState({ [state]: age })
        } else if (this.props.allCities.find(city => city["city_name"] === data.value)) {
            const city = this.props.allCities.find(city => city["city_name"] === data.value)
            this.setState({ [state]: city })
        } else if (data.value === "With Children") {
            this.setState({ [state]: this.props.childrenData })
        } else if (data.value === "National Average") {
            this.setState({ [state]: this.props.nationalAverage[0] })
        } else if (data.value === "Your Spending") {
            this.setState({ [state]: this.props.userSpending })
        } else if (data.value === "Average User Spending") {
            this.setState({ [state]: this.props.averageUserSpending })
        }
    }

    onSubmit = () => {
        // console.log(this.props)
        // this.props.saveFilters(this.state.filters)

        // fetch(url)
        //     .then(resp => resp.json())
        //     .then(data => {
        //         this.props.storeData(data)
        //     })

    }


    handleError() {
        return <h1>{this.props.location.state.error}</h1>
    }

    render() {
        console.log(this.state)
        const { firstSelection, secondSelection, thirdSelection } = this.state
        return (
            <div>
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
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row centered>
                        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                            <AllOptionsDropdown selectHandler={this.selectHandler} state={"firstSelection"} />
                        </Grid.Column>
                        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                            <AllOptionsDropdown selectHandler={this.selectHandler} state={"secondSelection"} />
                        </Grid.Column>
                        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                            <AllOptionsDropdown selectHandler={this.selectHandler} state={"thirdSelection"} />
                        </Grid.Column>
                    </Grid.Row>
                    {/* <Grid.Row centered>
                        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}> */}
                    {/* <Button onClick={this.onSubmit}>Submit</Button> */}
                    {/* <LinkButton to="/NationalCharts">Submit</LinkButton> */}
                    {/* <Button to="/NationalCharts">Submit</Button> */}
                    {/* </Grid.Column>
                    </Grid.Row> */}
                </Grid>

                {firstSelection && secondSelection && thirdSelection ? < AllBarChart firstData={firstSelection} secondData={secondSelection} thirdData={thirdSelection} /> : ""}

            </div >
        )
    }
}

const mapStateToProps = (state) => ({
    age: state.userAge,
    allAgeGroups: state.allAgeGroups,
    place: state.userLocation,
    allCities: state.allCities,
    children: state.userChildren,
    childrenData: state.childrenData,
    filterData: state.filterData,
    userSpending: state.userSpending,
    nationalAverage: state.nationalAverage,
    averageUserSpending: state.averageUserSpending
})

const mapDispatchToProps = (dispatch) => ({
    updateUserAge: (newAge) => { dispatch(updateUserAge(newAge)) },
    updateUserAgeData: (newAgeData) => { dispatch(updateUserAgeData(newAgeData)) },
    updateAllAgeGroups: (allAges) => { dispatch(updateAllAgeGroups(allAges)) },
    updateUserLocation: (newLocation) => { dispatch(updateUserLocation(newLocation)) },
    updateUserLocationData: (locationData) => { dispatch(updateUserLocationData(locationData)) },
    updateAllCities: (allCities) => { dispatch(updateAllCities(allCities)) },
    updateUserChildren: (children) => { dispatch(updateUserChildren(children)) },
    updateChildrenData: (childrenData) => { dispatch(updateChildrenData(childrenData)) },
    updateUserChildrenData: (userChildrenData) => { dispatch(updateUserChildrenData(userChildrenData)) },
    saveFilters: (filters) => dispatch(sendFiltersAction(filters)),
    updateNationalAverage: (average) => { dispatch(updateNationalAverage(average)) },
    updateAverageUserSpending: (average) => { dispatch(updateAverageUserSpending(average)) },
})


export default connect(mapStateToProps, mapDispatchToProps)(BarChartQuestionnaire)