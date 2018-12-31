import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Questionnaire from './Questionnaire.js'
import NationalCharts from './NationalCharts'
import LinkButton from './link-button'

import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    List,
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
                    <a href='#'>Compare your spendings</a>
                </Divider>
                <LinkButton size='large' to="/SpendingQuestionnaire">Submit</LinkButton>
            </Container>
        </Segment>
    </div>
)
export default HomepageLayout