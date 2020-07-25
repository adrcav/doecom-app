import React from 'react';
import classNames from 'classnames';

import { Container } from './styles';

const Button = ({
  type = 'button',
  theme = 'primary',
  value,
  disabled = false,
  onClick
}) => (
  <Container
    type={type}
    className={classNames('btn', theme)}
    disabled={disabled}
    onClick={onClick || null}
  >
    {value}
  </Container>
);

export default Button;
