import React from 'react';
import LinkButton from './link-button'

export default class HomePage extends React.Component {
    state = {
        clicked: false
    }
    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    pageView = () => {
        return (
            // {/* <Button className="ui white button" onClick={this.handleClick}>Enter</Button> */}
            <div></div>
        )
    }

    render() {
        return (
            <div>
                <LinkButton to="/AgeQuestionnaire">Submit</LinkButton>
            </div >
        )
    }
}