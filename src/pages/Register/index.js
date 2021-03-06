import React from 'react';
import {useContext} from 'react';

import {Context} from '../../Context/NaverContext';

import Navbar from '../../components/Navbar';
import FormComponent from '../../components/FormComponent';

import {Main} from '../../styles/global';


const Register = () => {
    const {naver} = useContext(Context);

    console.log(naver);

    return(
        <Main>
            <Navbar />
            <FormComponent 
                Title="Adicioanr Naver"
            />
        </Main>
    );
}

export default Register;