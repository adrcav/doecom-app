import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FaCheckCircle, FaCalendarAlt, FaUser, FaPager, FaEnvelope } from 'react-icons/fa';
import useAxios from 'axios-hooks';
import { toast } from 'react-toastify';
import moment from 'moment';
import { useIntl, FormattedMessage } from 'react-intl';
import messages from './messages';

import { CauseImage, CauseTitleSection, CauseFeature } from './styles';

import { colors } from '../../components/theme';
import { LoadingSpinner } from '../../components/styles';
import BackButton from '../../components/BackButton';
import FormButton from '../../components/FormButton';
import CauseInfo from '../../components/CauseInfo';

import { visit } from '../../services/beacon';

const Cause = ({ match }) => {
  const intl = useIntl();
  const history = useHistory();
  const { id } = match.params;

  const [{ loading, error, data: cause }] = useAxios({
    url: `/causes/${id}`
  });

  useEffect(() => {
    const setVisit = async (page) => {
      await visit(page._id);
    };
    if (cause) {
      setVisit(cause);
    }
  }, [cause]);

  const handleDonate = () => history.push(`/give/${cause._id}`);

  if (error) {
    toast.error(intl.formatMessage(messages.alerts.notFound));
    history.push('/');
  }

  return (
    <div className="container" style={{ marginBottom: '20px' }}>
      <BackButton />

      {loading && (
        <div className="row justify-content-center">
          <LoadingSpinner />
        </div>
      )}
      {cause && (
        <div className="row">
          <div className="col-lg-6" style={{ marginBottom: '30px' }}>
            <CauseImage image={cause.image} />
          </div>

          <div className="col-lg-6" style={{ marginBottom: '30px' }}>
            <CauseInfo data={cause} />

            <div className="row">
              <div className="col-12">
                <CauseTitleSection>
                  <FormattedMessage {...messages.actions} />
                </CauseTitleSection>
              </div>
              <div className="col-6">
                <CauseImage image={cause.banners[0] || '/images/no-picture.png'} />
              </div>
              <div className="col-6">
                <CauseImage image={cause.banners[1] || '/images/no-picture.png'} />
              </div>
            </div>
          </div>

          <div className="col-12">
            {cause.confirmed && (
              <CauseFeature>
                <div className="CauseFeature__icon" style={{ color: colors.asset.info }}>
                  <FaCheckCircle />
                </div>
                <div className="CauseFeature__content">
                  <p className="CauseFeature__title" style={{ color: colors.asset.info }}><FormattedMessage {...messages.info.verified} /></p>
                </div>
              </CauseFeature>
            )}

            <CauseFeature>
              <div className="CauseFeature__icon">
                <FaCalendarAlt />
              </div>
              <div className="CauseFeature__content">
                <p className="CauseFeature__title">
                  <FormattedMessage {...messages.info.register} /> <span style={{ color: colors.brand.dark }}>{moment(cause.createdAt).format('DD/MM/YYYY')}</span>
                </p>
              </div>
            </CauseFeature>

            <CauseFeature>
              <div className="CauseFeature__icon">
                <FaUser />
              </div>
              <div className="CauseFeature__content">
                <p className="CauseFeature__title"><FormattedMessage {...messages.info.owner} /> <span style={{ color: colors.brand.dark }}>{cause.user.name}</span></p>
              </div>
            </CauseFeature>

            <CauseFeature>
              <div className="CauseFeature__icon">
                <FaEnvelope />
              </div>
              <div className="CauseFeature__content">
                <p className="CauseFeature__title"><FormattedMessage {...messages.info.contact} /> <span style={{ color: colors.brand.dark }}>{cause.user.email}</span></p>
              </div>
            </CauseFeature>

            {cause.description.length > 0 && (
              <CauseFeature className="CauseFeature--has-description">
                <div className="CauseFeature__icon">
                  <FaPager />
                </div>
                <div className="CauseFeature__content">
                  <p className="CauseFeature__title"><FormattedMessage {...messages.info.description} /></p>
                  <p className="CauseFeature__description">{cause.description}</p>
                </div>
              </CauseFeature>
            )}
          </div>

          <div className="col-12" style={{ marginTop: '20px' }}>
            <FormButton
              type="button"
              theme="secondary"
              value={intl.formatMessage(messages.give)}
              onClick={handleDonate}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cause;
