import React from 'react';
import {useContext} from 'react';
import {useHistory} from 'react-router-dom';

import {Context} from '../../Context/AuthContext';
import api from '../../services/api';

import {NavBody,NavLogo,LogoutLabel} from './style';
import LogoImg from '../../assets/img/logo.svg';

const Navbar = () => {
    const history = useHistory();
    const {setToken} = useContext(Context);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setToken('');
        api.defaults.headers.Authorization = undefined;
    }

    return(
        <NavBody>
            <NavLogo src={LogoImg} alt="Logo da Nave.rs na Navbar" onClick={() => {history.push('/')}}/>
            <LogoutLabel onClick={() => {handleLogout()}}>Sair</LogoutLabel>
        </NavBody>
    );
}

export default Navbar;