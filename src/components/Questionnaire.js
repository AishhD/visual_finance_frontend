import React from 'react';
import { Button } from 'semantic-ui-react'
import AgeGroup from './AgeGroup';
import ChildrenGroup from './ChildrenGroup';
import LocationGroup from './LocationGroup';
import { sendFiltersAction } from '../actions/sendFiltersAction';
import { connect } from 'react-redux';

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

    render() {
        return (
            <div className="ui stackable center aligned page grid">
                <p>{this.props.location.pathname}, {this.props.age}, {this.props.children}</p>
                <h1>Fill in your details</h1>
                <AgeGroup />
                <LocationGroup onLocationChange={this.selectHandler} />
                <ChildrenGroup onChildrenChange={this.selectHandler} />
                <Button onClick={this.onSubmit}>Submit</Button>
                {/* <LinkButton to="/NationalCharts">Submit</LinkButton> */}
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