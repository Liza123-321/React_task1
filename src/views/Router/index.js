import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import styles from './style';
import {withStyles} from "@material-ui/core/styles/index";

let MyRouter =({handleChange,value,classes})=>{
    return(
                <div>
                    {value!==-2 && <AppBar position="static">
                        <Toolbar className={classes.myNav}>
                            <Tabs value={value} onChange={handleChange}>
                                {/*<Tab label="Home" href="/React_task1/"/>*/}
                                <Tab label="About" href="/React_task1/about"/>
                                <Tab label="Counters" href="/React_task1/counters"/>
                                <Tab label="Login" href="/React_task1/login"/>
                                <Tab label="Login redux" href="/React_task1/login-redux"/>
                                <Tab label="Login redux-form" href="/React_task1/login-redux-form"/>
                            </Tabs>
                        </Toolbar>
                    </AppBar>
                    }
                </div>
        );

}


export default withStyles(styles)(MyRouter);