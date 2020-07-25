import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

import { Container } from './styles';

const CauseInfo = ({ data }) => (
  <Container>
    <div className="cause-avatar" style={{ backgroundImage: `url(${data.account.avatar})` }}></div>
    <div className="cause-account">
      <h2>{data.account.name}</h2>
      <p>
        <FaMapMarkerAlt style={{ marginRight: '4px' }} />
        <span>{data.city}</span> - <span>{data.state}</span>
      </p>
    </div>
  </Container>
);

export default CauseInfo;
