import { defineMessage } from 'react-intl';

const messages = {
  title: {
    id: 'recoverPassword.title',
    defaultMessage: 'Recover password'
  },

  emailLabel: {
    id: 'recoverPassword.emailLabel',
    defaultMessage: 'Email'
  },
  emailDescription: {
    id: 'recoverPassword.emailDescription',
    defaultMessage: 'Type your email'
  },
  emailIsRequired: {
    id: 'recoverPassword.emailIsRequired',
    defaultMessage: 'Email is required'
  },
  buttonSubmit: {
    id: 'recoverPassword.buttonSubmit',
    defaultMessage: 'Continue'
  },

  alerts: {
    sent: {
      title: {
        id: 'recoverPassword.sent.title',
        defaultMessage: 'Recover password sent!'
      },
      description: {
        id: 'recoverPassword.sent.description',
        defaultMessage: 'Check your email inbox to reset your password.'
      },
    },
  },
};

export default defineMessage(messages);
