import React from 'react'
import LoginReduxForm  from '../views/Login-Redux-form/index'
import LoginRedux from "../views/Login-Redux";
import {connect} from "react-redux";
import {changeEmail, changePassword, validateForm} from "../actions";

class LoginReduxFormContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    submit = values => {
        // print the form values to the console
        console.warn(values)
    }
    render() {
        return <LoginReduxForm onSubmit={this.submit} />
    }
}


function mapDispatchToProps(dispatch){
    return {
        changeEmail:(email)=> dispatch(changeEmail(email.target.value)),
        changePassword:(password)=> dispatch(changePassword(password.target.value)),
        validateForm:()=> dispatch(validateForm()),
        }
    }
// прокидываем в props объект для инициализаци формы
function mapStateToProps(state, ownProps){
    console.log(state)
    return {
    }
}



export default  connect(mapStateToProps, mapDispatchToProps)(LoginReduxFormContainer);