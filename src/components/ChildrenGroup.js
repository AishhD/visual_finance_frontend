import React from 'react';
import { connect } from 'react-redux';
import updateUserChildren from "../actions/updateUserChildren";
import updateChildrenData from "../actions/updateChildrenData"
import * as adapter from "../Adapter.js";
import updateUserChildrenData from '../actions/updateUserChildrenData'
import { Form, Dropdown } from 'semantic-ui-react'


class ChildrenGroup extends React.Component {


    componentDidMount() {
        adapter.getChildrenData()
            .then(childrenData => this.props.updateChildrenData(childrenData))
    }

    // selectedChildren = (event) => {
    //     (event === "yes") ? "yes" : "no"
    // }

    render() {
        let options = [{
            "text": "Yes",
            "value": "Yes"
        },
        {
            "text": "No",
            "value": "No"
        }]
        return (

            <div className="ui stackable center aligned page grid">
                <h1>Do you have any children?</h1>
                {(this.props.childrenData) ?
                    <Form>
                        <Form.Field required>
                            <Dropdown placeholder='Select Children' fluid selection onChange={(event, data) => { this.props.updateUserChildren(data.value) }} options={options} />
                        </Form.Field>
                    </Form>
                    : "Please wait"}
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
    updateChildrenData: (childrenData) => { dispatch(updateChildrenData(childrenData)) },
    updateUserChildrenData: (userChildrenData) => { dispatch(updateUserChildrenData(userChildrenData)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(ChildrenGroup)