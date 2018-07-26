import React from 'react';
import MyRouter from '../views/Router/index';


import {BrowserRouter as Router, Route, Switch,withRouter,Redirect} from 'react-router-dom';
import AboutContainer from './AboutContainer';
import ParentContainer from './ParentCounterContainer';
import NotFound from '../views/NotFound/index';


class RouterContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: -1
        }
    };

    handleChange = (event, value) => {
        console.warn(value);
        this.setState({value: value});
    };
    //пофиксить этот ужас
    componentWillMount(){
        if(this.props.history.location.pathname==="/React_task1/counters")  this.setState({value: 1});
        else if (this.props.history.location.pathname==="/React_task1/about")  this.setState({value: 0});
        else if (this.props.history.location.pathname==="/React_task1/")  this.setState({value: -1});
        else this.setState({value: 3});
    }
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <MyRouter value={this.state.value}
                                  handleChange={this.handleChange}/>
                        <Switch>
                            <Route exact path="/React_task1/" component={null}/>
                            <Route path="/React_task1/about" component={AboutContainer}/>
                            <Route path="/React_task1/counters" component={ParentContainer}/>
                            <Route path="/React_task1/404" component={NotFound}/>
                            <Route path="/React_task1/*" render={() =>( <Redirect to="/React_task1/404"/>)}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }

}


export default withRouter(RouterContainer);