import React from 'react'

import {
    Container,
    Grid,
    Header,
    Segment,
} from 'semantic-ui-react'

const HomepageLayout = () => (
    <div>
        <Segment inverted vertical style={{ padding: '2.5em 0em' }}>
            <Container>
                <Grid inverted >
                    <Grid.Row>
                        <Grid.Column width={5}>
                            <Grid.Column >
                                <Header as='h4' inverted>
                                    World data source:
                                 </Header>
                                <a href="https://data.worldbank.org/indicator/NE.CON.PRVT.PC.KD">The World Bank</a>
                            </Grid.Column>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <Grid.Column >
                                <Header as='h4' inverted>
                                    UK data source:
                                 </Header>
                                <a href="https://www.ons.gov.uk/peoplepopulationandcommunity/personalandhouseholdfinances/expenditure/bulletins/familyspendingintheuk/financialyearending2017">Office for National Statistics</a>
                            </Grid.Column>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <Grid.Column >
                                <Header as='h4' inverted>
                                    Image source:
                                 </Header>
                                <a href="http://i2.wp.com/www.gisresources.com/wp-content/uploads/2017/11/UK_map1.png?resize=260%2C300">gisresources</a>
                            </Grid.Column>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    </div >

)
export default HomepageLayout