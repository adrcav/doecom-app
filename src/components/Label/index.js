import React from 'react';

import { Container } from './styles';

const Label = (props) => (
  <Container {...props} className={props.error ? 'error' : ''}>
    {props.value}
  </Container>
);

export default Label;
