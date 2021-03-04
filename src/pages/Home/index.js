import React from 'react';
import {useContext} from 'react';
import {useHistory} from 'react-router-dom';

import {Context} from '../../Context/AuthContext';
import api from '../../services/api';

import Navbar from '../../components/Navbar';

import {Button} from '../../styles/global';

const Home = () => {


    return(
        <Navbar />
    );
}

export default Home;