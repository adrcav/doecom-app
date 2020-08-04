import React from 'react';
import * as FontAwesome from 'react-icons/fa';
import classNames from 'classnames';
import CurrencyInput from 'react-currency-masked-input';

import { InputGroup } from './styles';
import Label from '../Label';

const Input = React.forwardRef((props, ref) => {
  let Icon;

  if (props.icon) {
    Icon = FontAwesome[props.icon] || FontAwesome['FaAddressCard'];
  }

  return (
    <div className="d-flex flex-column-reverse">
      <InputGroup className={classNames({
        'has-icon': props.icon,
        'input--error': props.error
      })}>
        {props.maskType === 'currency' ? (
          <CurrencyInput separator="," {...props} />
        ) : props.type === 'textarea' ? (
          <textarea {...props} ref={ref} />
        ) : (
          <input {...props} ref={ref} />
        )}

        {props.icon && (
          <div className="icon">
            <Icon />
          </div>
        )}
      </InputGroup>
      {props.label && (
        <Label value={props.label} />
      )}
    </div>
  );
});

export default Input;
