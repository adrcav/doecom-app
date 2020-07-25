import React from 'react';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useIntl, FormattedMessage } from 'react-intl';
import messages from './messages';

import Button from '../../components/Button';
import CauseCard from '../../components/CauseCard';

import { causes as dataCauses } from '../../util/data';

const Main = () => {
  const intl = useIntl();
  const causes = dataCauses;

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
            icon="FaLocationArrow"
            value="Petrolina/PE"
            onClick={() => toast.info(intl.formatMessage(messages.regionUnavailable))}
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
    </div>
  );
};

export default Main;
