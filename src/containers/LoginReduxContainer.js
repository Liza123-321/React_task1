import React from 'react';
import LoginRedux from '../views/Login-Redux/index';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {validateFormSuccess,changeEmail,changePassword} from '../actions/index';

const mapStateToProps=(state)=>{
    return{
        formValid: state.isAuth,
        email:state.email,
        password : state.password,
        formErrors: state.formErrors,

    }

}

const mapDispatchToProps=(dispatch,ownProps)=>{
    return{
        // changeEmail: dispatch(changeEmail(ownProps.email)),
        // changePassword: dispatch(changePassword(ownProps.password))
    }
}

const LoginReduxContainer=connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginRedux)

export default LoginReduxContainer;