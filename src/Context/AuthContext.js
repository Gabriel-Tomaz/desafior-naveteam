import React from 'react';
import {createContext,useState,useEffect} from 'react';

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

    return(
        <Context.Provider value={{token,setToken}}>
            {children}
        </Context.Provider>
    );
} 

export {Context, AuthProvider};
