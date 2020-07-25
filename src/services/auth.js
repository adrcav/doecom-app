import React from 'react';

class Auth {
  constructor () {
    this.accessToken = null;
    this.expiresAt = null;
    this.tokenType = null;
    this.loadSession();
  }

  loadSession () {
    const stored = localStorage.getItem('s');
    if (stored === 'null' || !stored) return;
    const credentials = JSON.parse(atob(stored));
    if(this.checkCredentials(credentials)) {
      this.accessToken = credentials.accessToken;
      this.tokenType = credentials.tokenType;
      this.expiresAt = credentials.expiresAt;
    }
    return;
  }

  checkCredentials (credentials) {
    const now = new Date().getTime();
    return now < credentials.expiresAt;
  }

  setSession (authResult) {
    this.accessToken = authResult.accessToken;
    this.tokenType = authResult.tokenType;
    this.expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
    localStorage.setItem('s', btoa(JSON.stringify(this)));
  }

  getCredentials () {
    return this.tokenType && this.accessToken ? `${this.tokenType} ${this.accessToken}` : null;
  }

  isAuthenticated () {
    return this.checkCredentials({expiresAt: this.expiresAt});
  }

  logout() {
    this.accessToken = null;
    this.tokenType = null;
    this.expiresAt = null;
    localStorage.setItem('s', null);
  }
}

const AuthContext = React.createContext({});

export {
  Auth,
  AuthContext
};
