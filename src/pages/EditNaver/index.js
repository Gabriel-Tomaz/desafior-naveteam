import React from 'react';
import {useState,useContext,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useParams} from 'react-router-dom';

import api from '../../services/api';
import {Context} from '../../Context/NaverContext';

import Navbar from '../../components/Navbar';
import FormComponent from '../../components/FormComponent';
import Modal from '../../components/Modal';
import CloseModal from '../../components/CloseModal';

import {Main,Menssage,Title} from '../../styles/global';

const EditNaver = () => {
    const history = useHistory();
    const {id} = useParams();
    const {naver} = useContext(Context);
    const [oldNaver, setOldNaver] = useState();
    const [showMenssage, setShowMenssage] = useState(false);
    const [title,setTitle] = useState('');
    const [modalMenssage, setModalMenssage] = useState('');

    const getNaver = async (id) => {
        await api.get(`/navers/${id}`).then((response) => {
            setOldNaver(response.data);
        }).catch(() => {
            console.log('Erro');
        });
    }

    const handleEdit = async (naver) => {
        api.put(`/navers/${id}`,naver).then(() => {  
            setTitle('Naver Atualizado');
            setModalMenssage('Naver atualizado com sucesso!');
            setShowMenssage(true);
        }).catch(() => {
            setTitle('Naver não atualizado');
            setModalMenssage('Ops, houve um erro ao atulizar o naver!');
            setShowMenssage(true);
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