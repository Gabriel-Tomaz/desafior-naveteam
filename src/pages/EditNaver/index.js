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
import CloseModal from '../../components/CloseModal';

import {Main,Menssage,Title} from '../../styles/global';

const EditNaver = () => {
    const history = useHistory();
    const {id} = useParams();
    const {token} = useContext(Context);
    const {naver,setNaver} = useContext(NaverContext);
    const [oldNaver, setOldNaver] = useState();
    const [showMenssage, setShowMenssage] = useState(false);
    const [title,setTitle] = useState('');
    const [modalMenssage, setModalMenssage] = useState('');

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
            setTitle('Naver Atualizado');
            setModalMenssage('Naver atualizado com sucesso!');
            setShowMenssage(true);
            setNaver('');
        }).catch(() => {
            setTitle('Naver não atualizado');
            setModalMenssage('Ops, houve um erro ao atulizar o naver!');
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

            <Modal openModal={showMenssage}>
                <CloseModal onClick={() => {
                        setShowMenssage(!showMenssage);
                        history.push('/');
                    }} 
                />
                <Menssage>
                    <Title>{title}</Title>
                    <p>{modalMenssage}</p>
                </Menssage>
            </Modal>
        </Main>
    );
}

export default EditNaver;