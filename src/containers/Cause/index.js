import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useIntl, FormattedMessage } from 'react-intl';
import messages from './messages';

import { CauseImage, CauseTitleSection } from './styles';

import BackButton from '../../components/BackButton';
import FormButton from '../../components/FormButton';
import CauseInfo from '../../components/CauseInfo';
import ActionRequiresLogin from '../../components/ActionRequiresLogin';

import { AuthContext } from '../../services/auth';
import { causes as dataCauses } from '../../util/data';

const Cause = ({ match }) => {
  const intl = useIntl();
  const history = useHistory();
  const auth = useContext(AuthContext);
  const { id } = match.params;
  const [showLoginOrRegister, setShowLoginOrRegister] = useState(false);

  const cause = dataCauses.filter(cause => cause._id === id)[0] || null;

  const handleDonate = () => {
    if (auth.isAuthenticated()) {
      history.push(`/give/${cause._id}`);
    }

    setShowLoginOrRegister(true);
  };

  return (
    <div className="container" style={{ marginBottom: '20px' }}>
      <BackButton />

      <div className="row">
        <div className="col-lg-6" style={{ marginBottom: '30px' }}>
          <CauseImage image={cause.image} />
        </div>

        <div className="col-lg-6">
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

        <div className="col-12" style={{ marginTop: '20px' }}>
          <FormButton
            type="button"
            theme="secondary"
            value={intl.formatMessage(messages.give)}
            onClick={handleDonate}
          />
        </div>
      </div>

      <ActionRequiresLogin
        show={showLoginOrRegister}
        onClose={() => setShowLoginOrRegister(!showLoginOrRegister)}
      />
    </div>
  );
};

export default Cause;
