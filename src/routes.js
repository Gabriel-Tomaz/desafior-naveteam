import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import EditNaver from './pages/EditNaver';

import PrivateRoute from './components/PrivateRoute';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <PrivateRoute path="/" exact component={Home}/>
                <Route path="/login" exact component={Login}/>
                <PrivateRoute path="/Register" exact component={Register} />
                <PrivateRoute path="/Edit/:id" exact component={EditNaver} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;