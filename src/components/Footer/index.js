import React from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import { Container } from './styles';

const { REACT_APP_HELP_URL } = process.env;

const Footer = () => (
  <div className="container">
    <hr />
    <Container>
      <p>&copy; {moment().format('YYYY')} Doecom</p>
      <ul>
        <li>
          <a href={REACT_APP_HELP_URL} target="_blank" rel="noopener noreferrer">
            <p>
              <FormattedMessage {...messages.help} />
            </p>
          </a>
        </li>
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
