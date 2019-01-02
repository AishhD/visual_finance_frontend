import React from 'react'
import Questionnaire from './Questionnaire.js'
import LinkButton from './link-button'


import {
    Container,
    Segment,
} from 'semantic-ui-react'

const HomepageLayout = () => (
    <div>
        <Segment style={{ padding: '0em' }} vertical>
            <Questionnaire />
        </Segment>
        <Segment style={{ padding: '5em 0em' }} vertical>
            <Container text>
                <LinkButton size='large' to="/categoryGraphs">Submit</LinkButton>
            </Container>
        </Segment>
    </div>
)
export default HomepageLayout