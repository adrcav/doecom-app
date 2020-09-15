import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useIntl, FormattedMessage } from 'react-intl';
import messages from './messages';

import { AuthContext } from '../../services/auth';
import { useStateValue } from '../../services/state';

import NotificationIcon from '../../components/NotificationIcon';
import FormButton from '../../components/FormButton';

const ServiceError = () => {
  const intl = useIntl();
  const history = useHistory();
  const auth = useContext(AuthContext);
  const [, dispatch] = useStateValue();

  const handleLogout = () => {
    auth.logout();

    dispatch({
      type: 'updateAccount',
      value: {}
    });

    history.push('/');
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-xl-5">
          <NotificationIcon
            theme="danger"
            icon="FaExclamation"
          />

          <p style={{
            color: '#666666',
            textAlign: 'center',
            marginBottom: '40px',
            padding: '0 15px'
          }}>
            <FormattedMessage {...messages.text} />
          </p>

          {auth.isAuthenticated() ? (
            <FormButton
              type="button"
              theme="primary"
              value={intl.formatMessage(messages.goToLogin)}
              onClick={handleLogout}
            />
          ) : (
            <FormButton
              type="button"
              theme="primary"
              value={intl.formatMessage(messages.goToHome)}
              onClick={() => history.push('/')}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceError;
