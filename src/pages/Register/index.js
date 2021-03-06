import React from 'react';

import Navbar from '../../components/Navbar';
import FormComponent from '../../components/FormComponent';

import {Main} from '../../styles/global';


const Register = () => {
    return(
        <Main>
            <Navbar />
            <FormComponent Title="Adicioanr Naver"/>
        </Main>
    );
}

export default Register;