import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAxios from 'axios-hooks';
import { toast } from 'react-toastify';
import { useIntl, FormattedMessage } from 'react-intl';
import messages from './messages';

import { AuthContext } from '../../services/auth';
import { errorMessage } from '../../services/errors';

import { InputError } from '../../components/styles';
import BackButton from '../../components/BackButton';
import Input from '../../components/Input';
import Select from '../../components/Select';
import FormButton from '../../components/FormButton';
import Title from '../../components/Title';
import RegisterTerms from './terms';

import { states as dataStates } from '../../util/data';

export const Register = () => {
  const intl = useIntl();
  const history = useHistory();
  const auth = useContext(AuthContext);
  const { register, watch, handleSubmit, errors } = useForm();
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [cities, setCities] = useState([]);

  const [{ loading }, registerAccount] = useAxios({
    url: '/account/register',
    method: 'POST'
  }, { manual: true });

  const [{ loading: loadingCities }, getCities] = useAxios({
    method: 'GET'
  }, { manual: true });

  const states = dataStates.map(state => ({ value: state.uf, text: state.name }));

  useEffect(() => {
    if (auth.isAuthenticated()) {
      history.push('/');
    }
  }, [auth, history]);

  const handleRegister = async (values) => {
    try {
      values.language = window.navigator.language;
      const { data } = await registerAccount({ data: values });
      if (data && data.error) throw data.error;
      history.push('/register/success');
    } catch (error) {
      toast.error(intl.formatMessage(errorMessage(error.code)));
    }
  };

  const handleStateChange = async (event) => {
    const value = event.target.value;
    if (!value || !value.length) {
      setCities([]);
      return false;
    }

    try {
      const { data } = await getCities(`/locales/states/${value}/cities`);
      if (data && data.error) throw data.error;
      setCities(data.map(city => ({ value: city.nome, text: city.nome })));
    } catch (error) {
      toast.error(intl.formatMessage(errorMessage(error.code)));
    }
  };

  const agreeTerms = () => {
    setAgreedTerms(true);
  };

  if (!agreedTerms) return <RegisterTerms onClick={agreeTerms} />;

  return (
    <div className="container mb-4">
      <BackButton />

      <Title value={intl.formatMessage(messages.form.title)} />
      <p style={{
        textAlign: 'right',
        color: '#999',
        fontStyle: 'italic',
        fontSize: '.9rem',
        margin: '-10px 0 10px'
      }}>(*) <FormattedMessage {...messages.form.fieldRequired} /></p>

      <div className="row justify-content-center">
        <div className="col-lg-6">
          <form onSubmit={handleSubmit(handleRegister)}>
            <div className="form-group">
              <Input
                label={`${intl.formatMessage(messages.form.nameLabel)} *`}
                type="text"
                name="name"
                className="form-control"
                placeholder={intl.formatMessage(messages.form.nameDescription)}
                ref={register({ required: true })}
                error={errors.name}
              />
              {errors.name && (
                <InputError>
                  <FormattedMessage {...messages.form.nameIsRequired} />
                </InputError>
              )}
            </div>

            <div className="form-group">
              <Input
                label={`${intl.formatMessage(messages.form.emailLabel)} *`}
                type="email"
                name="email"
                className="form-control"
                placeholder={intl.formatMessage(messages.form.emailDescription)}
                ref={register({ required: true })}
                error={errors.email}
              />
              {errors.email && (
                <InputError>
                  <FormattedMessage {...messages.form.emailIsRequired} />
                </InputError>
              )}
            </div>

            <div className="row">
              <div className="col-5">
                <div className="form-group">
                  <Select
                    label={`${intl.formatMessage(messages.form.stateLabel)} *`}
                    name="state"
                    className="form-control"
                    placeholderValue={intl.formatMessage(messages.form.stateDescription)}
                    options={states}
                    ref={register({ required: true })}
                    error={errors.state}
                    onChange={handleStateChange}
                  />
                  {errors.state && (
                    <InputError>
                      <FormattedMessage {...messages.form.stateIsRequired} />
                    </InputError>
                  )}
                </div>
              </div>
              <div className="col-7">
                <div className="form-group">
                  <Select
                    label={`${intl.formatMessage(messages.form.cityLabel)} *`}
                    name="city"
                    className="form-control"
                    placeholderValue={intl.formatMessage(messages.form.cityDescription)}
                    options={cities}
                    ref={register({ required: true })}
                    error={errors.city}
                    loadingOptions={loadingCities}
                  />
                  {errors.city && (
                    <InputError>
                      <FormattedMessage {...messages.form.cityIsRequired} />
                    </InputError>
                  )}
                </div>
              </div>
            </div>

            <div className="form-group">
              <Input
                label={`${intl.formatMessage(messages.form.passwordLabel)} *`}
                type="password"
                name="password"
                className="form-control"
                placeholder={intl.formatMessage(messages.form.passwordDescription)}
                ref={register({ required: true })}
                error={errors.password || errors.confirmPassword?.type === 'validate' ? errors.confirmPassword : ''}
              />
              {errors.password?.type === 'required' && (
                <InputError>
                  <FormattedMessage {...messages.form.passwordIsRequired} />
                </InputError>
              )}
              {errors.confirmPassword?.type === 'validate' && (
                <InputError>
                  <FormattedMessage {...messages.form.passwordsDontMatch} />
                </InputError>
              )}
            </div>

            <div className="form-group">
              <Input
                label={`${intl.formatMessage(messages.form.confirmPasswordLabel)} *`}
                type="password"
                name="confirmPassword"
                className="form-control"
                placeholder={intl.formatMessage(messages.form.confirmPasswordDescription)}
                ref={register({
                  required: true,
                  validate: (value) => value === watch('password') || 'Passwords don\'t match'
                })}
                error={errors.confirmPassword}
              />
              {errors.password?.type === 'required' && (
                <InputError>
                  <FormattedMessage {...messages.form.passwordIsRequired} />
                </InputError>
              )}
              {errors.confirmPassword?.type === 'validate' && (
                <InputError>
                  <FormattedMessage {...messages.form.passwordsDontMatch} />
                </InputError>
              )}
            </div>

            <FormButton
              type="submit"
              theme="primary"
              value={intl.formatMessage(messages.form.buttonSubmit)}
              loading={loading}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
