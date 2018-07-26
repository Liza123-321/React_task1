import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom';
import AboutContainer from '../../containers/AboutContainer';
import ParentContainer from '../../containers/ParentCounterContainer';
import NotFound from '../NotFound/index';
import styles from './style';
import {withStyles} from "@material-ui/core/styles/index";
import CounterContainer from "../../containers/CounterContainer";


let MyRouter =({handleChange,value,classes})=>{
console.warn(handleChange);
    return(
                <div>
                    {value!==3 && <AppBar position="static">
                        <Toolbar className={classes.myNav}>
                            <Tabs value={value} onChange={handleChange}>
                                <Tab label="Home" href="/React_task1/"/>
                                <Tab label="About" href="/React_task1/about"/>
                                <Tab label="Counters" href="/React_task1/counters"/>
                            </Tabs>
                        </Toolbar>
                    </AppBar>
                    }
                </div>
        );

}


export default withStyles(styles)(MyRouter);