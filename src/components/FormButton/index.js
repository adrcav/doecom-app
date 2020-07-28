import React from 'react';
import classNames from 'classnames';

import { Container } from './styles';

const Button = ({
  type = 'button',
  theme = 'primary',
  value,
  disabled = false,
  loading = false,
  onClick
}) => (
  <Container
    type={type}
    className={classNames(`btn ${theme}`, {
      'Container--has-loading': loading
    })}
    disabled={disabled || loading}
    onClick={onClick || null}
  >
    <div className="Container__spinner"></div>
    <span>{value}</span>
  </Container>
);

export default Button;
