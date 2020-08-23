import React, { useState, useContext, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAxios from 'axios-hooks';
import { FaMapMarkerAlt } from 'react-icons/fa';
import ContentLoader from 'react-content-loader';
import { useIntl, FormattedMessage } from 'react-intl';
import messages from './messages';

import Button from '../../components/Button';
import CauseCard from '../../components/CauseCard';
import ActionRequiresLogin from '../../components/ActionRequiresLogin';

import { AuthContext } from '../../services/auth';
import { useStateValue } from '../../services/state';

const Main = () => {
  const intl = useIntl();
  const history = useHistory();
  const auth = useContext(AuthContext);
  const [showLoginOrRegister, setShowLoginOrRegister] = useState(false);
  const [causes, setCauses] = useState([]);
  const [{ locale }] = useStateValue();

  const [{ loading, error }, getCauses] = useAxios({
    url: '/causes'
  }, { manual: true });

  useEffect(() => {
    (async function () {
      if (locale) {
        const params = {};

        if (locale.region && locale.city) {
          params.state = locale.region;
          params.city = locale.city;
        }

        const { data } = await getCauses({ params });
        setCauses(data);
      }
    })();
  }, [locale, getCauses]);

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
          <FaMapMarkerAlt
            style={{ marginRight: '4px' }}
          />
          <p style={{ margin: 0, fontWeight: '500' }}>
            {!locale && (
              <ContentLoader
                speed={2}
                width={100}
                height={18}
                viewBox="0 0 100 18"
                backgroundColor="#eaeced"
                foregroundColor="#f5f5f5"
              >
                <rect x="0" y="0" rx="4" ry="4" width="100" height="80" />
              </ContentLoader>
            )}
            {locale && locale.city && (
              <span>{locale.city}/{locale.region}</span>
            )}
            {locale && !locale.city && (
              <span>Todas as causas</span>
            )}
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

      {loading || !locale ? (
        <div className="row" style={{ marginTop: '20px' }}>
          <div className="col-lg-6 col-xl-4" style={{ marginBottom: '20px' }}>
            <CauseCard loading={true} />
          </div>
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
