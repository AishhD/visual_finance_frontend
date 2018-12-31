import React from 'react';
import 'c3/c3.css';
import { connect } from 'react-redux'
import NatationalStatsPieChart from "./NatationalStatsPieChart"

class UserAgePieChart extends React.Component {

    render() {
        return (
            <div >
                {this.props.userAgeData["age_group"] === "less than 30" ?
                    <NatationalStatsPieChart userData={this.props.userAgeData} title={"Average spending for people " + this.props.userAgeData["age_group"] + " year olds"} />
                    :
                    <NatationalStatsPieChart userData={this.props.userAgeData} title={"Average spending for " + this.props.userAgeData["age_group"] + " year olds"} />}
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userAgeData: state.userAgeData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(UserAgePieChart)