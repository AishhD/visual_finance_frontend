import PropTypes from 'prop-types'
import React, { Component } from 'react'
import LinkButton from './link-button'
import {
    Button,
    Container,
    Grid,
    Header,
    Menu,
    Responsive,
    Segment,
    Visibility,
} from 'semantic-ui-react'
import Map from './Map.js'




const HomepageLayout = () => (
    <div>
        <Segment style={{ padding: '8em 0em' }} vertical>
            <Grid container stackable verticalAlign='middle'>
                <Grid.Row>
                    <Grid.Column>
                        <Map />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
        <Segment style={{ padding: '8em 0em' }} vertical>
            <Container text>
                <Header as='h3' style={{ fontSize: '2em' }}>
                    Average household spending (UK)
        </Header>
                <p style={{ fontSize: '1.33em' }}>
                    Comparision of the UK household spending by age, location and whether or not they have children.
                </p>
                <LinkButton size='large' to="/category">Compare</LinkButton>
            </Container>
        </Segment>
    </div>

)
export default HomepageLayout