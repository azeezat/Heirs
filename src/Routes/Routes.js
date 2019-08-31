import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from '../components/Views/Login/Login';
import Induction from '../components/Views/Induction/Induction';
import Profile from '../components/Views/Profile/Profile';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Login} />
                <Route path='/instructions' component={Induction} />
                <Route exact path='/profile' component={Profile} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes