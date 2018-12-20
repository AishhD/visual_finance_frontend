import React from 'react';
import AgeGroup from './AgeGroup';
import ChildrenGroup from './ChildrenGroup';
import LocationGroup from './LocationGroup';
import updateUserSpendingFood from '../actions/updateUserSpendingFood';
import updateUserSpendingClothing from '../actions/updateUserSpendingClothing';
import updateUserSpendingEducation from '../actions/updateUserSpendingEducation';
import updateUserSpendingAlcohol from '../actions/updateUserSpendingAlcohol';
import updateUserSpendingHousehold from '../actions/updateUserSpendingHousehold';
import updateUserSpendingOther from '../actions/updateUserSpendingOther';
import updateUserSpendingRecreation from '../actions/updateUserSpendingRecreation';
import updateUserSpendingTransport from '../actions/updateUserSpendingTransport';
import updateUserSpendingResturants from '../actions/updateUserSpendingResturants';
import { connect } from 'react-redux';
import LinkButton from './link-button'
import { Segment, Container, Form, Input, Button, Icon, Label, Image } from 'semantic-ui-react'
import InputSection from './SpendingCategoriesForm'



class SpendingQuestionnaire extends React.Component {


    render() {

        const { updateUserSpendingFood, updateUserSpendingAlcohol, updateUserSpendingClothing, updateUserSpendingEducation, updateUserSpendingHousehold, updateUserSpendingOther, updateUserSpendingRecreation, updateUserSpendingTransport, updateUserSpendingResturants } = this.props
        return (

            <div>

                <div className="ui stackable center aligned page grid">

                    {/* <p>{this.props.location.pathname}, {this.props.age}, {this.props.children}</p> */}
                    <Segment raised style={{ marginTop: '15em' }}>
                        <Container>
                            <h2>Weekly Spending</h2>
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
                                        content='Confirm'
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
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(SpendingQuestionnaire)