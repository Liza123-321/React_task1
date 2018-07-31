import React from 'react'
import LoginReduxForm  from '../views/Login-Redux-form/index'
import {connect} from "react-redux";
import {addToStore} from "../actions";

class LoginReduxFormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            formErrors: {email: 'Invalid email', password: 'Password is to short'},
            emailValid: false,
            passwordValid: false,
            formValid: false
        }
    }
    submit = values => {
        console.log(values);
        this.props.addToStore(values.email,values.password);
        this.props.history.push(`${this.props.history.location.pathname}/success`);
    }
    validateField(fieldName, value) {
        console.log(fieldName)
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
    render() {
        let { email, password } = this.props.formState.values ? this.props.formState.values : "";
        return <LoginReduxForm
            onSubmit={this.submit}
            email={email}
            password={password}
            handleUserInput ={this.handleUserInput}
            formErrors={this.state.formErrors}
            formValid={this.state.formValid}
        />
    }
}

function mapDispatchToProps(dispatch){
    return {
        addToStore:(email,password)=> dispatch(addToStore(email,password))
        }
    }
// прокидываем в props объект для инициализаци формы
function mapStateToProps(state){
    // console.warn(state)
    return {
        formState: { ...state.form.login },
        state: state
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(LoginReduxFormContainer);