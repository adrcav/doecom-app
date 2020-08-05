import React from 'react';
import { configure } from 'axios-hooks';

import './styles/global.css';
import './styles/custom.css';

import Router from './Router';
import { Auth, AuthContext } from './services/auth';
import { StateProvider, initialState, reducer } from './services/state';
import Api from './services/api';
import { setup } from './services/beacon';

const auth = new Auth();
const api = new Api(auth);

setup();

configure({
  cache: false,
  axios: api.axios
});

function App() {
  return (
    <AuthContext.Provider value={auth}>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Router />
      </StateProvider>
    </AuthContext.Provider>
  );
}

export default App;
