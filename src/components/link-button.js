import React from 'react'
import { withRouter } from 'react-router-dom'


export default withRouter(props => (
    <button onClick={() => props.history.push(props.to)}>
        {props.children}
    </button>
))