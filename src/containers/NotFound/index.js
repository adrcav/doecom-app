import React from 'react';
import { useHistory } from 'react-router-dom';
import { useIntl, FormattedMessage } from 'react-intl';
import messages from './messages';

import NotificationIcon from '../../components/NotificationIcon';
import BackButton from '../../components/BackButton';
import Title from '../../components/Title';
import FormButton from '../../components/FormButton';

const NotFound = () => {
  const intl = useIntl();
  const history = useHistory();

  return (
    <div className="container" style={{ marginBottom: '20px' }}>
      <BackButton />

      <Title value="Oops!" align="center" />

      <div className="row justify-content-center mt-3">
        <div className="col-lg-6 col-xl-5">
          <NotificationIcon theme="danger" icon="FaRegFrown" />

          <p style={{
            color: '#666666',
            textAlign: 'center',
            marginBottom: '40px',
            padding: '0 15px'
          }}>
            <FormattedMessage {...messages.text} />
          </p>

          <FormButton
            type="button"
            theme="primary"
            value={intl.formatMessage(messages.goToHome)}
            onClick={() => history.push('/')}
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
