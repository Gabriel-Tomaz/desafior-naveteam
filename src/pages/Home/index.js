import React from 'react';
import {useState, useEffect,useContext} from 'react';
import {MdDelete,MdModeEdit,MdAdd} from 'react-icons/md';
import {useHistory} from 'react-router-dom';

import api from '../../services/api';
import { Context } from '../../Context/AuthContext';

import Navbar from '../../components/Navbar';
import Modal from '../../components/Modal';
import Details from '../../components/Details';
import {Main,Button, Title} from '../../styles/global';
import {HomeContent,HomeListHeader,UsersList,UserCard,UserImg,CardActions,NotFound,AddNaver} from './style';

import rocketImg from '../../assets/img/rocket.svg';

const Home = () => {    
    const history = useHistory();
    const {token} = useContext(Context);
    const [navers, setNavers] = useState([]);
    const [naver,setNaver] = useState([]);
    const [naverId, setNaverId] = useState('');
    const [modalTitle, setModalTitle] = useState('');
    const [modalText, setModalText] = useState('');
    const [showDelete,setShowDelete] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [deleteMenssage, setDeleteMenssage] = useState(false);

    //Busca todos os Navers da API
    const getNavers = async () => {
        api.get('/navers', {
            headers: {Authorization: `Bearer ${token}`}
        }).then(response => {
            setNavers(response.data);
        });
    }

    //Deletar um Naver
    const deleteNaver= async (id) => {
        api.delete(`/navers/${id}`, {
            headers: {Authorization: `Bearer ${token}`}
        }).then(() => {
            getNavers();
            setShowDelete(false);
            setModalTitle('Naver Excluido');
            setModalText('Naver excluido com sucesso!');
            setDeleteMenssage(true);
        }).catch(() => {
            setShowDelete(false);
            setModalTitle('Excluir Naver');
            setModalText('Ops, parece que houve um erro ao excluir o Naver!');
            setDeleteMenssage(true);
        });
    }
    
    //Busca um unico naver da API
    const getNaver = async (id) =>{
        api.get(`/navers/${id}`, {
            headers: {Authorization: `Bearer ${token}`}
        }
        ).then(response => {
            setNaver(response.data);
        }).catch(error => {
            console.log(error);
        });
    }

    const modalDeleteNaver = (id) => {
        setNaverId(id);
        setShowDetails(false);
        setShowDelete(true);
    }

    const modalDetails = (id) => {
        setShowDetails(true);
        getNaver(id);
        setNaverId(id);
    }

    useEffect(() => {
        getNavers();
    }, []);

    return(
        <Main>
            <Navbar />
            <HomeContent>
                <AddNaver onClick={() => {history.push('/Register')}}>
                    <MdAdd color="#FFF" size={30}/>
                </AddNaver>
                <HomeListHeader>
                    <h1>Navers</h1>
                    <Button onClick={() => {history.push('/Register')}}>Adicionar Naver</Button>
                </HomeListHeader>
                {(navers.length === 0) ? (
                    <NotFound>
                        <img src={rocketImg}/>
                        <Title>Ops, parece que não tem ninguém aqui!</Title>
                    </NotFound>
                ):(
                    <UsersList>
                        {navers.map(naver => (
                            <UserCard key={naver.id}>
                                <UserImg style={{backgroundImage: `url(${naver.url})`}} onClick={() => modalDetails(naver.id)} />
                                <h3>{naver.name}</h3>
                                <h3>{naver.job_role}</h3>
                                <CardActions>
                                    <MdDelete color="#212121" size={24} onClick={() => modalDeleteNaver(naver.id)}/>
                                    <MdModeEdit color="#212121" size={24} onClick={() => {history.push(`/Edit/${naver.id}`)}}/>
                                </CardActions>
                            </UserCard>
                        ))}
                    </UsersList>
                )}
            </HomeContent>

            {/* Modal de confirmação da exclusão do Naver */}
            <Modal 
                openModal={showDelete}
                menssage={true}
                title="Excluir Naver"
                text="Tem certeza que deseja excluir este Naver ?"
                buttons={true}
                closeModal={() => {setShowDelete(!showDelete)}}
                action={() => {deleteNaver(naverId)}}
            />

            {/* Modal de menssagem de sucesso ou erro na exclusão do naver */}
            <Modal 
                openModal={deleteMenssage}
                menssage={true}
                title={modalTitle}
                text={modalText}
                closeModal={() => {setDeleteMenssage(!deleteMenssage)}}
            />

            <Modal 
                openModal={showDetails} 
                closeModal={() => setShowDetails(!showDetails)}
                closeColor="#FFF"
            >
                <Details 
                    naver={naver}
                    deleteNaver={() => modalDeleteNaver(naverId)}
                    editNaver={() => {history.push(`/Edit/${naverId}`)}}
                />
            </Modal>

        </Main>
    );
}

export default Home;