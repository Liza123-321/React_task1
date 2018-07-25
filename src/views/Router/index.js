import React from 'react';
import {withStyles} from "@material-ui/core/styles/index";
import { BrowserRouter as Router, Route, Link,Switch } from 'react-router-dom';
import styles from './style';


let MyRouter =({active})=>{
    return(
       <Router>
           <div>
               <ul>
                   <li><Link to="/about">About</Link></li>
                   <li><Link to="/counters">Counters</Link></li>
               </ul>

               <hr/>
           </div>
       </Router>
    );
}

export default withStyles(styles)(MyRouter);