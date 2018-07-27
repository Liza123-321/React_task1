import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {withStyles} from "@material-ui/core/styles/index";
import Card from '@material-ui/core/Card';
import Errors from './Errors';
import styles from './style';



let Login =({classes,email,password,formErrors,formValid,changeEmail,changePassword})=>{
    return(
        <div>
            <form>
                <Card className={classes.card}>
                    <h1>
                       Login Redux
                    </h1>
                    {
                        formValid!==true && <Card className={classes.inputGroup}>
                            Errors
                            <Errors formErrors={formErrors}/>
                        </Card>
                    }
                    <TextField
                        id="email"
                        label="Email"
                        className={classes.textField}
                        margin="normal"
                        value={email}
                        onChange={changeEmail}
                    /><br/>
                    <TextField
                        id="password"
                        label="Password"
                        type="password"
                        className={classes.textField}
                        margin="normal"
                        onChange={changePassword}
                        value={password}
                    />
                    <br/><br/>
                    <Button  variant="raised" color="secondary" type="submit" disabled={!formValid}
                             onClick={()=>{console.log(email+ " : " + password); alert(JSON.stringify( email+ " : " + password))}} className={classes.button}>
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