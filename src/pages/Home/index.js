import React from 'react';
import {useState, useEffect,useContext} from 'react';
import {MdDelete,MdModeEdit} from 'react-icons/md';
import {useHistory} from 'react-router-dom';

import api from '../../services/api';
import { Context } from '../../Context/AuthContext';

import Navbar from '../../components/Navbar';
import Modal from '../../components/Modal';
import Details from '../../components/Details';
import CloseModal from '../../components/CloseModal';
import {Main,Button,Menssage,Title} from '../../styles/global';
import {HomeContent,HomeListHeader,UsersList,UserCard,UserImg,CardActions,DeleteContent,CancelButton} from './style';


const Home = () => {    
    const history = useHistory();
    const {token} = useContext(Context);
    const [navers, setNavers] = useState([]);
    const [naver,setNaver] = useState([]);
    const [naverId, setNaverId] = useState('');
    const [showDelete,setShowDelete] = useState(false);
    const [showMenssage, setShowMenssage] = useState(false);
    const [showDetails, setShowDetails] = useState(false);

    //Busca todos os Navers da API
    const getNavers = async () => {
        api.get('/navers', {
            headers: {Authorization: `Bearer ${token}`}
        }).then(response => {
            setNavers(response.data);
        }).catch(error => {
            console.log(error);
        });
    }

    //Deleta um Naver
    const deleteNaver= async (id) => {
        api.delete(`/navers/${id}`, {
            headers: {Authorization: `Bearer ${token}`}
        }).then(response => {
            console.log(response.data.message);
            getNavers();
            setShowDelete(false);
            setShowMenssage(true);
        }).catch(error => {
            console.log(error);
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
                <HomeListHeader>
                    <h1>Navers</h1>
                    <Button onClick={() => {history.push('/Register')}}>Adicionar Naver</Button>
                </HomeListHeader>
                <UsersList>
                    {navers.map(naver => (
                        <UserCard key={naver.id}>
                            <UserImg>
                                <img src={naver.url} alt="Foto do Naver" onClick={() => modalDetails(naver.id)}/>
                            </UserImg>
                            <h3>{naver.name}</h3>
                            <h3>{naver.job_role}</h3>
                            <CardActions>
                                <MdDelete color="#212121" size={24} onClick={() => modalDeleteNaver(naver.id)}/>
                                <MdModeEdit color="#212121" size={24} onClick={() => {history.push(`/Edit/${naver.id}`)}}/>
                            </CardActions>
                        </UserCard>
                    ))}
                </UsersList>
            </HomeContent>

            {/*Modal de exclusão do Naver*/}
            <Modal openModal={showDelete}>
                <DeleteContent>
                    <Title>Excluir Naver</Title>
                    <p>Tem certeza que deseja excluir este Naver ?</p>
                    <div>
                        <CancelButton onClick={() => {setShowDelete(!showDelete)}}>Cancelar</CancelButton>
                        <Button onClick={() => {deleteNaver(naverId)}}>Excluir</Button>
                    </div>
                </DeleteContent>
            </Modal>

            {/*Modal de menssagem da exclusão*/}
            <Modal openModal={showMenssage}>
                <CloseModal onClick={() => {setShowMenssage(!showMenssage)}}/>
                <Menssage>
                    <Title>Naver Excluido</Title>
                    <p>Naver excluido com sucesso!</p>
                </Menssage>
            </Modal>

            {/*Modal de detlahes de um Naver*/}
            <Modal openModal={showDetails}>
                <CloseModal onClick={() => {setShowDetails(!showDetails)}}/>
                <Details 
                    naver={naver}
                    deleteNaver={() => modalDeleteNaver(naverId)}
                />
            </Modal>

        </Main>
    );
}

export default Home;