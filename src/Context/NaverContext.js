import React from 'react';
import {createContext,useState} from 'react';

const Context = createContext();

const NaverProvider = ({children}) => {
    const [naver, setNaver] = useState('');



    return(
        <Context.Provider value={{naver,setNaver}}>
            {children}
        </Context.Provider>
    );
} 

export {Context, NaverProvider};
