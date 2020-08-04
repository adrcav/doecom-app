import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import useAxios from 'axios-hooks';
import { useIntl, FormattedMessage } from 'react-intl';
import messages from './messages';

import { LoadingSpinner } from '../../components/styles';
import BackButton from '../../components/BackButton';
import Title from '../../components/Title';
import MyCause from '../../components/MyCause';
import Button from '../../components/Button';

import { AuthContext } from '../../services/auth';

const MyCauses = () => {
  const intl = useIntl();
  const history = useHistory();
  const auth = useContext(AuthContext);

  const [{ loading, error, data: causes }] = useAxios({
    url: '/causes/my-causes'
  });

  if (!auth.isAuthenticated()) {
    history.push('/');
  }

  return (
    <div className="container">
      <BackButton />

      <div className="row justify-content-between align-items-center">
        <div className="col-sm-6">
          <Title value={intl.formatMessage(messages.title)} />
        </div>
        <div className="col-sm-6 d-flex justify-content-end align-items-center" style={{ marginBottom: '20px', marginTop: '-5px' }}>
          <Button
            theme="primary"
            icon="FaPlus"
            value={intl.formatMessage(messages.addYourCause)}
            onClick={() => history.push('/cause/new')}
          />
        </div>
      </div>

      {loading ? (
        <div className="row justify-content-center">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="row">
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
                <span role="img" aria-label="Sad emoji" style={{ marginRight: '5px' }}>🙁</span>
                <FormattedMessage {...messages.empty} />
              </p>
            </div>
          )}
          {causes && causes.map(cause => (
            <div key={cause._id} className="col-12">
              <MyCause data={cause} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyCauses;
