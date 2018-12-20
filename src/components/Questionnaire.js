import React from 'react';
import AgeGroup from './AgeGroup';
import ChildrenGroup from './ChildrenGroup';
import LocationGroup from './LocationGroup';
import { sendFiltersAction } from '../actions/sendFiltersAction';
import { connect } from 'react-redux';
import LinkButton from './link-button'
import { Segment, Container, Grid } from 'semantic-ui-react'



class Questionnaire extends React.Component {

    selectHandler = (event) => {
        let value = event.target.value;

        (event.target.name === 'children' && value === 'Yes') && (value = true);
        (event.target.name === 'children' && value === 'No') && (value = false);

        this.setState({
            filters: {
                ...this.state.filters,
                [event.target.name]: value
            },
        })
    }

    onSubmit = () => {
        // console.log(this.props)
        // this.props.saveFilters(this.state.filters)

        // fetch(url)
        //     .then(resp => resp.json())
        //     .then(data => {
        //         this.props.storeData(data)
        //     })

    }


    handleError() {
        return <h1>{this.props.location.state.error}</h1>
    }

    render() {

        return (
            <div>

                <div className="ui stackable center aligned page grid">

                    {/* <p>{this.props.location.pathname}, {this.props.age}, {this.props.children}</p> */}
                    <Segment raised style={{ marginTop: '15em' }}>
                        <Container>
                            {/* <h1>{this.props.location.state.error}</h1> */}
                            <Grid>
                                <Grid.Row centered>
                                    <Grid.Column >
                                        <h1 className="ui centered header">Fill in your details</h1>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row centered>
                                    <Grid.Column >
                                        <AgeGroup />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row centered>
                                    <Grid.Column >
                                        <LocationGroup />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row centered>
                                    <Grid.Column >
                                        <ChildrenGroup />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row centered>
                                    <Grid.Column >
                                        {/* <Button onClick={this.onSubmit}>Submit</Button> */}
                                        <LinkButton to="/NationalCharts">Submit</LinkButton>
                                        {/* <Button to="/NationalCharts">Submit</Button> */}
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Container>
                    </Segment>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        filterData: state.filterData,
        age: state.userAge
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveFilters: (filters) => dispatch(sendFiltersAction(filters))
        // storeData: (data) => dispatch(storeFetchedData(data))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Questionnaire)