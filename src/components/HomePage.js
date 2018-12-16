import React from 'react';
import LinkButton from './link-button'

export default class HomePage extends React.Component {

    pageView = () => {
        return (
            // {/* <Button className="ui white button" onClick={this.handleClick}>Enter</Button> */}
            <div></div>
        )
    }

    render() {
        return (
            <div>
                <LinkButton to="/Questionnaire">Enter</LinkButton>
            </div >
        )
    }
}