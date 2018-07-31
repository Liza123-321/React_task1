import React from 'react'
import LoginReduxForm  from '../views/Login-Redux-form/index'
import LoginRedux from "../views/Login-Redux";
import {connect} from "react-redux";
import {changeEmail, changePassword, validateForm,addToStore,validatePassword,validateEmail} from "../actions";

class LoginReduxFormContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    submit = values => {
        console.log(values);
        this.props.addToStore(values.email,values.password);
        this.props.history.push(`${this.props.history.location.pathname}/success`);
    }
    render() {
        let { email, password } = this.props.formState.values ? this.props.formState.values : "";
        return <LoginReduxForm
            onSubmit={this.submit}
            email={email}
            password={password}
            validateForm={this.props.validateForm}
            validateEmail={this.props.validateEmail}
            validatePassword={this.props.validatePassword}
            formValid={this.props.formValid}
            formErrors={this.props.formErrors}
        />
    }
}

function mapDispatchToProps(dispatch){
    return {
        validateEmail:(email)=> dispatch(validateEmail(email.target.value)),
        validatePassword:(password)=> dispatch(validatePassword(password.target.value)),
        addToStore:(email,password)=> dispatch(addToStore(email,password)),
        validateForm:()=> dispatch(validateForm()),
        }
    }
// прокидываем в props объект для инициализаци формы
function mapStateToProps(state){
    // console.warn(state)
    return {
        formValid: state.loginForm.isAuth,
        formErrors: state.loginForm.formErrors,
        formState: { ...state.form.login },
        state: state
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(LoginReduxFormContainer);