import React, { useEffect, useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAxios from 'axios-hooks';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useIntl, FormattedMessage } from 'react-intl';
import messages from './messages';

import { AuthContext } from '../../services/auth';
import { errorMessage } from '../../services/errors';

import { InputError } from '../../components/styles';
import BackButton from '../../components/BackButton';
import Label from '../../components/Label';
import Input from '../../components/Input';
import FormButton from '../../components/FormButton';
import Title from '../../components/Title';

export const Login = ({ location, refetchParent }) => {
  const intl = useIntl();
  const history = useHistory();
  const auth = useContext(AuthContext);
  const { register, handleSubmit, errors } = useForm();
  let redirectUrl = '';

  const [{ loading }, login] = useAxios({
    url: '/account/login',
    method: 'POST'
  }, { manual: true });

  if (location.state) {
    redirectUrl = location.state.redirectUrl || null;
  }

  useEffect(() => {
    if (auth.isAuthenticated()) {
      history.push('/');
    }
  });

  const handleLogin = async (values) => {
    const { data } = await login({ data: values });

    if (data && data.error) {
      toast.error(intl.formatMessage(errorMessage(data.error.code)));
      return false;
    }

    auth.setSession(data);
    await refetchParent();
    history.push(redirectUrl || '/');
  };

  return (
    <div className="container">
      <BackButton />

      <Title value={intl.formatMessage(messages.title)} />

      <div className="row justify-content-center">
        <div className="col-lg-6">
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="form-group">
              <Input
                label={intl.formatMessage(messages.emailLabel)}
                type="email"
                name="email"
                icon="FaRegEnvelope"
                className="form-control"
                placeholder={intl.formatMessage(messages.emailDescription)}
                ref={register({ required: true })}
                error={errors.email}
              />
              {errors.email && (
                <InputError>
                  <FormattedMessage {...messages.emailIsRequired} />
                </InputError>
              )}
            </div>

            <div className="form-group">
              <div className="d-flex justify-content-between">
                <Label value={intl.formatMessage(messages.passwordLabel)} error={errors.password} />
                <NavLink to="/recover-password" style={{ fontSize: '.9rem', fontWeight: 500, marginLeft: '3px' }}>
                  <FormattedMessage {...messages.forgotPassword} />
                </NavLink>
              </div>

              <Input
                type="password"
                name="password"
                icon="FaLock"
                className="form-control"
                placeholder={intl.formatMessage(messages.passwordDescription)}
                ref={register({ required: true })}
                error={errors.password}
              />
              {errors.password && (
                <InputError>
                  <FormattedMessage {...messages.passwordIsRequired} />
                </InputError>
              )}
            </div>

            <FormButton
              type="submit"
              theme="primary"
              value={intl.formatMessage(messages.buttonSubmit)}
              loading={loading}
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
