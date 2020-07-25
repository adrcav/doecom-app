import React, { useEffect, useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useIntl, FormattedMessage } from 'react-intl';
import messages from './messages';

import { AuthContext } from '../../services/auth';
import { useStateValue } from '../../services/state';

import BackButton from '../../components/BackButton';
import Input from '../../components/Input';
import FormButton from '../../components/FormButton';
import Title from '../../components/Title';

import { userInfo } from '../../util/data';

export const Login = ({ location }) => {
  const intl = useIntl();
  const history = useHistory();
  const auth = useContext(AuthContext);
  const [, dispatch] = useStateValue();
  let redirectUrl = '';

  if (location.state) {
    redirectUrl = location.state.redirectUrl || null;
  }

  useEffect(() => {
    if (auth.isAuthenticated()) {
      history.push('/');
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      user: 'id-hash-account-1',
      accessToken: 'token-example',
      expiresIn: new Date().getTime(),
      tokenType: 'Bearer'
    };
    auth.setSession(data);

    const dataAccount = userInfo;
    dispatch({
      type: 'updateAccount',
      value: dataAccount
    });

    history.push(redirectUrl || '/');
  };

  return (
    <div className="container">
      <BackButton />

      <Title value={intl.formatMessage(messages.title)} />

      <div className="row justify-content-center">
        <div className="col-lg-6">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <Input
                label={intl.formatMessage(messages.emailLabel)}
                type="email"
                name="email"
                icon="FaRegEnvelope"
                className="form-control"
                placeholder={intl.formatMessage(messages.emailDescription)}
                required={true}
              />
            </div>

            <div className="form-group">
              <Input
                label={intl.formatMessage(messages.passwordLabel)}
                type="password"
                name="password"
                icon="FaLock"
                className="form-control"
                placeholder={intl.formatMessage(messages.passwordDescription)}
                required={true}
              />
            </div>

            <FormButton
              type="submit"
              theme="primary"
              value={intl.formatMessage(messages.buttonSubmit)}
            />
          </form>

          <p style={{
            fontSize: '.9rem',
            color: '#666666',
            textAlign: 'center',
            marginTop: '15px'
          }}>
            <FormattedMessage {...messages.noAccount.question} />
            <NavLink to="/register" style={{ fontWeight: 500, marginLeft: '3px' }}>
              <FormattedMessage {...messages.noAccount.signUp} />
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
