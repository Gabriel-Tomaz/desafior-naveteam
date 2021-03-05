import React from 'react';
import {useState, useEffect,useContext} from 'react';
import {MdDelete,MdModeEdit} from 'react-icons/md';

import api from '../../services/api';
import { Context } from '../../Context/AuthContext';

import Navbar from '../../components/Navbar';
import {Main} from '../../styles/global';
import {HomeContent,HomeListHeader,UsersList,AddButton,UserCard,UserImg,CardActions} from './style';


const Home = () => {    
    const {token} = useContext(Context);
    const [navers, setNavers] = useState([]);

    const getUsers = async () => {
        api.get('/navers', {
            headers: {Authorization: `Bearer ${token}`}
        }).then(response => {
            console.log(response.data);
            setNavers(response.data);
        }).catch(error => {
            console.log(error);
        });
    }

    useEffect(() => {
        getUsers();
    },[]);

    return(
        <Main>
            <Navbar />
            <HomeContent>
                <HomeListHeader>
                    <h1>Navers</h1>
                    <AddButton>Adicionar Naver</AddButton>
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
                                <MdDelete color="#212121" size={24} />
                                <MdModeEdit color="#212121" size={24} />
                            </CardActions>
                        </UserCard>
                    ))}
                </UsersList>
            </HomeContent>
        </Main>
    );
}

export default Home;