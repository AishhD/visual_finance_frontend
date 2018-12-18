import React from 'react';
import C3Chart from 'react-c3js';
import 'c3/c3.css';
import { connect } from 'react-redux'

class NatationalStatsPieChart extends React.Component {

    render() {
        const data = {
            columns: [
                [
                    this.props.userLocationData["city_name"] === "London" || this.props.userLocationData["city_name"] === "Yorkshire and The Humber" ?
                        "Average spending breakdown for people in " + this.props.userLocationData["city_name"]
                        :
                        "Average spending breakdown for people in the " + this.props.userLocationData["city_name"]
                    , -30, 200, 200, 400, -150, 250],
                [this.props.userAgeData["age_group"] === "less than 30" ?
                    "Average spending breakdown for people " + this.props.userAgeData["age_group"] + " year olds"
                    :
                    "Average spending breakdown for " + this.props.userAgeData["age_group"] + " year olds", 130, 100, -100, 200, -150, 50],
                (this.props.children === "Yes") ? ["Average spending breakdown for people with children", -230, 200, 200, -300, 250, 250] : ""
            ],
            type: 'bar',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        };

        const title = {
            text: "Average Spending breakdown by category"
        }

        const axis = {
            x: {
                type: 'category',
                categories: ['cat1', 'cat2', 'cat3']
            }
        }

        return (
            <div >
                <div id="chart">
                    <C3Chart data={data} title={title} axis={axis} />
                </div>
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userLocationData: state.userLocationData,
        userAgeData: state.userAgeData,
        children: state.userChildren,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(NatationalStatsPieChart)