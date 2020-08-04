import React from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAxios from 'axios-hooks';
import { useForm } from 'react-hook-form';
import { useIntl, FormattedMessage } from 'react-intl';
import messages from './messages';

import { errorMessage } from '../../services/errors';

import { InputError } from '../../components/styles';
import BackButton from '../../components/BackButton';
import Input from '../../components/Input';
import FormButton from '../../components/FormButton';
import Title from '../../components/Title';

export const RecoverPassword = ({ location, refetchParent }) => {
  const intl = useIntl();
  const history = useHistory();
  const { register, watch, handleSubmit, errors } = useForm();

  const [{ loading }, reset] = useAxios({
    url: '/account/reset-password',
    method: 'POST'
  }, { manual: true });

  const params = new URLSearchParams(location.search);
  const token = params.get('token');

  const handleResetPassword = async (values) => {
    try {
      const { data } = await reset({ data: values });
      if (data && data.error) throw data.error;
      toast.success(intl.formatMessage(messages.alerts.success), {
        onClose: () => history.push('/login')
      });
    } catch (error) {
      toast.error(intl.formatMessage(errorMessage(error.code)));
    }
  };


  return (
    <div className="container">
      <BackButton />

      <Title value={intl.formatMessage(messages.title)} />

      <div className="row justify-content-center">
        <div className="col-lg-6">
          <form onSubmit={handleSubmit(handleResetPassword)}>
            <input
              type="hidden"
              name="token"
              value={token}
              ref={register()}
            />

            <div className="form-group">
              <Input
                label={intl.formatMessage(messages.passwordLabel)}
                type="password"
                name="password"
                icon="FaLock"
                className="form-control"
                ref={register({ required: true })}
                error={errors.password || errors.confirmPassword?.type === 'validate' ? errors.confirmPassword : ''}
              />
              {errors.password?.type === 'required' && (
                <InputError>
                  <FormattedMessage {...messages.passwordIsRequired} />
                </InputError>
              )}
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
                icon="FaLock"
                className="form-control"
                ref={register({
                  required: true,
                  validate: (value) => value === watch('password') || 'Passwords don\'t match'
                })}
                error={errors.confirmPassword}
              />
              {errors.confirmPassword?.type === 'required' && (
                <InputError>
                  <FormattedMessage {...messages.passwordIsRequired} />
                </InputError>
              )}
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
              loading={loading}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default RecoverPassword;
