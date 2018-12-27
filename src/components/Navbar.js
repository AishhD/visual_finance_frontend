import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

class Navbar extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    handleLoginClick = () => {
        this.props.history.push(`/Login`)
        // return <Redirect to='/Login' />
    }



    render() {
        const { activeItem } = this.state

        return (
            <Menu>
                <Menu.Menu position='left'>
                    <Menu.Item name='Compare UK spending' active={activeItem === 'Compare UK spending'} onClick={this.handleItemClick}>
                        <img src='https://media.giphy.com/media/Wif2BJsS56nEk/source.gif' alt="" />
                    </Menu.Item>
                </Menu.Menu>
                <Menu.Menu position='right'>
                    <Menu.Item name='Compare UK spending' active={activeItem === 'Compare UK spending'} onClick={this.handleItemClick}>
                        Compare UK spending
                    </Menu.Item>

                    <Menu.Item name='Login' active={activeItem === 'Login'} onClick={this.handleLoginClick}>
                        Login
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}

export default withRouter(Navbar)

// https://media.giphy.com/media/Wif2BJsS56nEk/source.gif
// http://tampainternationalfilmfestival.com/assets/spinning-globe.gif