import { defineMessage } from 'react-intl';

const messages = {
  suggestions: {
    id: 'causes.suggestions',
    defaultMessage: 'Suggestions for you'
  },

  regionUnavailable: {
    id: 'app.alerts.regionUnavailable',
    defaultMessage: 'Only Petrolina/PE city is available in this moment.'
  },

  addYourCause: {
    id: 'causes.addYourCause',
    defaultMessage: 'Add your cause'
  },

  error: {
    id: 'causes.error',
    defaultMessage: 'Unable to find volunteer causes. Please try again later.'
  },

  empty: {
    id: 'causes.empty',
    defaultMessage: 'Sorry we could not find any volunteer causes.'
  },
};

export default defineMessage(messages);
