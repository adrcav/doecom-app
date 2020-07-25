import React from 'react';

import { Container } from './styles';

const Title = ({ value, align = 'left' }) => (
  <Container style={{ textAlign: align }}>
    {value}
  </Container>
);

export default Title;
