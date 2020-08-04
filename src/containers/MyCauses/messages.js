import { defineMessage } from 'react-intl';

const messages = {
  title: {
    id: 'myCauses.title',
    defaultMessage: 'My causes'
  },

  addYourCause: {
    id: 'myCauses.addYourCause',
    defaultMessage: 'Add your cause'
  },

  error: {
    id: 'myCauses.error',
    defaultMessage: 'Unable to find your volunteer causes. Please try again later.'
  },

  empty: {
    id: 'myCauses.empty',
    defaultMessage: 'Sorry we could not find any volunteer causes.'
  },
};

export default defineMessage(messages);
