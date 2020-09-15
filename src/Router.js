import React, { useEffect, useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import useAxios from 'axios-hooks';
import { toast } from 'react-toastify';
import { useIntl } from 'react-intl';
import messages from './messages';

import { AuthContext } from './services/auth';
import { useStateValue } from './services/state';
import { errorMessage } from './services/errors';

import { margins } from './components/theme';
import Header from './components/Header';
import Footer from './components/Footer';
import HeaderNotification from './components/HeaderNotification';

import GiveSuccess from './components/GiveSuccess';
import RegisterSuccess from './components/RegisterSuccess';

import Main from './containers/Main';
import MyCauses from './containers/MyCauses';
import Cause from './containers/Cause';
import MyCause from './containers/MyCause';
import MyCauseEdit from './containers/MyCause/Edit';
import Give from './containers/Give';
import GiveRate from './containers/GiveRate';
import Login from './containers/Login';
import RecoverPassword from './containers/RecoverPassword';
import ResetPassword from './containers/ResetPassword';
import Register from './containers/Register';
import Verify from './containers/Verify';
import Account from './containers/Account';
import Logout from './containers/Logout';
import PrivacyPolicy from './containers/PrivacyPolicy';
import TermsOfUse from './containers/TermsOfUse';
import NotFound from './containers/NotFound';
import ServiceError from './containers/ServiceError';

const Router = () => {
  const intl = useIntl();
  const auth = useContext(AuthContext);
  const [{ account }, dispatch] = useStateValue();

  const [, loadAccount] = useAxios('/account', { manual: true });
  const [, loadLocale] = useAxios('/locales', { manual: true });
  const [, loadMyCauses] = useAxios('/causes/my-causes', { manual: true });

  const [{ loading: loadingResendVerification }, resendVerification] = useAxios({
    method: 'POST',
    url: '/account/verify/request'
  }, { manual: true });

  useEffect(() => {
    const loadData = async () => {
      const { data: dataAccount } = await loadAccount();
      dispatch({
        type: 'updateAccount',
        value: dataAccount
      });

      const { data: dataMyCauses } = await loadMyCauses();
      dispatch({
        type: 'updateMyCauses',
        value: dataMyCauses
      });
    };

    const loadDataLocale = async () => {
      const { data: dataLocale } = await loadLocale();
      dispatch({
        type: 'updateLocale',
        value: dataLocale
      });
    };

    if (auth.isAuthenticated()) {
      loadData();
    }

    loadDataLocale();
  }, [loadAccount, loadLocale, loadMyCauses, dispatch, auth]);

  const refetchAccount = async () => {
    const { data: dataAccount } = await loadAccount();
    dispatch({
      type: 'updateAccount',
      value: dataAccount
    });
  };

  const refetchMyCauses = async () => {
    const { data: dataMyCauses } = await loadMyCauses();
    dispatch({
      type: 'updateMyCauses',
      value: dataMyCauses
    });
  };

  const handleResendVerification = async () => {
    try {
      const { data } = await resendVerification();
      if (data && data.error) throw data.error;
      toast.success(intl.formatMessage(messages.notifications.confirmEmail.success));
    } catch (error) {
      toast.error(intl.formatMessage(errorMessage(error.code)));
    }
  };

  return (
    <BrowserRouter>
      <Header userInfo={account} />
      <div style={{ marginTop: margins.header }}>
        {account._id && !account.verified && (
          <div className="container">
            <HeaderNotification
              type="alert"
              title={intl.formatMessage(messages.notifications.confirmEmail.title)}
              description={intl.formatMessage(messages.notifications.confirmEmail.description).replace('%ACCOUNT_EMAIL%', account.email)}
              buttonText={intl.formatMessage(messages.notifications.confirmEmail.button)}
              buttonIcon="FaEnvelope"
              buttonTheme="primary-outline"
              buttonOnClick={handleResendVerification}
              buttonLoading={loadingResendVerification}
            />
          </div>
        )}

        <Switch>
          <Route path="/" component={Main} exact />
          <Route
            path="/login"
            render={(props) => (
              <Login
                {...props}
                refetchParent={refetchAccount}
              />
            )}
          />
          <Route path="/recover-password" component={RecoverPassword} />
          <Route path="/reset-password" component={ResetPassword} />
          <Route path="/register/success" component={RegisterSuccess} />
          <Route path="/register" component={Register} />
          <Route
            path="/verify-account"
            exact
            render={(props) => (
              <Verify
                {...props}
                refetchParent={refetchAccount}
              />
            )}
          />
          <Route
            path="/account"
            render={(props) => (
              <Account
                {...props}
                refetchParent={refetchAccount}
              />
            )}
          />
          <Route
            path="/my-causes"
            render={(props) => (
              <MyCauses
                {...props}
                refetchParent={refetchMyCauses}
              />
            )}
          />
          <Route path="/cause/new" component={MyCause} exact />
          <Route path="/cause/:id/edit" component={MyCauseEdit} exact />
          <Route path="/cause/:id" component={Cause} />
          <Route path="/give/success" component={GiveSuccess} />
          <Route path="/give/:id" component={Give} />
          <Route path="/donation/:id/rate" component={GiveRate} />
          <Route path="/logout" component={Logout} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/terms-of-use" component={TermsOfUse} />
          <Route path="/unavailable" component={ServiceError} exact />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
