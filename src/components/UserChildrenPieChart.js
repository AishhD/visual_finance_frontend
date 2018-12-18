import React from 'react';
import 'c3/c3.css';
import UserPieChart from "./UserPieChart"
import { connect } from 'react-redux'

class UserChildrenPieChart extends React.Component {

    render() {
        console.log("child", this.props.childrenData)
        return (
            <div >
                <h1> Location</h1>
                <UserPieChart userData={this.props.childrenData} />
            </div >
        )
    }
}
const mapStateToProps = (state) => {
    return {
        childrenData: state.childrenData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(UserChildrenPieChart)