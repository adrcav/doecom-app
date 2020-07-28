import React, { useEffect, useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import useAxios from 'axios-hooks';
import ReactGA from 'react-ga';
import { margins } from './components/theme';

import { AuthContext } from './services/auth';
import { useStateValue } from './services/state';

import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';
// import { errorMessage } from './services/errors';

import GiveSuccess from './components/GiveSuccess';
import RegisterSuccess from './components/RegisterSuccess';

import Main from './containers/Main';
import MyCauses from './containers/MyCauses';
import Cause from './containers/Cause';
import CauseRegister from './containers/CauseRegister';
import Give from './containers/Give';
import Login from './containers/Login';
import Register from './containers/Register';
import Account from './containers/Account';
import Logout from './containers/Logout';
import PrivacyPolicy from './containers/PrivacyPolicy';
import TermsOfUse from './containers/TermsOfUse';

const { REACT_APP_GA_ID } = process.env;

const Router = () => {
  const auth = useContext(AuthContext);
  let loading = false;
  const [{ account }, dispatch] = useStateValue();
  const [{ error }, loadAccount] = useAxios('/account', { manual: true });

  ReactGA.initialize(REACT_APP_GA_ID);
  ReactGA.pageview(window.location.pathname + window.location.search);

  useEffect(() => {
    const loadData = async () => {
      const { data: dataAccount } = await loadAccount();
      dispatch({
        type: 'updateAccount',
        value: dataAccount
      });
    };

    if (auth.isAuthenticated()) {
      loadData();
    }
  }, [loadAccount, dispatch, auth]);

  if (loading) return (<Loading />);

  if (error) return (
    <p>Error!</p>
  );

  return (
    <BrowserRouter>
      <Header userInfo={account} />
      <div style={{ marginTop: margins.header }}>
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/login" component={Login} />
          <Route path="/register/success" component={RegisterSuccess} />
          <Route path="/register" component={Register} />
          <Route path="/account" component={Account} />
          <Route path="/my-causes" component={MyCauses} />
          <Route path="/cause/new" component={CauseRegister} exact />
          <Route path="/cause/:id" component={Cause} />
          <Route path="/give/success" component={GiveSuccess} />
          <Route path="/give/:id" component={Give} />
          <Route path="/logout" component={Logout} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/terms-of-use" component={TermsOfUse} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
