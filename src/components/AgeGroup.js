import React from 'react';
import { connect } from "react-redux"
import updateUserAge from "../actions/updateUserAge"


class AgeGroup extends React.Component {


    render() {
        return (
            <div className="ui stackable center aligned page grid">
                <h1>Selct your age group</h1>
                <select value={this.props.age} onChange={(event) => { this.props.updateUserAge(event.target.value) }} name='age'>
                    {/* <option selected disabled>Select age group</option> */}
                    <option value="Less than 30">Less than 30</option>
                    <option value="30 to 49">30 to 49</option>
                    <option value="50 to 64">50 to 64</option>
                    <option value="65 to 74">65 to 74</option>
                    <option value="75 or over">75 or over</option>
                </select>
            </div>
        )
    }



}

const mapStateToProps = (state) => ({ age: state.userAge })

const mapDispatchToProps = (dispatch) => ({ updateUserAge: (newAge) => { dispatch(updateUserAge(newAge)) } })

export default connect(mapStateToProps, mapDispatchToProps)(AgeGroup)