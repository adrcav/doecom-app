import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

import { Container } from './styles';
import VerifiedBadge from '../VerifiedBadge';

const CauseInfo = ({ data }) => (
  <Container>
    <div className="cause-avatar" style={{ backgroundImage: `url(${data.avatar})` }}></div>
    <div className="cause-account">
      <h2 title={data.name} className="d-flex align-items-center">
        {data.name}
        {data.confirmed && (
          <VerifiedBadge />
        )}
      </h2>
      <p>
        <FaMapMarkerAlt style={{ marginRight: '4px' }} />
        <span>{data.city}</span> - <span>{data.state}</span>
      </p>
    </div>
  </Container>
);

export default CauseInfo;
