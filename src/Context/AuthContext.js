import React from 'react';
import {createContext,useState,useEffect} from 'react';
import api from '../services/api';

const Context = createContext();

const AuthProvider = ({children}) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [token, setToken] = useState('');

    useEffect(() => {
        if(token){
            api.defaults.headers.Authorization = `Bearer ${token}`;
            setAuthenticated(true);
        }
    },[token]);

    return(
        <Context.Provider value={{authenticated,setAuthenticated,setToken}}>
            {children}
        </Context.Provider>
    );
} 

export {Context, AuthProvider};
