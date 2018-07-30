import React from 'react';
import LoginRedux from '../views/Login-Redux/index';
import { connect } from 'react-redux';
import {validateForm,changeEmail,changePassword} from '../actions/index';

const mapStateToProps=(state)=>{
    console.log(state);
    return{
        formValid: state.isAuth,
        email:state.email,
        password : state.password,
        formErrors: state.formErrors,

    }

}

const mapDispatchToProps=(dispatch)=>{
    return{
        changeEmail:(email)=> dispatch(changeEmail(email.target.value)),
        changePassword:(password)=> dispatch(changePassword(password.target.value)),
        validateForm:()=> dispatch(validateForm()),
    }
}

const LoginReduxContainer=connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginRedux)

export default LoginReduxContainer;