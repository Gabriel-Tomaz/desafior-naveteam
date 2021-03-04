import React from 'react';

import Default from './styles/default';
import Routes from './routes';
import {AuthProvider} from './Context/AuthContext';

const App = () => {
  return(
    <AuthProvider>
      <Default />
      <Routes />
    </AuthProvider>
  );
}

export default App;