import React from 'react';
import {useContext,useEffect,useState} from 'react';

import {Context} from '../../Context/AuthContext';
import {NaverContext} from '../../Context/NaverContext';
import api from '../../services/api';

import Navbar from '../../components/Navbar';
import FormComponent from '../../components/FormComponent';
import Modal from '../../components/Modal';

import {Main} from '../../styles/global';


const Register = () => {
    const {token} = useContext(Context);
    const {naver,setNaver} = useContext(NaverContext);
    const [showMenssage, setShowMenssage] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalText, setModalText] = useState('');

    const addNaver = async (data) => {
        api.post('/navers',data, {
            headers: {Authorization: `Bearer ${token}`}
        }).then(()=>{
            setModalTitle('Naver criado');
            setModalText('Naver criado com sucesso!');
            setShowMenssage(true);
            setNaver('');
        }).catch(() => {
            setModalTitle('Erro ao criar Naver');
            setModalText('Ops, parece que houve um problema ao criar o Naver!');
            setShowMenssage(true);
            setNaver('');
        });
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

            <Modal 
                openModal={showMenssage} 
                menssage={true}
                title={modalTitle}
                text={modalText}
                closeModal={() => {setShowMenssage(!showMenssage)}} />
        </Main>
    );
}

export default Register;