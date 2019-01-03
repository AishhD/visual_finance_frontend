import React from 'react';
import updateUserSpendingFood from '../actions/updateUserSpendingFood';
import updateUserSpendingClothing from '../actions/updateUserSpendingClothing';
import updateUserSpendingEducation from '../actions/updateUserSpendingEducation';
import updateUserSpendingAlcohol from '../actions/updateUserSpendingAlcohol';
import updateUserSpendingHousehold from '../actions/updateUserSpendingHousehold';
import updateUserSpendingOther from '../actions/updateUserSpendingOther';
import updateUserSpendingRecreation from '../actions/updateUserSpendingRecreation';
import updateUserSpendingTransport from '../actions/updateUserSpendingTransport';
import updateUserSpendingResturants from '../actions/updateUserSpendingResturants';
import updateSpendingDataID from '../actions/updateSpendingDataID';
import { connect } from 'react-redux';
import { Segment, Container, } from 'semantic-ui-react';
import ValidatingSpendingQues from "./ValidatingSpendingQues"
import * as adapter from "../Adapter.js";


class SpendingQuestionnaire extends React.Component {

    redirectUserStats = () => {
        this.props.history.push('/SpendingQuestionnaire')
    }

    handleSubmit = (values) => {
        const { updateUserSpendingFood, updateUserSpendingAlcohol, updateUserSpendingClothing, updateUserSpendingEducation, updateUserSpendingHousehold, updateUserSpendingOther, updateUserSpendingRecreation, updateUserSpendingTransport, updateUserSpendingResturants } = this.props

        updateUserSpendingAlcohol(values.alcohol)
        updateUserSpendingClothing(values.clothing)
        updateUserSpendingEducation(values.education)
        updateUserSpendingFood(values.food)
        updateUserSpendingHousehold(values.household)
        updateUserSpendingOther(values.other)
        updateUserSpendingRecreation(values.recreation)
        updateUserSpendingResturants(values.resturants)
        updateUserSpendingTransport(values.transport)
        this.postRequest(values)
        this.props.history.push(`/SpendingQuestionnaire`)

    }


    postRequest(values) {

        const { updateSpendingDataID } = this.props
        const object = {
            alcoholic_drinks_tobacco_narcotics: values.alcohol,
            food_non_alcholic_drinks: values.food,
            clothing_footwear: values.clothing,
            household_bills: values.household,
            recreation_culture: values.recreation,
            education: values.education,
            resturants_hotels: values.resturants,
            transport: values.transport,
            other: values.other,
        }

        adapter.postSpendingData(object)
            .then(resp => updateSpendingDataID(resp.id))
    }

    render() {

        return (

            <div>


                {/* <p>{this.props.location.pathname}, {this.props.age}, {this.props.children}</p> */}
                <Segment raised >
                    <Container>
                        <h2>Weekly Spending</h2>
                        <ValidatingSpendingQues onSubmit={this.handleSubmit} />
                    </Container>
                </Segment>

            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userSpending: state.userSpending,
        errors: state.errors
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateUserSpendingFood: (spending) => dispatch(updateUserSpendingFood(spending)),
        updateUserSpendingClothing: (spending) => dispatch(updateUserSpendingClothing(spending)),
        updateUserSpendingEducation: (spending) => dispatch(updateUserSpendingEducation(spending)),
        updateUserSpendingAlcohol: (spending) => dispatch(updateUserSpendingAlcohol(spending)),
        updateUserSpendingHousehold: (spending) => dispatch(updateUserSpendingHousehold(spending)),
        updateUserSpendingOther: (spending) => dispatch(updateUserSpendingOther(spending)),
        updateUserSpendingRecreation: (spending) => dispatch(updateUserSpendingRecreation(spending)),
        updateUserSpendingTransport: (spending) => dispatch(updateUserSpendingTransport(spending)),
        updateUserSpendingResturants: (spending) => dispatch(updateUserSpendingResturants(spending)),
        updateSpendingDataID: (id) => dispatch(updateSpendingDataID(id)),
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(SpendingQuestionnaire)