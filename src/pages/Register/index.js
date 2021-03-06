import React from 'react';
import {useContext,useEffect} from 'react';

import {Context} from '../../Context/NaverContext';
import api from '../../services/api';

import Navbar from '../../components/Navbar';
import FormComponent from '../../components/FormComponent';

import {Main} from '../../styles/global';


const Register = () => {
    const {naver,setNaver} = useContext(Context);

    const addNaver = async (data) => {
        api.post('/navers',data).then(()=>{
            console.log('Cadastrado com sucesso!');
            setNaver('');
        }).catch(error => {
            console.log('Erro ao cadastrar!');
        })
    } 

    useEffect(() => {
        if(naver !== ''){
            addNaver(naver);
        }
    },[naver]);

    return(
        <Main>
            <Navbar />
            <FormComponent 
                Title="Adicionar Naver"
            />
        </Main>
    );
}

export default Register;