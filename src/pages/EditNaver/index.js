import React from 'react';
import {useState,useContext,useEffect} from 'react';
import {useParams} from 'react-router-dom';

import api from '../../services/api';
import {Context} from '../../Context/NaverContext';

import Navbar from '../../components/Navbar';
import FormComponent from '../../components/FormComponent';
import {Main} from '../../styles/global';

const EditNaver = () => {
    const {id} = useParams();
    const {naver} = useContext(Context);
    const [oldNaver, setOldNaver] = useState();

    const getNaver = async (id) => {
        await api.get(`/navers/${id}`).then((response) => {
            setOldNaver(response.data);
        }).catch(() => {
            console.log('Erro');
        });
    }

    const handleEdit = async (naver) => {
        api.put(`/navers/${id}`,naver).then(() => {  
            console.log('Atualizado com sucesso.');
        }).catch(() => {
            console.log('Erro ao editar ');
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
        </Main>
    );
}

export default EditNaver;