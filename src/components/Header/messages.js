import { defineMessage } from 'react-intl';

const messages = {
  menu: {
    causes: {
      id: 'menu.causes',
      defaultMessage: 'Home'
    },
    myCauses: {
      id: 'menu.myCauses',
      defaultMessage: 'My causes'
    },
    settings: {
      id: 'menu.settings',
      defaultMessage: 'Settings'
    },
    logout: {
      id: 'menu.logout',
      defaultMessage: 'Logout'
    },
  },

  login: {
    id: 'header.login',
    defaultMessage: 'Log In'
  },
  or: {
    id: 'header.or',
    defaultMessage: 'or'
  },
  signUp: {
    id: 'header.signUp',
    defaultMessage: 'Sign Up'
  },
};

export default defineMessage(messages);
