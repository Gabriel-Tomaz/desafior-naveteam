import React from 'react';
import {useContext} from 'react';
import {Route,Redirect} from 'react-router-dom';

import {Context} from '../../Context/AuthContext';

const PrivateRoute = ({...res}) => {
    const {token} = useContext(Context);

    if(token === ''){
         return <Redirect to="/login" />
    }else if(typeof token === 'string'){
        return <Route {...res}/>   
    }

    return <></>
}

export default PrivateRoute;