import React from 'react';
import {createContext,useState} from 'react';

const NaverContext = createContext();

const NaverProvider = ({children}) => {
    const [naver, setNaver] = useState('');



    return(
        <NaverContext.Provider value={{naver,setNaver}}>
            {children}
        </NaverContext.Provider>
    );
} 

export {NaverContext, NaverProvider};
