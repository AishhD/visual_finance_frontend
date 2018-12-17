import React from 'react';
import { connect } from "react-redux";

class userStats extends React.Component {

    render() {
        return (
            <h1>logged in</h1>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(userStats)