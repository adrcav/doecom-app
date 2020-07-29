import React, { useState, useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAxios from 'axios-hooks';
import { useIntl, FormattedMessage } from 'react-intl';
import messages from './messages';

import { LoadingSpinner } from '../../components/styles';
import Button from '../../components/Button';
import CauseCard from '../../components/CauseCard';
import ActionRequiresLogin from '../../components/ActionRequiresLogin';

import { AuthContext } from '../../services/auth';

const Main = () => {
  const intl = useIntl();
  const history = useHistory();
  const auth = useContext(AuthContext);
  const [showLoginOrRegister, setShowLoginOrRegister] = useState(false);

  const [{ loading, error, data: causes }] = useAxios({
    url: '/causes'
  });

  const handleAddCause = () => {
    if (auth.isAuthenticated()) {
      history.push(`/cause/new`);
    }

    setShowLoginOrRegister(true);
  };

  return (
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-6 d-flex align-items-center">
          <p style={{ margin: 0, fontWeight: '500' }}>
            <FormattedMessage {...messages.suggestions} />
          </p>
        </div>
        <div className="col-6 d-flex justify-content-end">
          <Button
            theme="primary"
            icon="FaPlus"
            value={intl.formatMessage(messages.addYourCause)}
            onClick={handleAddCause}
          />
        </div>
      </div>

      {loading ? (
        <div className="row justify-content-center" style={{ marginTop: '20px' }}>
          <LoadingSpinner />
        </div>
      ) : (
        <div className="row" style={{ marginTop: '20px' }}>
          {error && (
            <div className="col-12">
              <p style={{ color: '#555' }}>
                <span role="img" aria-label="Sad emoji" style={{ marginRight: '5px' }}>😓</span>
                <FormattedMessage {...messages.error} />
              </p>
            </div>
          )}
          {causes && !causes.length && (
            <div className="col-12">
              <p style={{ color: '#555' }}>
                <span role="img" aria-label="Sad emoji" style={{ marginRight: '5px' }}>☹️</span>
                <FormattedMessage {...messages.empty} />
              </p>
            </div>
          )}
          {causes && causes.map(cause => (
          <div key={cause._id} className="col-lg-6 col-xl-4" style={{ marginBottom: '20px' }}>
              <NavLink to={`/cause/${cause._id}`} title={cause.title}>
                <CauseCard data={cause} />
              </NavLink>
          </div>
          ))}
        </div>
      )}

      <ActionRequiresLogin
        show={showLoginOrRegister}
        onClose={() => setShowLoginOrRegister(!showLoginOrRegister)}
      />
    </div>
  );
};

export default Main;
