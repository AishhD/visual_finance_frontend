import React from 'react';
import 'c3/c3.css';
import NatationalStatsPieChart from "./NatationalStatsPieChart"
import { connect } from 'react-redux'

class UserLocationPieChart extends React.Component {

    render() {
        return (
            <div >
                {this.props.userLocationData["city_name"] === "London" || this.props.userLocationData["city_name"] === "Yorkshire and The Humber" ?
                    <NatationalStatsPieChart userData={this.props.userLocationData} title={"Average spending for people in " + this.props.userLocationData["city_name"]} />
                    :
                    <NatationalStatsPieChart userData={this.props.userLocationData} title={"Average spending for people in the " + this.props.userLocationData["city_name"]} />}
            </div >
        )
    }
}
const mapStateToProps = (state) => {
    return {
        userLocationData: state.userLocationData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(UserLocationPieChart)