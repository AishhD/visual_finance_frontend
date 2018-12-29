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
import updateErrors from '../actions/updateErrors';
import { connect } from 'react-redux';
import { Segment, Container, } from 'semantic-ui-react';
import ValidatingSpendingQues from "./ValidatingSpendingQues"
import * as adapter from "../Adapter.js";


class SpendingQuestionnaire extends React.Component {

    redirectUserStats = () => {
        this.props.history.push('/UserStats')
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
        this.postRequest()
        this.props.history.push(`/UserStats`)

    }


    postRequest() {
        const { userSpending } = this.props
        const object = {
            alcoholic_drinks_tobacco_narcotics: userSpending["spending_category"]["food_non_alcholic_drinks"],
            food_non_alcholic_drinks: userSpending["spending_category"]["alcoholic_drinks_tobacco_narcotics"],
            clothing_footwear: userSpending["spending_category"]["clothing_footwear"],
            household_bills: userSpending["spending_category"]["household_bills"],
            recreation_culture: userSpending["spending_category"]["recreation_culture"],
            education: userSpending["spending_category"]["education"],
            resturants_hotels: userSpending["spending_category"]["resturants_hotels"],
            transport: userSpending["spending_category"]["transport"],
            other: userSpending["spending_category"]["other"],
        }

        adapter.postSpendingData(object)
            .then(resp => console.log(resp))
    }

    render() {

        return (

            <div>

                <div className="ui stackable center aligned page grid">
                    {/* <p>{this.props.location.pathname}, {this.props.age}, {this.props.children}</p> */}
                    <Segment raised style={{ marginTop: '15em' }}>
                        <Container>
                            <h2>Weekly Spending</h2>
                            <ValidatingSpendingQues onSubmit={this.handleSubmit} />
                        </Container>
                    </Segment>
                </div>
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
        updateErrors: (errors) => dispatch(updateErrors(errors)),
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(SpendingQuestionnaire)