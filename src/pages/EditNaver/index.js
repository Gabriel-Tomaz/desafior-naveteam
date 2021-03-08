import React from 'react';
import {useState,useContext,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useParams} from 'react-router-dom';

import api from '../../services/api';
import {Context} from '../../Context/AuthContext'; 
import {NaverContext} from '../../Context/NaverContext';

import Navbar from '../../components/Navbar';
import FormComponent from '../../components/FormComponent';
import Modal from '../../components/Modal';

import {Main} from '../../styles/global';

const EditNaver = () => {
    const history = useHistory();
    const {id} = useParams();
    const {token} = useContext(Context);
    const {naver,setNaver} = useContext(NaverContext);
    const [oldNaver, setOldNaver] = useState();
    const [showMenssage, setShowMenssage] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalText, setModalText] = useState('');

    const getNaver = async (id) => {
        await api.get(`/navers/${id}`,{
            headers: {Authorization: `Bearer ${token}`}
        }).then((response) => {
            setOldNaver(response.data);
        }).catch(() => {
           
        });
    }

    const handleEdit = async (naver) => {
        api.put(`/navers/${id}`,naver ,{
            headers: {Authorization: `Bearer ${token}`}
        }).then(() => {  
            setModalTitle('Naver Atualizado');
            setModalText('Naver atualizado com sucesso!');
            setShowMenssage(true);
            setNaver('');
        }).catch(() => {
            setModalTitle('Naver não atualizado');
            setModalText('Ops, houve um erro ao atulizar o naver!');
            setShowMenssage(true);
            setNaver('');
        });
    }

    useEffect(() => {
        getNaver(id);
        if(naver !== ''){
            handleEdit(naver);
            getNaver(id);
        }
    }, [naver]);

    return(
        <Main>
            <Navbar />
            <FormComponent 
                Title="Editar Naver"
                data={oldNaver}
            />

            <Modal 
                openModal={showMenssage} 
                menssage={true}
                title={modalTitle}
                text={modalText}
                closeModal={() => {
                    setShowMenssage(!showMenssage);
                    history.push('/');
                }}
            />
        </Main>
    );
}

export default EditNaver;