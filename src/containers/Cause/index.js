import React from 'react';
import { useHistory } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaPager } from 'react-icons/fa';
import { useIntl, FormattedMessage } from 'react-intl';
import messages from './messages';

import { CauseImage, CauseTitleSection, CauseFeature } from './styles';

import BackButton from '../../components/BackButton';
import FormButton from '../../components/FormButton';
import CauseInfo from '../../components/CauseInfo';

import { causes as dataCauses } from '../../util/data';

const Cause = ({ match }) => {
  const intl = useIntl();
  const history = useHistory();
  const { id } = match.params;

  const cause = dataCauses.filter(cause => cause._id === id)[0] || null;

  const handleDonate = () => history.push(`/give/${cause._id}`);;

  return (
    <div className="container" style={{ marginBottom: '20px' }}>
      <BackButton />

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
            {cause.banners.map(banner => (
              <div key={banner._id} className="col-6">
                <CauseImage image={banner.image} />
              </div>
            ))}
          </div>
        </div>

        <div className="col-12">
          <CauseFeature>
            <div className="CauseFeature__icon">
              <FaCalendarAlt />
            </div>
            <div className="CauseFeature__content">
              <p className="CauseFeature__title">Cadastrada em 28/07/2020</p>
            </div>
          </CauseFeature>

          <CauseFeature>
            <div className="CauseFeature__icon">
              <FaUser />
            </div>
            <div className="CauseFeature__content">
              <p className="CauseFeature__title">Responsável: <span>José da Silva</span></p>
            </div>
          </CauseFeature>

          <CauseFeature className="CauseFeature--has-description">
            <div className="CauseFeature__icon">
              <FaPager />
            </div>
            <div className="CauseFeature__content">
              <p className="CauseFeature__title">Informações:</p>
              <p className="CauseFeature__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </CauseFeature>
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
    </div>
  );
};

export default Cause;
