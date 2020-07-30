import { defineMessage } from 'react-intl';

const messages = {
  verifyLoading: {
    id: 'verify.verifyLoading',
    defaultMessage: 'Verifying account...'
  },

  verified: {
    id: 'verify.verified',
    defaultMessage: 'Account verified!'
  },

  errorOcurred: {
    id: 'verify.errorOcurred',
    defaultMessage: 'An error ocurred!'
  },

  loginButton: {
    id: 'verify.loginButton',
    defaultMessage: 'Go to Login'
  },
};

export default defineMessage(messages);
