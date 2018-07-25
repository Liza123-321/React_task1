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


class RouterContainer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            active: "home"
        }
    };

    render(){
        return(
            <Router>
                <div>
                    <AppBar position="static">
                        <Toolbar>
                            <Link to="/"><Button color="inherit">Home</Button></Link>
                            <Link to="/about"><Button color="inherit">About</Button></Link>
                            <Link to="/counters"> <Button color="inherit">Counters</Button></Link>
                            <Link to="/test"> <Button color="inherit">404</Button></Link>
                        </Toolbar>
                    </AppBar>
                    <Switch>
                        <Route  path="/about" component={AboutContainer}/>
                        <Route  path="/counters" component={ParentContainer}/>
                        <Route exact path="*" component={NotFound} />
                    </Switch>

                </div>
            </Router>
        );
    }
}


export default RouterContainer;