import { defineMessage } from 'react-intl';

const messages = {
  title: {
    id: 'app.actionRequiresLogin.title',
    defaultMessage: 'Login with your account'
  },
  description: {
    id: 'app.actionRequiresLogin.description',
    defaultMessage: 'You must be logged in to continue this operation. Choose an option below:'
  },
  login: {
    id: 'app.actionRequiresLogin.login',
    defaultMessage: 'Log In'
  },
  signUp: {
    id: 'app.actionRequiresLogin.signUp',
    defaultMessage: 'Sign Up'
  },
};

export default defineMessage(messages);
