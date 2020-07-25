import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import classNames from 'classnames';
import { FaTimes } from 'react-icons/fa';
import { useIntl, FormattedMessage } from 'react-intl';
import messages from './messages';

import {
  Container,
  Modal,
  ModalHeader,
  ModalBody
} from './styles';

import Button from '../Button';

const ActionRequiresLogin = ({ show = false, onClose = null }) => {
  const intl = useIntl();
  const history = useHistory();

  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  return (
    <Container className={classNames({ 'show': show })} onClick={onClose}>
      <Modal className={classNames({ 'show': show })} onClick={handleModalClick}>
        <ModalHeader>
          <h2>
            <FormattedMessage {...messages.title} />
          </h2>
          <FaTimes style={{ fontSize: '1rem', cursor: 'pointer' }} onClick={onClose} />
        </ModalHeader>
        <ModalBody>
          <p>
            <FormattedMessage {...messages.description} />
          </p>

          <div className="d-flex justify-content-center" style={{ width: '100%', marginTop: '15px' }}>
            <NavLink
              to={{
                pathname: '/login',
                state: { redirectUrl: history.location.pathname }
              }}
              style={{ marginRight: '10px' }}
            >
              <Button theme="primary-outline" icon="FaSignInAlt" value={intl.formatMessage(messages.login)} />
            </NavLink>
            <NavLink to="/register">
              <Button theme="primary" icon="FaUserPlus" value={intl.formatMessage(messages.signUp)} />
            </NavLink>
          </div>
        </ModalBody>
      </Modal>
    </Container>
  );
};

export default ActionRequiresLogin;
