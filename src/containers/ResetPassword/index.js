import React from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAxios from 'axios-hooks';
import { useIntl } from 'react-intl';
import messages from './messages';

import { errorMessage } from '../../services/errors';

import BackButton from '../../components/BackButton';
import Input from '../../components/Input';
import FormButton from '../../components/FormButton';
import Title from '../../components/Title';

export const RecoverPassword = ({ location, refetchParent }) => {
  const intl = useIntl();
  const history = useHistory();

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
          <form onSubmit={handleResetPassword}>
            <input
              type="hidden"
              name="token"
              value={token}
            />

            <div className="form-group">
              <Input
                label={intl.formatMessage(messages.passwordLabel)}
                type="password"
                name="password"
                icon="FaLock"
                className="form-control"
                required={true}
              />
            </div>
            <div className="form-group">
              <Input
                label={intl.formatMessage(messages.confirmPasswordLabel)}
                type="password"
                name="confirmPassword"
                icon="FaLock"
                className="form-control"
                required={true}
              />
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
