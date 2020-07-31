import { defineMessage } from 'react-intl';

const messages = {
  title: {
    id: 'resetPassword.title',
    defaultMessage: 'Reset password'
  },

  passwordLabel: {
    id: 'resetPassword.passwordLabel',
    defaultMessage: 'Password'
  },
  confirmPasswordLabel: {
    id: 'resetPassword.confirmPasswordLabel',
    defaultMessage: 'Password'
  },
  passwordIsRequired: {
    id: 'resetPassword.passwordIsRequired',
    defaultMessage: 'Password is required'
  },

  passwordsDontMatch: {
    id: 'resetPassword.passwordsDontMatch',
    defaultMessage: 'Passwords don\'t match'
  },

  buttonSubmit: {
    id: 'resetPassword.buttonSubmit',
    defaultMessage: 'Update password'
  },

  alerts: {
    success: {
      id: 'resetPassword.alerts.success',
      defaultMessage: 'Password successfully updated!'
    },
  },
};

export default defineMessage(messages);
