import React from 'react';
import { useHistory } from 'react-router-dom';
import { useIntl, FormattedMessage } from 'react-intl';
import messages from './messages';

import BackButton from '../BackButton';
import NotificationIcon from '../NotificationIcon';
import Title from '../Title';
import FormButton from '../FormButton';

const RegisterSuccess = () => {
  const intl = useIntl();
  const history = useHistory();

  return (
    <div className="container" style={{ marginBottom: '20px' }}>
      <BackButton value={intl.formatMessage(messages.backButton)} url="/" />

      <Title value={intl.formatMessage(messages.title)} align="center" />

      <div className="row justify-content-center mt-3">
        <div className="col-lg-6 col-xl-5">
          <NotificationIcon theme="secondary" icon="FaUserCheck" />

          <p style={{
            color: '#666666',
            textAlign: 'center',
            marginBottom: '40px',
            padding: '0 15px'
          }}>
            <FormattedMessage {...messages.description} />
          </p>

          <FormButton
            type="button"
            theme="primary"
            value={intl.formatMessage(messages.mainButton)}
            onClick={() => history.push('/login')}
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterSuccess;
