import React from 'react';
import MyRouter from '../views/Router/index';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { BrowserRouter as Router, Route, Link,Switch } from 'react-router-dom';
import AboutContainer from './AboutContainer';
import ParentContainer from './ParentCounterContainer';
import NotFound from '../views/NotFound/index';
import styles from '../views/Router/style';
import {withStyles} from "@material-ui/core/styles/index";


class RouterContainer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            active: "home"
        }
    };
    render(){
        const { classes } = this.props;
        if(this.state.active!=="home"){
            return(
                <Router>
                    <div>
                        <Switch>
                            <Route  exact path="/" component={null}/>
                            <Route  path="/about" component={AboutContainer}/>
                            <Route  path="/counters" component={ParentContainer}/>
                            <Route  path="*" component={NotFound} />
                        </Switch>

                    </div>
                </Router>
            );
        }
        else{
            return(
                <Router>
                    <div>
                        <AppBar position="static">
                            <Toolbar className={classes.myNav}>
                                <Link to="/"><Button  color="secondary" >Home</Button></Link>
                                <Link to="/about"><Button color="secondary">About</Button></Link>
                                <Link to="/counters"> <Button color="secondary">Counters</Button></Link>
                                <Link to="/test"> <Button color="secondary">404</Button></Link>
                            </Toolbar>
                        </AppBar>
                        <Switch>
                            <Route  exact path="/" component={null}/>
                            <Route  path="/about" component={AboutContainer}/>
                            <Route  path="/counters" component={ParentContainer}/>
                            <Route  path="/*" component={NotFound} />
                        </Switch>

                    </div>
                </Router>
            );
        }

    }
}


export default withStyles(styles)(RouterContainer);