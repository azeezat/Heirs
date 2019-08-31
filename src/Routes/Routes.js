import React from 'react';
import Login from '../components/Views/Login/Login';
import Induction from '../components/Views/Induction/Induction';

import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Login} />
                <Route path='/instructions' component={Induction} />

            </Switch>
        </BrowserRouter>
    );
};

export default Routes