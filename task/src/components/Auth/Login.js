import React from 'react';
import axios from '../../axios-instance';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../Store/Actions/authActions';

class Login extends React.Component {

    state = {
        email: '',
        password: '',
        errors: {},
        redirect: false,
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        const credentials = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.login(credentials.email, credentials.password);
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Login</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                        <p>{this.state.errors.email}</p>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                        <p>{this.state.errors.password}</p>
                    </div>
                    <div className="input-field">
                    <button onClick={this.redirectHandler} className="btn btn-primary">Login</button>
                    </div>
                    {this.props.isLoginSuccess ? <Redirect to='/dashboard' /> : null}
                    <div className="red-text center">
                        { this.props.loginError && <div>{this.props.loginError.message}</div>}
                    </div>
                </form>
                {this.state.redirect ? <Redirect to='/dashboard' /> : <Redirect to='/login' />}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoginPending: state.isLoginPending,
        isLoginSuccess: state.isLoginSuccess,
        loginError: state.loginError
    }
}

const mapDispatchToProps = (disptch) => {
    return {
        login: (email, password) => disptch(login(email,password))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);