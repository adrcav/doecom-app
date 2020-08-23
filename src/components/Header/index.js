import React, { useState, useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import classNames from 'classnames';
import ContentLoader from 'react-content-loader';
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

const { REACT_APP_AVATAR_URL } = process.env;

const Header = ({ userInfo }) => {
  const intl = useIntl();
  const history = useHistory();
  const auth = useContext(AuthContext);
  const [showMenu, setShowMenu] = useState(false);

  const menuList = [
    {
      title: intl.formatMessage(messages.menu.causes),
      icon: 'FaHome',
      url: '/',
      exact: true,
    },
    {
      title: intl.formatMessage(messages.menu.myCauses),
      icon: 'FaList',
      url: '/my-causes',
      exact: true,
      private: true,
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

  const getAccountAvatar = (user) => {
    if (!user._id)
      return '/no-avatar.png';

    return user.picture.length ? user.picture : `${REACT_APP_AVATAR_URL}/?name=${user.name}&size=128&background=14163d&color=FFFFFF&bold=true`;
  };

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

                {auth.isAuthenticated() && !userInfo._id ? (
                  <ContentLoader
                    speed={2}
                    width={50}
                    height={50}
                    viewBox="0 0 50 50"
                    backgroundColor="#eaeced"
                    foregroundColor="#f5f5f5"
                  >
                    <circle cx="25" cy="25" r="25" />
                  </ContentLoader>
                ) : (
                  <img
                    src={getAccountAvatar(userInfo)}
                    alt={userInfo.name || 'Sem avatar'}
                    onClick={handleMenuClick}
                  />
                )}

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
