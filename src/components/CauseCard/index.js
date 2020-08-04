import React from 'react';

import { Container } from './styles';

const CauseCard = ({ data }) => (
  <Container image={data.image}>
    <div className="cause-data">
      <div className="cause-avatar" style={{ backgroundImage: `url('${data.avatar}')` }}></div>
      <p className="cause-name">{data.name}</p>
    </div>
  </Container>
);

export default CauseCard;
