import React from 'react';
import LoginRedux from '../views/Login-Redux/index';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {validateForm,changeEmail,changePassword,validateEmail,validatePassword} from '../actions/index';

const mapStateToProps=(state)=>{
    console.log(state);
    return{
        formValid: state.isAuth,
        email:state.email,
        password : state.password,
        formErrors: state.formErrors,

    }

}

const mapDispatchToProps=(dispatch,ownProps)=>{
    return{
        changeEmail:(email)=> dispatch(changeEmail(email.target.value)),
        changePassword:(password)=> dispatch(changePassword(password.target.value)),
    }
}

const LoginReduxContainer=connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginRedux)

export default LoginReduxContainer;