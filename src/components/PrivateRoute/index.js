import React from 'react';
import {useContext} from 'react';
import {Route,Redirect} from 'react-router-dom';

import {Context} from '../../Context/AuthContext';

const PrivateRoute = ({isPrivate, ...res}) => {
    const {authenticated} = useContext(Context);

    if(isPrivate && !authenticated){
         return <Redirect to="/login" />
    }

    return <Route {...res}/>
}

export default PrivateRoute;