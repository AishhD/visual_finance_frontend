import React from 'react';
import 'c3/c3.css';
import UserPieChart from "./UserPieChart"
import { connect } from 'react-redux'

class UserLocationPieChart extends React.Component {

    render() {
        return (
            <div >
                <h1> Location</h1>
                <UserPieChart userData={this.props.userLocationData} />
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