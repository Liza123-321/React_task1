import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {withStyles} from "@material-ui/core/styles/index";
import Card from '@material-ui/core/Card';
import AuthIcon from '@material-ui/icons/Person';
import styles from './style'

export const FormErrors = ({formErrors}) =>
    <div >
        {Object.keys(formErrors).map((fieldName, i) => {
            if(formErrors[fieldName].length > 0){
                return (<div    key={i}>
                        <TextField
                            error
                            label="Email Error"
                            value={formErrors[fieldName]}
                        />
                        <br/><br/>
                    </div>

                )
            } else {
                return '';
            }
        })}
    </div>

let Login =({classes,email,password,handleUserInput,formErrors,formValid})=>{
    return(
        <div>
            <form>
            <Card className={classes.card}>
                <h1>
                    <AuthIcon color="primary" className={classes.authIcon}/>
                </h1>
                <Card className={classes.inputGroup}>
                    Errors
                    <FormErrors formErrors={formErrors}/>
                </Card>


                <TextField
                    id="email"
                    label="Email"
                    className={classes.textField}
                    margin="normal"
                    value={email}
                    onChange={handleUserInput}
                /><br/>
                <TextField
                    id="password"
                    label="Password"
                    type="password"
                    className={classes.textField}
                    margin="normal"
                    onChange={handleUserInput}
                    value={password}
                />
                <br/><br/>
                <Button  variant="raised" color="secondary" type="submit" disabled={!formValid}
                         onClick={()=>{console.log(email+ " : " + password)}} className={classes.button}>
                    Login
                </Button>
                <Card className={classes.inputGroup}>
                    <TextField
                        type="text"
                        label="Input Email"
                        className={classes.textField}
                        value={email}
                    /><br/>
                    <TextField
                        type="text"
                        label="Input Password"
                        className={classes.textField}
                        value={password}
                    />
                </Card>


            </Card>
            </form>
        </div>
    );
}

export default withStyles(styles)(Login);