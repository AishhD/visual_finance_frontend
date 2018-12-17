import React from 'react';
import { connect } from "react-redux";
import updateUserAge from "../actions/updateUserAge";
import * as adapter from "../Adapter.js";
import updateAllAgeGroups from '../actions/updateAllAgeGroups';
import { Form } from 'semantic-ui-react'


class AgeGroup extends React.Component {

    state = {
        allAgeGroups: []
    }

    componentDidMount() {
        adapter.getAgeGroups()
            .then(allAges => this.props.updateAllAgeGroups(allAges))
    }

    selectedAge = (event) => {
        console.log("in")
        console.log("age groups", this.props.allAgeGroups)
        let age = this.props.allAgeGroups.find(age => age["age_group"] === event.target.value)
        // return JSON.stringify(age[0])
        return age
    }

    render() {
        return (
            <div className="ui stackable center aligned page grid">
                <h1>Selct your age group</h1>
                <Form>
                    <Form.Field required>
                        {this.props.allAgeGroups ?
                            <select value={this.props.age} onChange={(event) => { this.props.updateUserAge(this.selectedAge(event)) }} name='age'>
                                {this.props.allAgeGroups.map(age =>
                                    < option value={age["age_group"]} key={age["age_group"]} > {age["age_group"]}</option>
                                )}
                            </select> :
                            "not done"}
                    </Form.Field>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    age: state.userAge,
    allAgeGroups: state.allAgeGroups
})

const mapDispatchToProps = (dispatch) => ({
    updateUserAge: (newAge) => { dispatch(updateUserAge(newAge)) },
    updateAllAgeGroups: (allAges) => { dispatch(updateAllAgeGroups(allAges)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(AgeGroup)