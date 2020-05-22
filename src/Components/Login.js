import React, { Component } from 'react';
import '../App.css';
import { browserHistory } from 'react-router';


class Login extends Component {

    state = {
        name: null,
        type: null,
        fields: {},
        errors: {}
    }

    handleValidation = () => {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Username
        if (!fields["name"]) {
            formIsValid = false;
            errors["name"] = "Cannot be empty";
        }

        if (typeof fields["name"] !== "undefined") {
            // let lastAtPos = fields["name"].lastIndexOf('@');
            // let lastDotPos = fields["name"].lastIndexOf('.');
            if (
                !fields["name"].match(
                    'hruday@gmail.com'
                )
            ) {
                formIsValid = false;
                errors["name"] = "Username is not valid";
            }
            // if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["name"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["name"].length - lastDotPos) > 2)) {
            //     formIsValid = false;
            //     errors["name"] = "Username is not valid";
            // }
        }

        if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "*Please enter your password.";
        }

        if (typeof fields["password"] !== "undefined") {
            if (
                !fields["password"].match(
                    'hruday123'
                    // /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/
                )
            ) {
                formIsValid = false;
                errors["password"] =
                    "*Invalid password.";
            }
        }


        this.setState({ errors: errors });
        return formIsValid;
    }


    contactSubmit = (e) => {
        e.preventDefault();

        if (this.handleValidation()) {
            alert("Form submitted");
            browserHistory.push("/dashboard");
            console.log("submitted", this.state.fields);
        } else {
            alert("Form has errors.")
        }

    }

    handleChange = (e) => {
        let fields = this.state.fields;
        let errors = this.state.errors;
        fields[e.target.name] = e.target.value;
        errors[e.target.name] = "";
        this.setState({ fields });
    }


    render() {
        return (
            <div>
                <form className="form">
                    <h1>Login Form</h1>
                    <span>Username
            <input required type="text"
                            style={{ margin: '10px' }}
                            onChange={this.handleChange}
                            name="name"
                            value={this.state.fields.name}
                        />
                        <span className="errors">{this.state.errors.name}</span>
                    </span>
                    <span>Password
            <input required
                            type="password"
                            style={{ margin: '10px 10px 20px 10px' }}
                            onChange={this.handleChange}
                            name="password"
                            value={this.state.fields.password}
                        />
                        <span className="errors">{this.state.errors.password}</span>
                    </span>
                    <button onClick={this.contactSubmit}>Login</button>
                </form>
            </div>
        )
    }
}

export default Login