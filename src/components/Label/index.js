import React from 'react';

import { Container } from './styles';

const Label = (props) => (
  <Container {...props}>
    {props.value}
  </Container>
);

export default Label;
