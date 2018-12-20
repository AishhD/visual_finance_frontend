import React from 'react';
import AgeGroup from './AgeGroup';
import ChildrenGroup from './ChildrenGroup';
import LocationGroup from './LocationGroup';
import updateUserSpendingFood from '../actions/updateUserSpendingFood';
import { connect } from 'react-redux';
import LinkButton from './link-button'
import { Segment, Container, Form, Input, Button, Icon, Label, Image } from 'semantic-ui-react'



class SpendingQuestionnaire extends React.Component {


    render() {
        const { updateUserSpendingFood } = this.props
        return (

            <div>

                <div className="ui stackable center aligned page grid">

                    {/* <p>{this.props.location.pathname}, {this.props.age}, {this.props.children}</p> */}
                    <Segment raised style={{ marginTop: '15em' }}>
                        <Container>
                            <h2>Weekly Spending</h2>
                            <Form >

                                <Form.Group widths='equal'>
                                    <Form.Field

                                        control={Input}
                                        label='Food & non-alcholic drinks'
                                        placeholder="£"
                                        onChange={event => updateUserSpendingFood(event.target.value)}
                                    />

                                    <Form.Field
                                        control={Input}
                                        label='Alcoholic drinks, tobacco & narcotics'
                                        placeholder="£"
                                    />
                                </Form.Group>
                                <Form.Group widths='equal'>
                                    <Form.Field
                                        control={Input}
                                        label='Household and bills'
                                        placeholder="£"
                                    />
                                    <Form.Field
                                        control={Input}
                                        label='Transport'
                                        placeholder="£"
                                    />
                                </Form.Group>
                                <Form.Group widths='equal'>
                                    <Form.Field
                                        control={Input}
                                        label='Resturants & Hotels'
                                        placeholder="£"
                                    />
                                    <Form.Field
                                        control={Input}
                                        label='Clothing & footwear'
                                        placeholder="£"
                                    />
                                </Form.Group>
                                <Form.Group widths='equal'>
                                    <Form.Field
                                        control={Input}
                                        label='Reacreation & Culture'
                                        placeholder="£"
                                    />
                                    <Form.Field
                                        control={Input}
                                        label='Education'
                                        placeholder="£"
                                    />
                                </Form.Group>
                                <Form.Group widths='equal'>
                                    <Form.Field
                                        control={Input}
                                        label='Other'
                                        placeholder="£"
                                    />
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
        updateUserSpendingFood: (spending) => dispatch(updateUserSpendingFood(spending))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(SpendingQuestionnaire)