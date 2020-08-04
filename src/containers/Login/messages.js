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
  emailIsRequired: {
    id: 'login.emailIsRequired',
    defaultMessage: 'Email is required'
  },
  passwordLabel: {
    id: 'login.passwordLabel',
    defaultMessage: 'Password'
  },
  passwordDescription: {
    id: 'login.passwordDescription',
    defaultMessage: 'Type your password'
  },
  passwordIsRequired: {
    id: 'login.passwordIsRequired',
    defaultMessage: 'Password is required'
  },
  buttonSubmit: {
    id: 'login.buttonSubmit',
    defaultMessage: 'Continue'
  },

  forgotPassword: {
    id: 'login.forgotPassword',
    defaultMessage: 'Forgot your password?'
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
