import React from 'react'
import NationalCharts from './NationalCharts'
import LinkButton from './link-button'

import {

    Container,
    Divider,
    Segment,
} from 'semantic-ui-react'


const HomepageLayout = () => (
    <div>
        <Segment style={{ padding: '0em' }} vertical>
            <NationalCharts />
        </Segment>
        <Segment style={{ padding: '8em 0em' }} vertical>
            <Container text>
                <Divider
                    as='h4'
                    className='header'
                    horizontal
                    style={{ margin: '3em 0em', textTransform: 'uppercase' }}
                >
                    Compare your spendings
                </Divider>
                <LinkButton size='large' to="/SpendingQuestionnaire">Submit</LinkButton>
            </Container>
        </Segment>
    </div>
)
export default HomepageLayout