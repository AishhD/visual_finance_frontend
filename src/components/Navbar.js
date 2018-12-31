// import React, { Component } from 'react'
// import { Menu } from 'semantic-ui-react'
// import { withRouter } from 'react-router-dom'

// class Navbar extends Component {
//     state = {}

//     handleItemClick = (e, { name }) => this.setState({ activeItem: name })

//     handleLoginClick = () => {
//         this.props.history.push(`/Login`)
//         // return <Redirect to='/Login' />
//     }



//     render() {
//         const { activeItem } = this.state

//         return (
//             <Menu>
//                 {/* <Menu.Menu position='left'>
//                     <Menu.Item name='Compare UK spending' active={activeItem === 'Compare UK spending'} onClick={this.handleItemClick}>
//                         <img src='https://media.giphy.com/media/Wif2BJsS56nEk/source.gif' alt="" />
//                     </Menu.Item>
//                 </Menu.Menu> */}
//                 <Menu.Menu position='right'>
//                     <Menu.Item name='Compare UK spending' active={activeItem === 'Compare UK spending'} onClick={this.handleItemClick}>
//                         Weekly UK spending
//                     </Menu.Item>

//                     <Menu.Item name='Login' active={activeItem === 'Login'} onClick={this.handleLoginClick}>
//                         Login
//                     </Menu.Item>
//                 </Menu.Menu>
//             </Menu>
//         )
//     }
// }

// export default withRouter(Navbar)

// https://media.giphy.com/media/Wif2BJsS56nEk/source.gif
// http://tampainternationalfilmfestival.com/assets/spinning-globe.gif

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
    Icon,
    Image,
    List,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
} from 'semantic-ui-react'

/* eslint-disable react/no-multi-comp */
/* Heads up! WebpageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const WebpageHeading = ({ mobile }) => (
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
        <br />
        <img src="http://i2.wp.com/www.gisresources.com/wp-content/uploads/2017/11/UK_map1.png?resize=260%2C300" alt="UK map" />
    </Container>
)

WebpageHeading.propTypes = {
    mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
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
                                <Menu.Item as='a'>Work</Menu.Item>
                                <Menu.Item as='a'>Company</Menu.Item>
                                <Menu.Item as='a'>Careers</Menu.Item>
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
                        <WebpageHeading />
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

class MobileContainer extends Component {
    state = {}

    handleSidebarHide = () => this.setState({ sidebarOpened: false })

    handleToggle = () => this.setState({ sidebarOpened: true })

    render() {
        const { children } = this.props
        const { sidebarOpened } = this.state

        return (
            <Responsive as={Sidebar.Pushable} maxWidth={Responsive.onlyMobile.maxWidth}>
                <Sidebar
                    as={Menu}
                    animation='push'
                    inverted
                    onHide={this.handleSidebarHide}
                    vertical
                    visible={sidebarOpened}
                >
                    <Menu.Item as='a' active>
                        Home
          </Menu.Item>
                    <Menu.Item as='a'>Work</Menu.Item>
                    <Menu.Item as='a'>Company</Menu.Item>
                    <Menu.Item as='a'>Careers</Menu.Item>
                    <Menu.Item as='a'>Log in</Menu.Item>
                    <Menu.Item as='a'>Sign Up</Menu.Item>
                </Sidebar>

                <Sidebar.Pusher dimmed={sidebarOpened}>
                    <Segment
                        inverted
                        textAlign='center'
                        style={{ minHeight: 350, padding: '1em 0em' }}
                        vertical
                    >
                        <Container>
                            <Menu inverted pointing secondary size='large'>
                                <Menu.Item onClick={this.handleToggle}>
                                    <Icon name='sidebar' />
                                </Menu.Item>
                                <Menu.Item position='right'>
                                    <Button as='a' inverted>
                                        Log in
                  </Button>
                                    <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                                        Sign Up
                  </Button>
                                </Menu.Item>
                            </Menu>
                        </Container>
                        <WebpageHeading mobile />
                    </Segment>

                    {children}
                </Sidebar.Pusher>
            </Responsive>
        )
    }
}

MobileContainer.propTypes = {
    children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
    <div>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
    </div>
)

ResponsiveContainer.propTypes = {
    children: PropTypes.node,
}

const Navbar = () => (
    <ResponsiveContainer>
    </ResponsiveContainer>
)
export default Navbar