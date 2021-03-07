import React from 'react';

import Default from './styles/default';
import Routes from './routes';
import {AuthProvider} from './Context/AuthContext';
import {NaverProvider} from './Context/NaverContext';
 
const App = () => {
  return(
    <AuthProvider>
      <NaverProvider>
        <Default />
        <Routes />
      </NaverProvider>
    </AuthProvider>
  );
}

export default App;