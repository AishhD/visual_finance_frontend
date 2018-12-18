import React from 'react';
import 'c3/c3.css';
import UserPieChart from "./UserPieChart"
import { connect } from 'react-redux'

class UserChildrenPieChart extends React.Component {

    render() {
        return (
            <div >
                <UserPieChart userData={this.props.childrenData} title={this.props.childrenData["children"]} />
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