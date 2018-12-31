import React from 'react';
import AgeGroup from './AgeGroup';
import ChildrenGroup from './ChildrenGroup';
import LocationGroup from './LocationGroup';
import { sendFiltersAction } from '../actions/sendFiltersAction';
import { connect } from 'react-redux';
import LinkButton from './link-button'
import { Divider, Grid } from 'semantic-ui-react'



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

                {/* <p>{this.props.location.pathname}, {this.props.age}, {this.props.children}</p> */}

                {/* <h1>{this.props.location.state.error}</h1> */}
                <Grid celled='internally' columns='equal' stackable >
                    <Grid.Row centered>
                        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                            <Divider
                                as='h3'
                                className='header'
                                horizontal
                                style={{ margin: '1em 0em', textTransform: 'uppercase' }}
                            >
                                Fill in your details
                            </Divider>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row centered>
                        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                            <AgeGroup />
                        </Grid.Column>
                        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                            <LocationGroup />
                        </Grid.Column>
                        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                            <ChildrenGroup />
                        </Grid.Column>
                    </Grid.Row>
                    {/* <Grid.Row centered>
                        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}> */}
                    {/* <Button onClick={this.onSubmit}>Submit</Button> */}
                    {/* <LinkButton to="/NationalCharts">Submit</LinkButton> */}
                    {/* <Button to="/NationalCharts">Submit</Button> */}
                    {/* </Grid.Column>
                    </Grid.Row> */}
                </Grid>

            </div >
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