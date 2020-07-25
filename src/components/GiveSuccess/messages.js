import { defineMessage } from 'react-intl';

const messages = {
  backButton: {
    id: 'giveSuccess.backButton',
    defaultMessage: 'Go to Home'
  },

  title: {
    id: 'giveSuccess.title',
    defaultMessage: 'Donation confirmed!'
  },
  description: {
    id: 'giveSuccess.description',
    defaultMessage: 'Payment successfully confirmed! The amount will be sent directly to selected volunteer cause.'
  },
  mainButton: {
    id: 'giveSuccess.mainButton',
    defaultMessage: 'Back to Home'
  },
};

export default defineMessage(messages);
