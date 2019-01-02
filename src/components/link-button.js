import React from 'react'
import { withRouter } from 'react-router-dom'


export default withRouter(props => (
    <button className={'btn-medium'} onClick={() => {
        window.scrollTo(0, 0);
        props.history.push(props.to)
    }
    }>
        {props.children}
    </button>
))