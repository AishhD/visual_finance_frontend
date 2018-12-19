import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Redirect, withRouter } from 'react-router-dom'

class Navbar extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    handleLoginClick = () => {
        console.log("cick")
        this.props.history.push(`/Login`)
        // return <Redirect to='/Login' />
    }

    render() {
        const { activeItem } = this.state

        return (
            <Menu>
                <Menu.Menu position='right'>
                    <Menu.Item name='Compare your spending' active={activeItem === 'Compare your spending'} onClick={this.handleItemClick}>
                        Compare your spending
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