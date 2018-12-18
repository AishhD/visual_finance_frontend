import React from 'react';
import 'c3/c3.css';
import NatationalStatsPieChart from "./NatationalStatsPieChart"
import { connect } from 'react-redux'

class UserChildrenPieChart extends React.Component {

    render() {
        return (
            <div >
                <NatationalStatsPieChart userData={this.props.childrenData} title={"Average spending for people with children"} />
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