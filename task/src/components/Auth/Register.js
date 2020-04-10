import React from "react";
import axios from "../../axios-instance";
import { Redirect, Link } from "react-router-dom";

class Register extends React.Component {
    state = {
        email: "",
        password: "",
        firstname: "",
        lastname: "",
        errors: {},
        redirect: false,
    };

    validateForm = () => {
        let errors = {};
        let formIsValid = true;

        if (!this.state.email) {
            formIsValid = false;
            errors["email"] = "Please enter email to continue";
        }

        if (!this.state.password) {
            formIsValid = false;
            errors["password"] = "Please enter password to continue";
        }
        if (!this.state.firstname) {
            formIsValid = false;
            errors["firstname"] = "Please enter firstname to continue";
        }
        if (!this.state.lastname) {
            formIsValid = false;
            errors["lastname"] = "Please enter lastname to continue";
        }

        this.setState({
            errors: errors,
        });

        return formIsValid;
    };

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        if (this.validateForm()) {
            const registerData = {
                email: this.state.email,
                password: this.state.password,
                firstname: this.state.firstname,
                lastname: this.state.lastname,
            };
            axios
                .post("/registered.json", registerData)
                .then((response) => {
                    this.props.history.push("/");
                    console.log(response.data);
                })
                .catch((error) => console.log(error));
        }
    };

    redirectHandler = () => {
        if (!this.state.errors) {
            this.setState({
                redirect: true,
            });
        }
    };

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3"> Register </h5>{" "}
                    <div className="input-field">
                        <label htmlFor="email"> Email </label>{" "}
                        <input
                            type="email"
                            id="email"
                            onChange={this.handleChange}
                        />{" "}
                        <p> {this.state.errors.email} </p>{" "}
                    </div>{" "}
                    <div className="input-field">
                        <label htmlFor="password"> Password </label>{" "}
                        <input
                            type="password"
                            id="password"
                            onChange={this.handleChange}
                        />{" "}
                        <p> {this.state.errors.password} </p>{" "}
                    </div>{" "}
                    <div className="input-field">
                        <label htmlFor="firstname"> Firstname </label>{" "}
                        <input
                            type="text"
                            id="firstname"
                            onChange={this.handleChange}
                        />{" "}
                        <p> {this.state.errors.firstname} </p>{" "}
                    </div>{" "}
                    <div className="input-field">
                        <label htmlFor="lastname"> Lastname </label>{" "}
                        <input
                            type="text"
                            id="lastname"
                            onChange={this.handleChange}
                        />{" "}
                        <p> {this.state.errors.lastname} </p>{" "}
                    </div>{" "}
                    <div className="input-field">
                        <button
                            onClick={this.redirectHandler}
                            className="btn btn-primary"
                        >
                            {" "}
                            Register{" "}
                        </button>{" "}
                    </div>{" "}
                </form>{" "}
                {this.state.redirect ? (
                    <Redirect to="/home" />
                ) : (
                    <Redirect to="/register" />
                )}{" "}
            </div>
        );
    }
}

export default Register;
