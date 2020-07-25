import React from 'react';
import * as FontAwesome from 'react-icons/fa';

import { Container } from './styles';

const FormRadioCard = ({
  text,
  value,
  icon,
  name,
  required = false
}) => {
  const Icon = FontAwesome[icon] || FontAwesome['FaArrowUp'];
  return (
    <Container>
      <input
        type="radio"
        name={name}
        id={`${name}_${value}`}
        value={value}
        required={required}
      />
      <label htmlFor={`${name}_${value}`}>
        <div className="icon">
          <Icon />
        </div>
        <p>{text}</p>

        <div className="check">
          <FontAwesome.FaCheck />
        </div>
      </label>
    </Container>
  );
};

export default FormRadioCard;
