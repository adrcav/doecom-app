import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useIntl, FormattedMessage } from 'react-intl';
import messages from './messages';

import { AuthContext } from '../../services/auth';
import { useStateValue } from '../../services/state';

import BackButton from '../../components/BackButton';
import NotificationIcon from '../../components/NotificationIcon';
import Title from '../../components/Title';
import FormButton from '../../components/FormButton';

const Logout = () => {
  const intl = useIntl();
  const history = useHistory();
  const auth = useContext(AuthContext);
  const [, dispatch] = useStateValue();

  useEffect(() => {
    if (!auth.isAuthenticated()) {
      history.push('/');
    }
  });

  const handleLogout = () => {
    auth.logout();

    dispatch({
      type: 'updateAccount',
      value: {}
    });

    history.push('/');
  };

  return (
    <div className="container mb-4">
      <BackButton />

      <div className="row justify-content-center">
        <div className="col-lg-6 col-xl-5">
          <NotificationIcon theme="danger" icon="FaSignOutAlt" />
          <Title value={intl.formatMessage(messages.title)} align="center" />

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
            theme="danger"
            value={intl.formatMessage(messages.mainButton)}
            onClick={handleLogout}
          />
        </div>
      </div>
    </div>
  );
};

export default Logout;
