import React from 'react';
import MyRouter from '../views/Router/index';


import {BrowserRouter as Router, Route, Switch, withRouter, Redirect} from 'react-router-dom';
import AboutContainer from './AboutContainer';
import ParentContainer from './ParentCounterContainer';
import NotFound from '../views/NotFound/index';
import Login from './LoginContainer';
import LoginRedux from './LoginReduxContainer';
import LoginReduxForm from './LoginReduxFormContainer';
import LoginSuccess from '../views/Login-Redux/success';
import LoginReduxFormSuccess from '../views/Login-Redux-form/success'
import PropTypes from "prop-types";


class RouterContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: -1,
            login: 'anon',
            password: 'anon',
        }
    };

    handleChange = (event, value) => {
        this.setState({value: value});
    };

    //пофиксить этот ужас
    componentWillMount() {
        if (this.props.history.location.pathname === "/React_task1/about") this.setState({value: 0});
        else if (this.props.history.location.pathname === "/React_task1/counters") this.setState({value: 1});
        else if (this.props.history.location.pathname === "/React_task1/login") this.setState({value: 2});
        else if (this.props.history.location.pathname === "/React_task1/login-redux") this.setState({value: 3});
        else if (this.props.history.location.pathname === "/React_task1/login-redux-form") this.setState({value: 4});
        else if (this.props.history.location.pathname === "/React_task1/") this.setState({value: -1});
        else this.setState({value: -2});
    }

    render() {
        return (
            <Router>
                <div>
                    <MyRouter value={this.state.value}
                              handleChange={this.handleChange}
                              login={this.state.login}
                              password={this.state.password}
                    />
                    <Switch>
                        <Route exact path="/React_task1/" component={null}/>
                        <Route path="/React_task1/about" component={AboutContainer}/>
                        <Route path="/React_task1/counters" component={ParentContainer}/>
                        <Route path="/React_task1/login" component={Login}/>
                        <Route path="/React_task1/login-redux/success" component={LoginSuccess}/>
                        <Route path="/React_task1/login-redux" component={LoginRedux}/>
                        <Route path="/React_task1/login-redux-form/success" component={LoginReduxFormSuccess}/>
                        <Route path="/React_task1/login-redux-form" component={LoginReduxForm}/>
                        <Route path="/React_task1/404" component={NotFound}/>
                        <Route path="/React_task1/*" render={() => (<Redirect to="/React_task1/404"/>)}/>
                        <Route path="/*" render={() => (<Redirect to="/React_task1/"/>)}/>
                    </Switch>
                </div>
            </Router>
        )
    }

}

RouterContainer.propTypes = {
    handleChange: PropTypes.func,
    value: PropTypes.number,
    login: PropTypes.string,
    password: PropTypes.string,

};

export default withRouter(RouterContainer);