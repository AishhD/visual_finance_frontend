import React from 'react';
import { connect } from 'react-redux';
import updateUserChildren from "../actions/updateUserChildren";


class ChildrenGroup extends React.Component {

    render() {
        return (
            <div className="ui stackable center aligned page grid">
                <h1>Select your children group</h1>
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
    children: state.userChildren
})

const mapDispatchToProps = (dispatch) => ({ updateUserChildren: (children) => { dispatch(updateUserChildren(children)) } })

export default connect(mapStateToProps, mapDispatchToProps)(ChildrenGroup)