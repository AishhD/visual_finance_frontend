import React from 'react';
import 'c3/c3.css';
import UserPieChart from "./UserPieChart"
import { connect } from 'react-redux'

class UserLocationPieChart extends React.Component {

    render() {
        return (
            <div >
                <UserPieChart userData={this.props.userLocationData} title={this.props.userLocationData["city_name"]} />
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