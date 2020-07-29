import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import useAxios from 'axios-hooks';

import { LoadingSpinner } from '../../components/styles';
import BackButton from '../../components/BackButton';
import Title from '../../components/Title';
import MyCause from '../../components/MyCause';

import { AuthContext } from '../../services/auth';

const MyCauses = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);

  const [{ loading, error, data: causes }] = useAxios({
    url: '/my-causes'
  });

  if (!auth.isAuthenticated()) {
    history.push('/');
  }

  return (
    <div className="container">
      <BackButton />
      <Title value="Minhas causas" />

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
                Não foi possível buscar suas causas voluntárias. Por favor, tente novamente mais tarde.
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
