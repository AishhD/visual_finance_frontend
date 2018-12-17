import React from 'react';
import { connect } from 'react-redux';
import updateUserChildren from "../actions/updateUserChildren";
import updateChildrenData from "../actions/updateChildrenData"
import * as adapter from "../Adapter.js";


class ChildrenGroup extends React.Component {


    componentDidMount() {
        adapter.getChildrenData()
            .then(childrenData => this.props.updateChildrenData(childrenData))
    }

    // selectedChildren = (event) => {
    //     (event === "yes") ? "yes" : "no"
    // }

    render() {
        return (
            <div className="ui stackable center aligned page grid">
                <h1>Do you have any children?</h1>
                <select onChange={(event) => { this.props.updateUserChildren(event.target.value) }} value={this.props.children}>
                    {/* <option selected disabled>Children</option> */}
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    children: state.userChildren,
    childrenData: state.childrenData
})

const mapDispatchToProps = (dispatch) => ({
    updateUserChildren: (children) => { dispatch(updateUserChildren(children)) },
    updateChildrenData: (childrenData) => { dispatch(updateChildrenData(childrenData)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(ChildrenGroup)