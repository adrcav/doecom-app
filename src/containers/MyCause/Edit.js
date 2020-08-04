import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useAxios from 'axios-hooks';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import { useIntl, FormattedMessage } from 'react-intl';
import messages from './messages';

import { AuthContext } from '../../services/auth';
import { errorMessage } from '../../services/errors';
import { useStateValue } from '../../services/state';
import Api from '../../services/api';

import { LoadingSpinner } from '../../components/styles';
import BackButton from '../../components/BackButton';
import Title from '../../components/Title';
import Form from './Form';
import FormButton from '../../components/FormButton';

const MyCauseEdit = ({ match }) => {
  const intl = useIntl();
  const history = useHistory();
  const auth = useContext(AuthContext);
  const { id } = match.params;
  const [{ account }] = useStateValue();
  const [loadingUpload, setLoadingUpload] = useState(false);

  if (!auth.isAuthenticated() || !id) {
    history.push('/');
  }

  const [{ loading, data: cause }] = useAxios({
    url: `/causes/${id}`
  });

  const form = useForm({
    defaultValues: {}
  });
  const { reset, handleSubmit } = form;

  const [{ loading: loadingUpdate }, updateCause] = useAxios({
    url: `/causes/${id}`,
    method: 'PATCH'
  }, { manual: true });

  const [{ loading: loadingRemove }, removeLink] = useAxios({
    url: `/causes/${id}`,
    method: 'DELETE'
  }, { manual: true });

  useEffect(() => {
    if (cause) {
      reset({...cause});
    }
  }, [cause, reset]);

  if (account._id && cause && account._id !== cause.user._id) {
    history.push('/');
  }

  const handleUpdateCause = async (values) => {
    try {
      if (values.avatar && typeof values.avatar !== 'string') {
        values.avatar = await uploadImage(values.avatar);
      }
      if (values.image && typeof values.image !== 'string') {
        values.image = await uploadImage(values.image);
      }
      const { data } = await updateCause({ data: values });
      if (data && data.error) throw data.error;
      toast.success(intl.formatMessage(messages.alerts.updated));
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

  const handleRemoveLink = async () => {
    try {
      const { data } = await removeLink();
      if (data && data.error) throw data.error;
      toast.success(intl.formatMessage(messages.alerts.removed));
      history.push('/');
    } catch (error) {
      toast.error(intl.formatMessage(errorMessage(error.code)));
    }
  };

  const handleRemove = () => {
    swal({
      title: intl.formatMessage(messages.edit.alertRemove.title),
      text: intl.formatMessage(messages.edit.alertRemove.description),
      icon: 'warning',
      buttons: [intl.formatMessage(messages.edit.alertRemove.cancelButton), intl.formatMessage(messages.edit.alertRemove.confirmButton)],
      dangerMode: true,
    })
    .then((confirm) => {
      if (confirm) {
        handleRemoveLink();
      }
    })
  };

  return (
    <div className="container mb-4">
      <BackButton />

      <Title value={intl.formatMessage(messages.edit.title)} />

      {loading ? (
        <div className="row justify-content-center">
          <LoadingSpinner />
        </div>
      ) : (
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
            {cause && (
              <>
                <Form
                  handleSubmit={handleSubmit(handleUpdateCause)}
                  formControl={form}
                  loading={loadingUpdate || loadingUpload}
                />
                <hr/>
                <FormButton
                  theme="danger"
                  value={intl.formatMessage(messages.edit.removeButton)}
                  onClick={handleRemove}
                  loading={loadingRemove}
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCauseEdit;
