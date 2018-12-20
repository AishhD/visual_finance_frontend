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
import { Segment, Container, Form, Button } from 'semantic-ui-react'
import InputSection from './SpendingCategoriesForm'




class SpendingQuestionnaire extends React.Component {

    redirectUserStats = () => {
        this.props.history.push('/UserStats')
    }

    render() {

        const { updateUserSpendingFood, updateUserSpendingAlcohol, updateUserSpendingClothing, updateUserSpendingEducation, updateUserSpendingHousehold, updateUserSpendingOther, updateUserSpendingRecreation, updateUserSpendingTransport, updateUserSpendingResturants, userSpending, updateErrors, errors } = this.props
        return (

            <div>

                <div className="ui stackable center aligned page grid">
                    {/* <p>{this.props.location.pathname}, {this.props.age}, {this.props.children}</p> */}
                    <Segment raised style={{ marginTop: '15em' }}>
                        <Container>
                            <h2>Weekly Spending</h2>
                            {errors ? <h4>{errors}</h4> : ""}
                            <Form >

                                <Form.Group widths='equal'>
                                    <InputSection label={"Food & non-alcholic drinks"} update={updateUserSpendingFood} />
                                    <InputSection label={"Alcoholic drinks, tobacco & narcotics"} update={updateUserSpendingAlcohol} />
                                </Form.Group>
                                <Form.Group widths='equal'>
                                    <InputSection label={"Household and bills"} update={updateUserSpendingHousehold} />
                                    <InputSection label={"Transport"} update={updateUserSpendingTransport} />
                                </Form.Group>
                                <Form.Group widths='equal'>
                                    <InputSection label={"Resturants & Hotels"} update={updateUserSpendingResturants} />
                                    <InputSection label={"Clothing & footwear"} update={updateUserSpendingClothing} />
                                </Form.Group>
                                <Form.Group widths='equal'>
                                    <InputSection label={"Recreation & Culture"} update={updateUserSpendingRecreation} />
                                    <InputSection label={"Education"} update={updateUserSpendingEducation} />
                                </Form.Group>
                                <Form.Group widths='equal'>
                                    <InputSection label={"Other"} update={updateUserSpendingOther} />
                                    <Form.Field
                                        control={Button}
                                        type="button"
                                        content='Confirm'
                                        onClick={e => userSpending["food_non_alcholic_drinks"] && userSpending["alcoholic_drinks_tobacco_narcotics"] && userSpending["household_bills"] && userSpending["transport"] && userSpending["resturants_hotels"] && userSpending["clothing_footwear"] && userSpending["education"] && userSpending["other"] ? this.props.history.push('/UserStats') : updateErrors("Please fill in all categories")}
                                    />
                                </Form.Group>

                            </Form>
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