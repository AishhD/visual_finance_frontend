import React from 'react'
import { Menu, Segment, Form, Button } from 'semantic-ui-react'
import { connect } from 'react-redux';
import updateUsername from "../actions/updateUsername";
import updatePassword from "../actions/updatePassword";
import updatePasswordConf from "../actions/updatePasswordConf";
import updateAuthorised from "../actions/updateAuthorised"

class Login extends React.Component {

    render() {
        const { activeItem } = this.state

        return (
            <div>
                <Menu pointing>
                    <Menu.Item name='Sign up' active={activeItem === 'signup'} onClick={this.props.updateAuthorised('signup')} />
                    <Menu.Item name='login' active={activeItem === 'login'} onClick={this.props.updateAuthorised('login')} />
                </Menu>

                {this.props.authorised === 'Sign up' ?
                    <Form>
                        <Form.Field>
                            <label>Username</label>
                            <input placeholder='Username' onChange={(event) => { this.props.updateUsername(event.target.value) }} />
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <input placeholder='Password' onChange={(event) => { this.props.updatePassword(event.target.value) }} />
                        </Form.Field>
                        <Form.Field>
                            <label>Confirm Passsword</label>
                            <input placeholder='Confirm Passsword' onChange={(event) => { this.props.updatePasswordConf(event.target.value) }} />
                        </Form.Field>
                        <Button type='submit'>Sign Up</Button>
                    </Form> : ""
                }

                {this.props.authorised === 'login' ?
                    <Segment>
                        <Form>
                            <Form.Field>
                                <label>Username</label>
                                <input placeholder='Username' onChange={(event) => { this.props.updateUsername(event.target.value) }} />
                            </Form.Field>
                            <Form.Field>
                                <label>Password</label>
                                <input placeholder='Password' onChange={(event) => { this.props.updatePassword(event.target.value) }} />
                            </Form.Field>
                            <Button type='submit'>Login</Button>
                        </Form>
                    </Segment> : ""}
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    username: state.username,
    password: state.password,
    passwordConf: state.passwordConf,
    authorised: state.authorised
})

const mapDispatchToProps = (dispatch) => ({
    updateUsername: (newUsername) => { dispatch(updateUsername(newUsername)) },
    updatePassword: (newPassword) => { dispatch(updatePassword(newPassword)) },
    updatePasswordConf: (newPasswordConf) => { dispatch(updatePasswordConf(newPasswordConf)) },
    updateAuthorised: (status) => { dispatch(updateAuthorised(status)) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)