import React from 'react';
import { connect } from "react-redux";
import updateUserAge from "../actions/updateUserAge";
import updateUserAgeData from "../actions/updateUserAgeData";
import * as adapter from "../Adapter.js";
import updateAllAgeGroups from '../actions/updateAllAgeGroups';
import { Form, Dropdown } from 'semantic-ui-react'


class AgeGroup extends React.Component {

    componentDidMount() {
        adapter.getAgeGroups()
            .then(allAges => this.props.updateAllAgeGroups(allAges))
    }

    userAgeData(age) {
        this.props.updateUserAgeData(age)
    }

    selectedAge = (event, data) => {
        const age = this.props.allAgeGroups.find(age => age["age_group"] === data.value);
        this.userAgeData(age)
        return age["age_group"]
    }


    render() {
        let options = []
        const ageGroupsHandler = () => {
            this.props.allAgeGroups.forEach(ageGroup => {
                let option = {};

                option.text = ageGroup.age_group
                option.value = ageGroup.age_group

                options.push(option);
            })
        }
        if (this.props.allAgeGroups) ageGroupsHandler()
        return (
            <div className="ui stackable center aligned page grid">
                <h1>Select your age group</h1>
                {(this.props.allAgeGroups) ?
                    <Form>
                        <Form.Field required>
                            <Dropdown placeholder='Select Friend' fluid selection onChange={(event, data) => { this.props.updateUserAge(this.selectedAge(event, data)) }} options={options} />
                            {/* <select value={this.props.age} onChange={(event) => { this.props.updateUserAge(this.selectedAge(event)) }} name='age'>
                                {this.props.allAgeGroups.map(age =>
                                    < option value={age["age_group"]} key={age["age_group"]} > {age["age_group"]}</option>
                                )} */}
                            {/* </select>  */}

                        </Form.Field>
                    </Form>
                    : "Please wait"}
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
    updateUserAgeData: (newAgeData) => { dispatch(updateUserAgeData(newAgeData)) },
    updateAllAgeGroups: (allAges) => { dispatch(updateAllAgeGroups(allAges)) },

})

export default connect(mapStateToProps, mapDispatchToProps)(AgeGroup)