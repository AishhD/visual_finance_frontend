import PropTypes from 'prop-types'
import React, { Component } from 'react'
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

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
    <Container text>
        <Header
            as='h1'
            content='Visual Finance'
            inverted
            style={{
                fontSize: mobile ? '2em' : '4em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: mobile ? '1.5em' : '3em',
            }}
        />
        <Header
            as='h2'
            content='Compare household spending.'
            inverted
            style={{
                fontSize: mobile ? '1.5em' : '1.7em',
                fontWeight: 'normal',
                marginTop: mobile ? '0.5em' : '1.5em',
            }}
        />
    </Container>
)

HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
}


class DesktopContainer extends Component {
    state = {}

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })

    render() {
        const { children } = this.props
        const { fixed } = this.state

        return (
            <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                <Visibility
                    once={false}
                    onBottomPassed={this.showFixedMenu}
                    onBottomPassedReverse={this.hideFixedMenu}
                >
                    <Segment
                        inverted
                        textAlign='center'
                        style={{ minHeight: 700, padding: '1em 0em' }}
                        vertical
                    >
                        <Menu
                            fixed={fixed ? 'top' : null}
                            inverted={!fixed}
                            pointing={!fixed}
                            secondary={!fixed}
                            size='large'
                        >
                            <Container>
                                <Menu.Item as='a' active>
                                    Home
                </Menu.Item>
                                {/* <Menu.Item as='a'>Work</Menu.Item>
                                <Menu.Item as='a'>Company</Menu.Item>
                                <Menu.Item as='a'>Careers</Menu.Item> */}
                                <Menu.Item position='right'>
                                    <Button as='a' inverted={!fixed}>
                                        Log in
                  </Button>
                                    <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                                        Sign Up
                  </Button>
                                </Menu.Item>
                            </Container>
                        </Menu>
                        <HomepageHeading />
                    </Segment>
                </Visibility>

                {children}
            </Responsive>
        )
    }
}

DesktopContainer.propTypes = {
    children: PropTypes.node,
}

// class MobileContainer extends Component {
//     state = {}

//     handleSidebarHide = () => this.setState({ sidebarOpened: false })

//     handleToggle = () => this.setState({ sidebarOpened: true })

//     render() {
//         const { children } = this.props
//         const { sidebarOpened } = this.state

//         return (
//             <Responsive as={Sidebar.Pushable} maxWidth={Responsive.onlyMobile.maxWidth}>
//                 <Sidebar
//                     as={Menu}
//                     animation='push'
//                     inverted
//                     onHide={this.handleSidebarHide}
//                     vertical
//                     visible={sidebarOpened}
//                 >
//                     <Menu.Item as='a' active>
//                         Home
//           </Menu.Item>
//                     <Menu.Item as='a'>Work</Menu.Item>
//                     <Menu.Item as='a'>Company</Menu.Item>
//                     <Menu.Item as='a'>Careers</Menu.Item>
//                     <Menu.Item as='a'>Log in</Menu.Item>
//                     <Menu.Item as='a'>Sign Up</Menu.Item>
//                 </Sidebar>

//                 <Sidebar.Pusher dimmed={sidebarOpened}>
//                     <Segment
//                         inverted
//                         textAlign='center'
//                         style={{ minHeight: 350, padding: '1em 0em' }}
//                         vertical
//                     >
//                         <Container>
//                             <Menu inverted pointing secondary size='large'>
//                                 <Menu.Item onClick={this.handleToggle}>
//                                     <Icon name='sidebar' />
//                                 </Menu.Item>
//                                 <Menu.Item position='right'>
//                                     <Button as='a' inverted>
//                                         Log in
//                   </Button>
//                                     <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
//                                         Sign Up
//                   </Button>
//                                 </Menu.Item>
//                             </Menu>
//                         </Container>
//                         <HomepageHeading mobile />
//                     </Segment>

//                     {children}
//                 </Sidebar.Pusher>
//             </Responsive>
//         )
//     }
// }

// MobileContainer.propTypes = {
//     children: PropTypes.node,
// }

const ResponsiveContainer = ({ children }) => (
    <div>
        <DesktopContainer>{children}</DesktopContainer>
        {/* <MobileContainer>{children}</MobileContainer> */}
    </div>
)

ResponsiveContainer.propTypes = {
    children: PropTypes.node,
}

const HomepageLayout = () => (
    <ResponsiveContainer>
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
                    Find out about the UK weekly Spending
        </Header>
                <p style={{ fontSize: '1.33em' }}>
                    Comparision of the UK household spending by age, location and whether or not they have children.
                </p>
                <Button as='a' size='large'>
                    Compare
                </Button>
            </Container>
        </Segment>
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
            <Container>
                <Grid divided inverted stackable>
                    <Grid.Row>
                        <Grid.Column >
                            <Header as='h4' inverted>
                                Data source:
              </Header>
                            <a href="https://data.worldbank.org/indicator/NE.CON.PRVT.PC.KD">The World Bank</a>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    </ResponsiveContainer>
)
export default HomepageLayout