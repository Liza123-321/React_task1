import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';
import {withStyles} from "@material-ui/core/styles/index";
import Card from '@material-ui/core/Card';
import { Field, reduxForm } from 'redux-form';


let LoginReduxForm = props => {
    const { handleSubmit } = props;
    this.renderField = ({ input, label, type,onChange}) => (
        <div>
            <div>
                <TextField
                    id={label}
                    label={label}
                    margin="normal"
                    type={type}
                    onChange={onChange}
                /><br/>
            </div>
        </div>
    );
    return (
        <form onSubmit={handleSubmit}>
            <Card>
                <h1>
                    Login Redux-form
                </h1>
            </Card>
            <div>
                <Field name="email" component={this.renderField} onChange={props.changeEmail} label="Email" type="email"/>
            </div>
            <div>
                <Field name="password" component={this.renderField} label="Password" onChange={props.changePassword}  type="password"/>
            </div>
            <Button  variant="raised" color="secondary"
                    type="submit">Login
                {/*<Link to="/React_task1/login-redux-form/success">  Login </Link>*/}
            </Button>
        </form>
    )
}


LoginReduxForm  = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginReduxForm );

export default LoginReduxForm;