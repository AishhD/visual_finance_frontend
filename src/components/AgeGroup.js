import React from 'react';
import { connect } from "react-redux";
import updateUserAge from "../actions/updateUserAge";
import * as adapter from "../Adapter.js";


class AgeGroup extends React.Component {

    state = {
        allAgeGroups: []
    }

    componentDidMount() {
        adapter.getAgeGroups()
            .then(age => this.setState({ allAgeGroups: age }))
    }

    selectedage = (event) => {
        let age = this.state.allAgeGroups.filter(age => age["age_group"] === event.target.value)
        // return JSON.stringify(age[0])
        return age
    }

    render() {
        return (
            <div className="ui stackable center aligned page grid">
                <h1>Selct your age group</h1>
                {this.state.allAgeGroups[0] ?
                    <select value={this.props.age} onChange={(event) => { this.props.updateUserAge(this.selectedage(event)) }} name='age'>
                        {this.state.allAgeGroups.map(age =>
                            < option value={age["age_group"]} key={age["age_group"]} > {age["age_group"]}</option>
                        )}
                        {/* <option selected disabled>Select age group</option> */}
                        <option value="Less than 30">Less than 30</option>
                        <option value="30 to 49">30 to 49</option>
                        <option value="50 to 64">50 to 64</option>
                        <option value="65 to 74">65 to 74</option>
                        <option value="75 or over">75 or over</option>
                    </select> :
                    "not done"}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ age: state.userAge })

const mapDispatchToProps = (dispatch) => ({ updateUserAge: (newAge) => { dispatch(updateUserAge(newAge)) } })

export default connect(mapStateToProps, mapDispatchToProps)(AgeGroup)