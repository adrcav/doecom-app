import { defineMessage } from 'react-intl';

const messages = {
  text: {
    id: 'notFound.text',
    defaultMessage: 'The page you are looking for might have been removed had its name changed or is temporarily unavailable.'
  },

  goToHome: {
    id: 'notFound.goToHome',
    defaultMessage: 'Go to Homepage'
  },
};

export default defineMessage(messages);
