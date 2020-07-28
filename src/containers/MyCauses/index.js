import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import BackButton from '../../components/BackButton';
import Title from '../../components/Title';
import MyCause from '../../components/MyCause';

import { causes as dataCauses } from '../../util/data';
import { AuthContext } from '../../services/auth';

const MyCauses = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const causes = dataCauses;

  if (!auth.isAuthenticated()) {
    history.push('/');
  }

  return (
    <div className="container">
      <BackButton />
      <Title value="Minhas causas" />

      <div className="row">
        {causes.map(cause => (
          <div key={cause._id} className="col-12">
            <MyCause data={cause} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCauses;
