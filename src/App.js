import React from 'react';

import './App.css';

import Router from './Router';
import { Auth, AuthContext } from './services/auth';
import { StateProvider, initialState, reducer } from './services/state';

import { userInfo } from './util/data';

const auth = new Auth();

if (auth.isAuthenticated()) {
  initialState.account = userInfo;
}

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
