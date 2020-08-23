import React from 'react';
import classNames from 'classnames';

import { InputGroup, Container } from './styles';
import Label from '../Label';

const Select = React.forwardRef((props, ref) => {
  return (
    <div className="d-flex flex-column-reverse">
      <InputGroup className={classNames({ 'input--error': props.error })}>
        <div className={classNames('InputGroup__loading', {
          'InputGroup__loading--show': props.loadingOptions
        })}>
          <div className="InputGroup__spinner"></div>
        </div>

        <Container
          {...props}
          className={classNames({ 'input--error': props.error })}
          ref={ref}
        >
          <option value="">{props.placeholderValue || 'Selecione'}</option>
          {props.options.map(option => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.text}
            </option>
          ))}
        </Container>
      </InputGroup>
      {props.label && (
        <Label value={props.label} />
      )}
    </div>
  );
});

export default Select;
