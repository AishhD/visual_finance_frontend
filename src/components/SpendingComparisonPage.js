import React from 'react'
import UserStats from './UserStats.js'
import AllQuestionnaire from './AllQuestionnaire.js'

import {
    Segment,
} from 'semantic-ui-react'

const HomepageLayout = () => (
    <Segment style={{ padding: '5em 0em' }} vertical>
        <AllQuestionnaire />
    </Segment>
)
export default HomepageLayout