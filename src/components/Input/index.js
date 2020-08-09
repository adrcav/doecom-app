import React from 'react';
import * as FontAwesome from 'react-icons/fa';
import classNames from 'classnames';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

import { InputGroup } from './styles';
import Label from '../Label';

const Input = React.forwardRef((props, ref) => {
  let Icon;

  if (props.icon) {
    Icon = FontAwesome[props.icon] || FontAwesome['FaAddressCard'];
  }

  const defaultMaskOptions = {
    prefix: 'R$ ',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: '.',
    allowDecimal: true,
    decimalSymbol: ',',
    decimalLimit: 2, // how many digits allowed after the decimal
    integerLimit: 7, // limit length of integer numbers
    allowNegative: false,
    allowLeadingZeroes: false,
  }

  const currencyMask = createNumberMask(defaultMaskOptions);

  return (
    <div className="d-flex flex-column-reverse">
      <InputGroup className={classNames({
        'has-icon': props.icon,
        'input--error': props.error
      })}>
        {props.maskType === 'currency' ? (
          <MaskedInput
            mask={currencyMask}
            type={props.type}
            name={props.name}
            className={props.className}
            placeholder={props.placeholder}
            defaultValue={props.defaultValue || null}
            ref={ref}
            onChange={(event) => props.handleChange ? props.handleChange(event.target.value) : null}
          />
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
        <Label value={props.label} help={props.help || null} />
      )}
    </div>
  );
});

export default Input;
