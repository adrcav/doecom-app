import { defineMessage } from 'react-intl';

const messages = {
  title: {
    id: 'login.title',
    defaultMessage: 'Login'
  },

  emailLabel: {
    id: 'login.emailLabel',
    defaultMessage: 'Email'
  },
  emailDescription: {
    id: 'login.emailDescription',
    defaultMessage: 'Type your email'
  },
  passwordLabel: {
    id: 'login.passwordLabel',
    defaultMessage: 'Password'
  },
  passwordDescription: {
    id: 'login.passwordDescription',
    defaultMessage: 'Type your password'
  },
  buttonSubmit: {
    id: 'login.buttonSubmit',
    defaultMessage: 'Continue'
  },

  noAccount: {
    question: {
      id: 'login.noAccount.question',
      defaultMessage: 'Don\'t have an account?'
    },
    signUp: {
      id: 'login.noAccount.signUp',
      defaultMessage: 'Sign Up!'
    },
  },
};

export default defineMessage(messages);
