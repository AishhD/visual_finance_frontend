import React from 'react';
import 'c3/c3.css';
import LinkButton from './link-button'
import { connect } from 'react-redux'
import UserAgePieChart from './UserAgePieChart'
import UserLocationPieChart from './UserLocationPieChart'
import UserChildrenPieChart from './UserChildrenPieChart'


class NationalCharts extends React.Component {


    render() {

        return (
            <div >
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
                <LinkButton to="/Login">Sign Up</LinkButton>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        children: state.userChildren
    }
}


const mapDispatchToProps = (dispatch) => {

}
export default connect(mapStateToProps, mapDispatchToProps)(NationalCharts)