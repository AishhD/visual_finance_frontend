import React from 'react';
import LinkButton from './link-button'
import * as adapter from "../Adapter.js";

export default class HomePage extends React.Component {

    componentDidMount() {
        adapter.api()
            .then(resp => console.log(resp))
    }

    render() {
        return (
            <div>

            </div >
        )
    }
}


