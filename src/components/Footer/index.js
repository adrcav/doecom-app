import React from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import { Container } from './styles';

const Footer = () => (
  <div className="container">
    <hr />
    <Container>
      <p>&copy; {moment().format('YYYY')} Doecom</p>
      <ul>
        <li>
          <NavLink to="/privacy-policy">
            <p>
              <FormattedMessage {...messages.privacyPolicy} />
            </p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/terms-of-use">
            <p>
              <FormattedMessage {...messages.terms} />
            </p>
          </NavLink>
        </li>
      </ul>
    </Container>
  </div>
);

export default Footer;
