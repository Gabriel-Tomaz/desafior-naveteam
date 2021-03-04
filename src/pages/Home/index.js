import React from 'react';
import {useContext} from 'react';
import {useHistory} from 'react-router-dom';

import {Context} from '../../Context/AuthContext';
import api from '../../services/api';

import {Button} from '../../styles/global';

const Home = () => {
    const history = useHistory();
    const {setAuthenticated} = useContext(Context);

    const handleLogout = () => {
        localStorage.removeItem('token');
        api.defaults.headers.Authorization = undefined;
        history.push('/login');
        setAuthenticated(false);
    }

    return(
        <Button onClick={handleLogout}>Sair</Button>
    );
}

export default Home;