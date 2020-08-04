import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAxios from 'axios-hooks';
import { useForm } from 'react-hook-form';
import { useIntl, FormattedMessage } from 'react-intl';
import messages from './messages';

import { AuthContext } from '../../services/auth';
import { errorMessage } from '../../services/errors';

import { InputError } from '../../components/styles';
import BackButton from '../../components/BackButton';
import Input from '../../components/Input';
import FormButton from '../../components/FormButton';
import Title from '../../components/Title';

export const RecoverPassword = ({ location, refetchParent }) => {
  const intl = useIntl();
  const history = useHistory();
  const auth = useContext(AuthContext);
  const { register, handleSubmit, errors } = useForm();

  const [{ loading }, request] = useAxios({
    url: '/account/reset-password/request',
    method: 'POST'
  }, { manual: true });

  if (auth.isAuthenticated()) {
    history.push('/');
  }

  const handleRecover = async (values) => {
    try {
      const { data } = await request({ data: values });
      if (data && data.error) throw data.error;
      toast.success(() => (
        <>
          <b><FormattedMessage {...messages.alerts.sent.title} /></b><br />
          <FormattedMessage {...messages.alerts.sent.description} />
        </>
      ), {
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
          <form onSubmit={handleSubmit(handleRecover)}>
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
