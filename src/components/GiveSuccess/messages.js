import { defineMessage } from 'react-intl';

const messages = {
  backButton: {
    id: 'giveSuccess.backButton',
    defaultMessage: 'Go to Home'
  },

  title: {
    id: 'giveSuccess.title',
    defaultMessage: 'Donation started!'
  },
  description: {
    id: 'giveSuccess.description',
    defaultMessage: 'You have been successfully redirected to cause payment link! Continue to donation and share your experience.'
  },
  mainButton: {
    id: 'giveSuccess.mainButton',
    defaultMessage: 'Rate your donation'
  },
};

export default defineMessage(messages);
