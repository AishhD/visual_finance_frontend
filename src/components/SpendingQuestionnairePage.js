import React from 'react'
import SpendingQuestionnaire from './SpendingQuestionnaire.js'

import {
    Segment,
} from 'semantic-ui-react'

const HomepageLayout = () => (
    <Segment style={{ padding: '5em 0em' }} vertical>
        <SpendingQuestionnaire />
    </Segment>
)
export default HomepageLayout