import React from 'react';

import { Container } from './styles';
import VerifiedBadge from '../VerifiedBadge';

const CauseCard = ({ data }) => (
  <Container image={data.image}>
    <div className="cause-data">
      <div className="cause-avatar" style={{ backgroundImage: `url('${data.avatar}')` }}></div>
      <p className="cause-name">
        {data.name}
        {data.confirmed && (
          <VerifiedBadge />
        )}
      </p>
    </div>
  </Container>
);

export default CauseCard;
