import React from 'react';
import {useContext,useEffect,useState} from 'react';

import {Context} from '../../Context/NaverContext';
import api from '../../services/api';

import Navbar from '../../components/Navbar';
import FormComponent from '../../components/FormComponent';
import Modal from '../../components/Modal';
import CloseModal from '../../components/CloseModal';

import {Main,Menssage,Title} from '../../styles/global';


const Register = () => {
    const {naver,setNaver} = useContext(Context);
    const [showMenssage, setShowMenssage] = useState(false);
    const [modalMenssage, setModalMenssage] = useState('');

    const addNaver = async (data) => {
        api.post('/navers',data).then(()=>{
            setNaver('');
            setModalMenssage('Naver cadastrado com sucesso!');
            setShowMenssage(true);
        }).catch(() => {
            setModalMenssage('Erro ao cadastrar o Naver!');
            setShowMenssage(true);
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

            <Modal openModal={showMenssage}>
                <CloseModal onClick={() => {setShowMenssage(!showMenssage)}}/>
                <Menssage>
                    <Title>Naver Criado</Title>
                    <p>{modalMenssage}</p>
                </Menssage>
            </Modal>
        </Main>
    );
}

export default Register;