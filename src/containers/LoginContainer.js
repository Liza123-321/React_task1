import React from 'react';
import Login from '../views/Login/index';
import PropTypes from 'prop-types';

class LoginContainer extends React.Component{
    constructor(props){
        super(props);
        this.handleUserInput=this.handleUserInput.bind(this);
        this.validateField=this.validateField.bind(this);
        this.validateForm=this.validateForm.bind(this);
        this.state={
            email: '',
            password: '',
            formErrors: {email: 'Invalid email', password: 'Password is to short'},
            emailValid: false,
            passwordValid: false,
            formValid: false
        }
    };
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        switch(fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' Invalid email';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '': 'Password is to short';
                break;
            default:
                break;
        }
        this.setState({formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }
    validateForm() {
        this.setState({formValid: this.state.emailValid &&
            this.state.passwordValid});
    }
    handleUserInput = (e) => {
        const name = e.target.id;
        const value = e.target.value;
        this.setState({[name]: value},
            () => { this.validateField(name, value) });
    }

    render(){
        return(
            <Login email={this.state.email}
                   password={this.state.password}
                   handleUserInput ={this.handleUserInput}
                   formErrors={this.state.formErrors}
                   formValid={this.state.formValid}
            />
        );
    }
}
LoginContainer.propTypes={
    email: PropTypes.string,
    password: PropTypes.string,
};

export default LoginContainer;