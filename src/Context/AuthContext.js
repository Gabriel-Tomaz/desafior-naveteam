import React from 'react';
import {createContext,useState,useEffect} from 'react';
import api from '../services/api';

const Context = createContext();

const AuthProvider = ({children}) => {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const tokenAux = localStorage.getItem('token');
        if(tokenAux){
            setToken(tokenAux);
        }else{
            setToken('');
        }
    },[]);

    useEffect(() => {
        if(token){
            api.defaults.headers.Authorization = `Bearer ${token}`;
        }
    },[token]);

    return(
        <Context.Provider value={{token,setToken}}>
            {children}
        </Context.Provider>
    );
} 

export {Context, AuthProvider};
