import React from 'react';
import 'c3/c3.css';
import LinkButton from './link-button'
import { connect } from 'react-redux'
import UserAgePieChart from './UserAgePieChart'
import UserLocationPieChart from './UserLocationPieChart'
import UserChildrenPieChart from './UserChildrenPieChart'
import { Redirect } from 'react-router-dom'


class NationalCharts extends React.Component {


    render() {
        const { children, age, location } = this.props

        return (
            children && age && location ?
                <div >
                    <h1>National Spending by category</h1>
                    <div id="chart">
                        <UserAgePieChart />
                    </div>
                    <div id="chart">
                        <UserLocationPieChart />
                    </div>
                    {this.props.children === "Yes" ?
                        <div id="chart">
                            <UserChildrenPieChart />
                        </div> : ""}
                    <LinkButton to="/Login">Sign up to compare your spending</LinkButton>
                </div>
                :
                <Redirect to={{
                    pathname: '/Questionnaire',
                    state: { error: "Please fill in this form to continue" }
                }}
                />
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



export default connect(mapStateToProps, null)(NationalCharts)