import React from 'react';
import {useState, useEffect,useContext} from 'react';
import {MdDelete,MdModeEdit} from 'react-icons/md';
import {useHistory} from 'react-router-dom';

import api from '../../services/api';
import { Context } from '../../Context/AuthContext';

import Navbar from '../../components/Navbar';
import Modal from '../../components/Modal';
import CloseModal from '../../components/CloseModal';
import {Main,Button} from '../../styles/global';
import {HomeContent,HomeListHeader,UsersList,UserCard,UserImg,CardActions,DeleteContent,CancelButton,Menssage} from './style';


const Home = () => {    
    const history = useHistory();
    const {token} = useContext(Context);
    const [navers, setNavers] = useState([]);
    const [naverId, setNaverId] = useState();
    const [showDelete,setShowDelete] = useState(false);
    const [showMenssage, setShowMenssage] = useState(false);

    const getUsers = async () => {
        api.get('/navers', {
            headers: {Authorization: `Bearer ${token}`}
        }).then(response => {
            setNavers(response.data);
        }).catch(error => {
            console.log(error);
        });
    }

    const modalDeleteNaver = (id) => {
        setNaverId(id);
        setShowDelete(true);
    }

    const deleteNaver= async (id) => {
        api.delete(`/navers/${id}`, {
            headers: {Authorization: `Bearer ${token}`}
        }).then(response => {
            console.log(response.data.message);
            getUsers();
            setShowDelete(false);
            setShowMenssage(true);
        }).catch(error => {
            console.log(error);
        });
    }

    useEffect(() => {
        getUsers();
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
                                <img src={naver.url} alt="Foto do Naver" />
                            </UserImg>
                            <h3>{naver.name}</h3>
                            <h3>{naver.job_role}</h3>
                            <CardActions>
                                <MdDelete color="#212121" size={24} onClick={() => modalDeleteNaver(naver.id)}/>
                                <MdModeEdit color="#212121" size={24} />
                            </CardActions>
                        </UserCard>
                    ))}
                </UsersList>
            </HomeContent>

            {/*Modal de exclusão do Naver*/}
            <Modal openModal={showDelete}>
                <DeleteContent>
                    <h2>Excluir Naver</h2>
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
                    <h2>Naver Excluido</h2>
                    <p>Naver excluido com sucesso!</p>
                </Menssage>
            </Modal>
        </Main>
    );
}

export default Home;