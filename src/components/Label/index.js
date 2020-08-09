import React from 'react';

import { Container } from './styles';

const Label = (props) => (
  <Container {...props} className={props.error ? 'error' : ''}>
    {props.value}
    {props.help && (
      <span className="Container__help">({props.help})</span>
    )}
  </Container>
);

export default Label;
