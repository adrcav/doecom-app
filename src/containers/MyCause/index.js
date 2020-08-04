import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useAxios from 'axios-hooks';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useIntl, FormattedMessage } from 'react-intl';
import messages from './messages';

import { AuthContext } from '../../services/auth';
import { errorMessage } from '../../services/errors';
import { useStateValue } from '../../services/state';
import Api from '../../services/api';

import BackButton from '../../components/BackButton';
import Title from '../../components/Title';
import NotificationIcon from '../../components/NotificationIcon';
import Form from './Form';

const MyCause = () => {
  const intl = useIntl();
  const history = useHistory();
  const auth = useContext(AuthContext);
  const [{ account }] = useStateValue();
  const [loadingUpload, setLoadingUpload] = useState(false);

  const form = useForm({
    defaultValues: {}
  });
  const { handleSubmit } = form;

  const [{ loading }, registerCause] = useAxios({
    url: '/causes',
    method: 'POST'
  }, { manual: true });

  useEffect(() => {
    if (!auth.isAuthenticated()) {
      history.push('/');
    }
  });

  const handleRegisterCause = async (values) => {
    try {
      if (values.avatar && typeof values.avatar !== 'string') {
        values.avatar = await uploadImage(values.avatar);
      }
      if (values.image && typeof values.image !== 'string') {
        values.image = await uploadImage(values.image);
      }
      const { data } = await registerCause({ data: values });
      if (data && data.error) throw data.error;
      toast.success(intl.formatMessage(messages.alerts.created));
      history.push(`/cause/${data._id}`);
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

  return (
    <div className="container mb-4">
      <BackButton />

      <Title value={intl.formatMessage(messages.title)} />

      {account && !account.verified && (
        <div className="row justify-content-center mt-3">
          <div className="col-lg-6 col-xl-5">
            <NotificationIcon theme="danger" icon="FaExclamationTriangle" />

            <p style={{
              color: '#666666',
              textAlign: 'center',
              marginBottom: '40px',
              padding: '0 15px'
            }}>
              <FormattedMessage {...messages.errors.accountNotVerified} />
            </p>
          </div>
        </div>
      )}

      {account && account.verified && (
        <div className="row justify-content-center">
          <div className="col-12">
            <p style={{
              textAlign: 'right',
              color: '#999',
              fontStyle: 'italic',
              fontSize: '.9rem',
              margin: '-10px 0 10px'
            }}>(*) <FormattedMessage {...messages.form.fieldRequired} /></p>
          </div>

          <div className="col-lg-6">
            <Form
              formControl={form}
              handleSubmit={handleSubmit(handleRegisterCause)}
              loading={loading || loadingUpload}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCause;
