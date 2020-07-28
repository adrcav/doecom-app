import React, { useState, useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useIntl, FormattedMessage } from 'react-intl';
import messages from './messages';

import Button from '../../components/Button';
import CauseCard from '../../components/CauseCard';
import ActionRequiresLogin from '../../components/ActionRequiresLogin';

import { causes as dataCauses } from '../../util/data';
import { AuthContext } from '../../services/auth';

const Main = () => {
  const intl = useIntl();
  const history = useHistory();
  const auth = useContext(AuthContext);
  const causes = dataCauses;
  const [showLoginOrRegister, setShowLoginOrRegister] = useState(false);

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

      <div className="row" style={{ marginTop: '20px' }}>
        {!causes.length && (
          <div className="col-12">
            <p style={{ color: '#555' }}>
              <span role="img" aria-label="Sad emoji">☹️</span>
              Infelizmente não encontramos nenhuma causa para sua região.
            </p>
          </div>
        )}
        {causes.map(cause => (
        <div key={cause._id} className="col-lg-6 col-xl-4" style={{ marginBottom: '20px' }}>
            <NavLink to={`/cause/${cause._id}`} title={cause.title}>
              <CauseCard data={cause} />
            </NavLink>
        </div>
        ))}
      </div>

      <ActionRequiresLogin
        show={showLoginOrRegister}
        onClose={() => setShowLoginOrRegister(!showLoginOrRegister)}
      />
    </div>
  );
};

export default Main;
