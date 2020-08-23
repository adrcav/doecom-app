import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useForm, Controller } from 'react-hook-form';
import useAxios from 'axios-hooks';
import { useIntl, FormattedMessage } from 'react-intl';
import messages from './messages';

import { AuthContext } from '../../services/auth';
import { useStateValue } from '../../services/state';
import { errorMessage } from '../../services/errors';
import Api from '../../services/api';

import { InputError } from '../../components/styles';
import BackButton from '../../components/BackButton';
import Input from '../../components/Input';
import Select from '../../components/Select';
import FormButton from '../../components/FormButton';
import Title from '../../components/Title';
import Label from '../../components/Label';
import ImageUpload from '../../components/ImageUpload';

import { states as dataStates } from '../../util/data';

const Account = ({ refetchParent }) => {
  const intl = useIntl();
  const history = useHistory();
  const auth = useContext(AuthContext);
  const [{ account }] = useStateValue();
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [cities, setCities] = useState([]);

  const [{ loading }, updateAccount] = useAxios({
    url: '/account',
    method: 'PATCH'
  }, { manual: true });

  const [{ loading: loadingCities }, getCities] = useAxios({
    method: 'GET'
  }, { manual: true });

  if (!auth.isAuthenticated()) {
    history.push('/');
  }

  const states = dataStates.map(state => ({ value: state.uf, text: state.name }));

  const form = useForm({
    defaultValues: {}
  });
  const {
    register,
    reset,
    watch,
    errors,
    handleSubmit
  } = form;

  useEffect(() => {
    (async function () {
      if (account._id) {
        const values = { ...account };
        values.state = null;
        values.city = null;
        reset(values);

        try {
          const { data: response } = await getCities(`/locales/states/${account.state}/cities`);
          if (response && response.error) throw response.error;
          setCities(response.map(city => ({ value: city.nome, text: city.nome })));
        } catch (error) {
          toast.error(intl.formatMessage(errorMessage(error.code)));
        }

        reset(account);
      }
    })();
  }, [account, reset, getCities, intl]);

  const handleAccount = async (values) => {
    try {
      if (values.pictureUpload.length) {
        values.picture = await uploadImage(values.pictureUpload[0]);
      }
      const { data } = await updateAccount({ data: values });
      if (data && data.error) throw data.error;
      toast.success(intl.formatMessage(messages.alerts.updated));
      await refetchParent();
    } catch (error) {
      toast.error(intl.formatMessage(errorMessage(error.code)));
    }
  };

  const uploadImage = async (image) => {
    const api = Api.instance;
    setLoadingUpload(true);
    const { data } = await api.uploadImage(image);
    setLoadingUpload(false);
    if (data && data.error) throw data.error;
    return data.link;
  };

  const handleStateChange = async (event, state = '') => {
    const value = event.target.value || state;
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

  return (
    <div className="container mb-4">
      <BackButton />

      <Title value={intl.formatMessage(messages.title)} />
      <p style={{
        textAlign: 'right',
        color: '#999',
        fontStyle: 'italic',
        fontSize: '.9rem',
        margin: '-10px 0 10px'
      }}>(*) <FormattedMessage {...messages.fieldRequired} /></p>

      <div className="row justify-content-center">
        <div className="col-lg-6">
          <form onSubmit={handleSubmit(handleAccount)}>
            <div className="form-group">
              <Label
                value={intl.formatMessage(messages.pictureLabel)}
                help={`${intl.formatMessage(messages.recommended)} 150x150 pixels`}
              />
              <Controller
                control={form.control}
                name="picture"
                render={({ onChange }) => (
                  <ImageUpload
                    fieldName="picture"
                    fieldNameFile="pictureUpload"
                    value={watch('picture')}
                    setValue={form.setValue}
                    handleChange={(value) => {
                      onChange(URL.createObjectURL(value[0]));
                      form.setValue('pictureUpload', value);
                    }}
                    width="100px"
                  />
                )}
              />
              <input
                type="file"
                name="pictureUpload"
                ref={register()}
                accept=".png, .jpg, .jpeg"
                style={{ display: 'none' }}
              />
            </div>

            <div className="form-group">
              <Input
                label={`${intl.formatMessage(messages.nameLabel)} *`}
                type="text"
                name="name"
                className="form-control"
                placeholder={intl.formatMessage(messages.nameDescription)}
                ref={register({ required: true })}
                error={errors.name}
              />
              {errors.name && (
                <InputError>
                  <FormattedMessage {...messages.nameIsRequired} />
                </InputError>
              )}
            </div>

            <div className="form-group">
              <Input
                label={`${intl.formatMessage(messages.emailLabel)} *`}
                type="email"
                name="email"
                className="form-control"
                placeholder={intl.formatMessage(messages.emailDescription)}
                ref={register({ required: account.verified })}
                error={errors.email}
                disabled={account.verified}
              />
              {errors.email && (
                <InputError>
                  <FormattedMessage {...messages.emailIsRequired} />
                </InputError>
              )}
            </div>

            <div className="row">
              <div className="col-5">
                <div className="form-group">
                  <Select
                    label={`${intl.formatMessage(messages.stateLabel)} *`}
                    name="state"
                    className="form-control"
                    placeholderValue={intl.formatMessage(messages.stateDescription)}
                    options={states}
                    ref={register({ required: true })}
                    error={errors.state}
                    onChange={handleStateChange}
                    loadingOptions={loadingCities}
                  />
                  {errors.state && (
                    <InputError>
                      <FormattedMessage {...messages.stateIsRequired} />
                    </InputError>
                  )}
                </div>
              </div>
              <div className="col-7">
                <div className="form-group">
                  <Select
                    label={`${intl.formatMessage(messages.cityLabel)} *`}
                    name="city"
                    className="form-control"
                    placeholder={intl.formatMessage(messages.nameDescription)}
                    options={cities}
                    ref={register({ required: true })}
                    error={errors.city}
                    loadingOptions={loadingCities}
                  />
                  {errors.city && (
                    <InputError>
                      <FormattedMessage {...messages.cityIsRequired} />
                    </InputError>
                  )}
                </div>
              </div>
            </div>

            <div className="form-group">
              <Input
                label={intl.formatMessage(messages.passwordLabel)}
                type="password"
                name="password"
                className="form-control"
                ref={register()}
                error={errors.password || errors.confirmPassword?.type === 'validate' ? errors.confirmPassword : ''}
              />
              {errors.confirmPassword?.type === 'validate' && (
                <InputError>
                  <FormattedMessage {...messages.passwordsDontMatch} />
                </InputError>
              )}
            </div>

            <div className="form-group">
              <Input
                label={intl.formatMessage(messages.confirmPasswordLabel)}
                type="password"
                name="confirmPassword"
                className="form-control"
                ref={register({
                  validate: (value) => value === watch('password') || 'Passwords don\'t match'
                })}
                error={errors.confirmPassword}
              />
              {errors.confirmPassword?.type === 'validate' && (
                <InputError>
                  <FormattedMessage {...messages.passwordsDontMatch} />
                </InputError>
              )}
            </div>

            <FormButton
              type="submit"
              theme="primary"
              value={intl.formatMessage(messages.buttonSubmit)}
              loading={loading || loadingUpload}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Account;
