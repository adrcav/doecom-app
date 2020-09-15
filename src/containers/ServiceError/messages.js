import { defineMessage } from 'react-intl';

const messages = {
  text: {
    id: 'serviceError.text',
    defaultMessage: 'An error ocurred while connecting to Doecom servers.'
  },

  goToHome: {
    id: 'serviceError.goToHome',
    defaultMessage: 'Go to Home'
  },

  goToLogin: {
    id: 'serviceError.goToLogin',
    defaultMessage: 'Go to Login'
  },
};

export default defineMessage(messages);
