import React from 'react';

import { InputGroup, Container } from './styles';
import Label from '../Label';

const Select = (props) => {
  return (
    <div className="d-flex flex-column-reverse">
      <InputGroup>
        <Container {...props}>
          <option value="">{props.placeholderValue || 'Selecione'}</option>
          {props.options.map(option => (
            <option key={option.value} value={option.value}>{option.text}</option>
          ))}
        </Container>
      </InputGroup>
      {props.label && (
        <Label value={props.label} />
      )}
    </div>
  );
};

export default Select;
