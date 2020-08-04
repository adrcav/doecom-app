import React from 'react';
import * as FontAwesome from 'react-icons/fa';
import classNames from 'classnames';

import { Container } from './styles';

const Button = ({
  type = 'button',
  theme = 'primary',
  icon = null,
  value,
  disabled = false,
  loading = false,
  onClick
}) => {
  const Icon = FontAwesome[icon] || FontAwesome['FaExternalLinkSquareAlt'];

  return (
    <Container
      type={type}
      className={classNames('btn', theme, {
        'Container--has-loading': loading
      })}
      disabled={disabled || loading}
      onClick={onClick || null}
    >
      {icon && (
        <div className="icon">
          <Icon />
        </div>
      )}
      <p>{value}</p>
      <div className="Container__spinner"></div>
    </Container>
  );
};

export default Button;
