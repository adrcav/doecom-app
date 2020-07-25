import { defineMessage } from 'react-intl';

const messages = {
  title: {
    id: 'logout.title',
    defaultMessage: 'Logout your account'
  },

  description: {
    id: 'logout.description',
    defaultMessage: 'Are you sure you want to sign out from your Doecom account?'
  },

  mainButton: {
    id: 'logout.mainButton',
    defaultMessage: 'Yes, logout'
  },
};

export default defineMessage(messages);
