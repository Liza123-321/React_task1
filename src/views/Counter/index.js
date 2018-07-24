import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {withStyles} from "@material-ui/core/styles/index";
import styles from './style'


let Counter =({incrementFunction,counterValue,resetFunction,decrementFunction,classes})=>{
        return(
            <div>
                <TextField className={classes.textField} value={counterValue}/>
                <br/><br/>
                <Button variant="raised" color="default" className={classes.button} onClick={incrementFunction}>
                    increment
                </Button>
                <Button  variant="raised" color="secondary" className={classes.button} onClick={resetFunction}>
                    reset
                </Button>
                <Button  variant="raised" color="default" className={classes.button} onClick={decrementFunction}>
                    decrement
                </Button>

            </div>
        );
}

export default withStyles(styles)(Counter);