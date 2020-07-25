import React, { useState, useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import classNames from 'classnames';
import { useIntl, FormattedMessage } from 'react-intl';
import messages from './messages';

import { AuthContext } from '../../services/auth';

import {
  Container,
  Logo,
  Account,
  HeaderWrapper
} from './styles';

import Menu from '../Menu';

const Header = ({ userInfo }) => {
  const intl = useIntl();
  const history = useHistory();
  const auth = useContext(AuthContext);
  const [showMenu, setShowMenu] = useState(false);

  const menuList = [
    {
      title: intl.formatMessage(messages.menu.causes),
      icon: 'FaBuilding',
      url: '/',
      exact: true,
    },
    {
      title: intl.formatMessage(messages.menu.settings),
      icon: 'FaUser',
      url: '/account',
      exact: true,
      private: true,
    },
    {
      title: intl.formatMessage(messages.menu.logout),
      icon: 'FaSignOutAlt',
      url: '/logout',
      exact: true,
      private: true,
    },
  ];

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  }

  return (
    <>
      <Container>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <NavLink to="/" onClick={handleCloseMenu}>
              <Logo src="/logo.png" alt="Doecom" />
            </NavLink>

            <nav>
              <Menu landscape="horizontal" data={menuList} />
              <Account>
                {!auth.isAuthenticated() && (
                  <p>
                    <strong onClick={() => history.push('/login', { redirectUrl: history.location.pathname })}><FormattedMessage {...messages.login} /></strong> <FormattedMessage {...messages.or} /><br />
                    <strong onClick={() => history.push('/register')}><FormattedMessage {...messages.signUp} /></strong>
                  </p>
                )}
                {auth.isAuthenticated() && (
                  <p style={{ display: 'none' }}>
                    Olá,<br />
                    <strong>{userInfo.name ? userInfo.name.split(' ')[0] : ''}</strong>
                  </p>
                )}
                <img
                  src={userInfo.avatar || '/no-avatar.png'}
                  alt={userInfo.name || 'Sem avatar'}
                  onClick={handleMenuClick}
                />
                <div
                  className={classNames('button-menu-expand', {
                    'rotate': showMenu
                  })}
                  onClick={handleMenuClick}
                >
                  <FaChevronDown />
                </div>
              </Account>
            </nav>
          </div>
        </div>
      </Container>
      <Menu
        landscape="vertical"
        data={menuList}
        show={showMenu}
        onClickVertical={handleCloseMenu}
      />
      <HeaderWrapper
        className={classNames({ 'show': showMenu })}
        onClick={handleCloseMenu}
      />
    </>
  );
};

export default Header;
