import React from 'react';
import {useContext,useEffect,useState} from 'react';
import {useHistory} from 'react-router-dom';

import {Context} from '../../Context/AuthContext';
import {NaverContext} from '../../Context/NaverContext';
import api from '../../services/api';

import Navbar from '../../components/Navbar';
import FormComponent from '../../components/FormComponent';
import Modal from '../../components/Modal';
import CloseModal from '../../components/CloseModal';

import {Main,Menssage,Title} from '../../styles/global';


const Register = () => {
    const history =  useHistory();
    const {token} = useContext(Context);
    const {naver,setNaver} = useContext(NaverContext);
    const [showMenssage, setShowMenssage] = useState(false);
    const [modalMenssage, setModalMenssage] = useState('');

    const addNaver = async (data) => {
        api.post('/navers',data, {
            headers: {Authorization: `Bearer ${token}`}
        }).then(()=>{
            setModalMenssage('Naver cadastrado com sucesso!');
            setShowMenssage(true);
            setNaver('');
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
                <CloseModal onClick={() => {setShowMenssage(!showMenssage)}} />
                <Menssage>
                    <Title>Naver Criado</Title>
                    <p>{modalMenssage}</p>
                </Menssage>
            </Modal>
        </Main>
    );
}

export default Register;