import React from 'react';
import Card from '@material-ui/core/Card';
import {withStyles} from "@material-ui/core/styles/index";
import styles from './style'


let NotFound =({classes})=>{
        return(
            <div>
                <Card className={classes.card}>
                    <h1>404: NOT FOUND</h1>
                </Card>
            </div>
        );
}

export default withStyles(styles)(NotFound);