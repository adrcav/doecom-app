import React from 'react';
import * as FontAwesome from 'react-icons/fa';

import { Container } from './styles';

const FormRadioCard = React.forwardRef(({
  text,
  value,
  icon,
  emoji = null,
  name,
  required = false,
  defaultValue = null,
}, ref) => {
  const Icon = FontAwesome[icon] || FontAwesome['FaArrowUp'];
  return (
    <Container>
      <input
        type="radio"
        name={name}
        id={`${name}_${value}`}
        value={value}
        defaultChecked={defaultValue === value}
        ref={ref}
      />
      <label htmlFor={`${name}_${value}`}>
        <div className="icon">
          {emoji ? emoji : <Icon />}
        </div>
        <p>{text}</p>

        <div className="check">
          <FontAwesome.FaCheck />
        </div>
      </label>
    </Container>
  );
});

export default FormRadioCard;
