import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useAxios from 'axios-hooks';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { FaEye } from 'react-icons/fa';
import { useIntl, FormattedMessage } from 'react-intl';
import messages from './messages';

import { AuthContext } from '../../services/auth';
import { errorMessage } from '../../services/errors';
import { useStateValue } from '../../services/state';
import Api from '../../services/api';

import { CausePreview } from './styles';
import BackButton from '../../components/BackButton';
import Title from '../../components/Title';
import NotificationIcon from '../../components/NotificationIcon';
import CauseCard from '../../components/CauseCard';
import Form from './Form';

const MyCause = () => {
  const intl = useIntl();
  const history = useHistory();
  const auth = useContext(AuthContext);
  const [{ account }] = useStateValue();
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [cities, setCities] = useState([]);

  const form = useForm({
    defaultValues: {}
  });
  const { handleSubmit } = form;

  const [{ loading }, registerCause] = useAxios({
    url: '/causes',
    method: 'POST'
  }, { manual: true });

  const [{ loading: loadingCities }, getCities] = useAxios({
    method: 'GET'
  }, { manual: true });

  useEffect(() => {
    if (!auth.isAuthenticated()) {
      history.push('/');
    }
  });

  const handleRegisterCause = async (values) => {
    try {
      if (values.avatarUpload.length) {
        values.avatar = await uploadImage(values.avatarUpload[0]);
      }
      if (values.imageUpload.length) {
        values.image = await uploadImage(values.imageUpload[0]);
      }
      if (values.bannersUpload[0].length) {
        values.banners[0] = await uploadImage(values.bannersUpload[0][0]);
      }
      if (values.bannersUpload[1].length) {
        values.banners[1] = await uploadImage(values.bannersUpload[1][0]);
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
        <>
          <div className="row justify-content-center mb-4">
            <div className="col-md-6 col-lg-5">
              <CausePreview>
                <CauseCard
                  data={{
                    name: form.watch('name'),
                    avatar: form.watch('avatar'),
                    image: form.watch('image')
                  }}
                />
                <div className="CausePreview__alert">
                  <div className="CausePreview__icon">
                    <FaEye />
                  </div>
                  <p className="CausePreview__text">
                    <FormattedMessage {...messages.preview} />
                  </p>
                </div>
              </CausePreview>
            </div>
          </div>
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
                handleSubmit={handleSubmit(handleRegisterCause)}
                formControl={form}
                loading={loading || loadingUpload}
                cities={cities}
                loadingCities={loadingCities}
                changeState={handleStateChange}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MyCause;
