import React from 'react';
import 'c3/c3.css';
import LinkButton from './link-button'
import { connect } from 'react-redux'
import UserAgePieChart from './UserAgePieChart'
import UserLocationPieChart from './UserLocationPieChart'
import UserChildrenPieChart from './UserChildrenPieChart'
import { Redirect } from 'react-router-dom'
import NationalStatsBarGraph from "./NationalStatsBarGraph"
import { Divider, Grid } from 'semantic-ui-react'


class NationalCharts extends React.Component {


    render() {
        const { children, age, location } = this.props

        return (
            children && age && location ?
                <div >

                    <Grid celled='internally' columns='equal' stackable >
                        <Grid.Row centered>
                            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                                <Divider
                                    as='h3'
                                    className='header'
                                    horizontal
                                    style={{ margin: '3em 0em', textTransform: 'uppercase' }}
                                >
                                    National Spending by category
                            </Divider>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row centered>
                            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                                <UserAgePieChart />
                            </Grid.Column>
                            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                                <UserLocationPieChart />
                            </Grid.Column>

                            {this.props.children === "Yes" ?
                                <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                                    <UserChildrenPieChart />
                                </Grid.Column>
                                : ""}


                        </Grid.Row>
                        <Grid.Row centered>
                            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                                < NationalStatsBarGraph />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>



                </div>
                : ""
        )

    }
}

const mapStateToProps = (state) => {
    return {
        children: state.userChildren,
        age: state.userAge,
        location: state.userLocation
    }
}


{/* <Redirect to={{
                    pathname: '/Questionnaire',
                    state: { error: "Please fill in this form to continue" }
                }} */}

// />


export default connect(mapStateToProps, null)(NationalCharts)