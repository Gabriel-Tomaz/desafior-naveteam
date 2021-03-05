import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';

import PrivateRoute from './components/PrivateRoute';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <PrivateRoute path="/" exact component={Home}/>
                <Route path="/login" exact component={Login}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;