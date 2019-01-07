import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'


import {
    Button,
    Container,
    Header,
    Icon,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
} from 'semantic-ui-react'

const WebpageHeading = ({ mobile }) => (
    <Container text>
        <Header
            as='h1'
            content='Visual Finance'
            inverted
            className={'webpage-header'}
        />
        <br />
        <img src="https://i2.wp.com/www.gisresources.com/wp-content/uploads/2017/11/UK_map1.png?resize=260%2C300" alt="UK map" />
    </Container>
)

WebpageHeading.propTypes = {
    mobile: PropTypes.bool,
}

class DesktopContainer extends Component {
    state = {}

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })

    logout = () => {
        localStorage.removeItem("token");
        window.location.replace('/')
    }

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
                        className={'nav-container'}
                        vertical
                    >
                        <Menu
                            className={'nav-styling'}
                            fixed={fixed ? 'top' : null}
                            inverted={!fixed}
                            pointing={!fixed}
                            secondary={!fixed}
                        >
                            <Container>
                                {(!localStorage.getItem('token')) ?
                                    <div className={'ui-container'} >
                                        <Menu.Item as={Link}
                                            to="/"
                                            name="home" className={'item'} active>
                                            Home
                                        </Menu.Item>
                                        <Menu.Item as={Link}
                                            to="/category"
                                            name="category" className={'item'} >
                                            Category Comparsion
                                        </Menu.Item>
                                        <Menu.Item as={Link}
                                            to="/SpendingQuestionnaire"
                                            name="spending" className={'item'}>
                                            Compare Your Spending
                                        </Menu.Item>

                                        <Menu.Item position='right' >
                                            <Button inverted={!fixed} as={Link}
                                                to="/Login"
                                                name="home">
                                                Log in
                                        </Button>
                                            <Button inverted={!fixed} primary={fixed}
                                                className={"members-btn"} as={Link}
                                                to="/SignUp"
                                                name="home">
                                                Sign Up
                                        </Button>
                                        </Menu.Item>
                                    </div> :
                                    <Menu.Item position='right' >
                                        <Button inverted={!fixed} primary={fixed} className={"members-btn"} onClick={() => this.logout()}>
                                            Logout
                                        </Button>
                                    </Menu.Item>
                                }

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
                    <Menu.Item as={Link}
                        to="/"
                        name="home" active>
                        Home
          </Menu.Item>
                </Sidebar>

                <Sidebar.Pusher dimmed={sidebarOpened}>
                    <Segment
                        inverted
                        textAlign='center'
                        className={"mobile-sidebar"}
                        vertical
                    >
                        <Container>
                            <Menu inverted pointing secondary size='large'>
                                <Menu.Item onClick={this.handleToggle}>
                                    <Icon name='sidebar' />
                                </Menu.Item>
                                <Menu.Item position='right'>
                                    <Button inverted onClick={this.handleLoginClick} as={Link}
                                        to="/Login"
                                        name="login">
                                        Log in
                  </Button>
                                    <Button inverted className={'members-btn'} as={Link}
                                        to="/SignUp"
                                        name="signUp">
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

// https://media.giphy.com/media/Wif2BJsS56nEk/source.gif
// http://tampainternationalfilmfestival.com/assets/spinning-globe.gif