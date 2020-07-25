import { defineMessage } from 'react-intl';

const messages = {
  backButton: {
    id: 'registerSuccess.backButton',
    defaultMessage: 'Go to Home'
  },

  title: {
    id: 'registerSuccess.title',
    defaultMessage: 'Congratulations!'
  },
  description: {
    id: 'registerSuccess.description',
    defaultMessage: 'You have been successfully registered. Now that you are registered, you can log in to your account and start gives.'
  },
  mainButton: {
    id: 'registerSuccess.mainButton',
    defaultMessage: 'Log In your account'
  },
};

export default defineMessage(messages);
