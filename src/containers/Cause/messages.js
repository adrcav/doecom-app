import { defineMessage } from 'react-intl';

const messages = {
  actions: {
    id: 'cause.actions',
    defaultMessage: 'Acts taken by the cause'
  },

  info: {
    register: {
      id: 'cause.info.register',
      defaultMessage: 'Added at:'
    },
    owner: {
      id: 'cause.info.owner',
      defaultMessage: 'Manager:'
    },
    contact: {
      id: 'cause.info.contact',
      defaultMessage: 'Contact:'
    },
    description: {
      id: 'cause.info.description',
      defaultMessage: 'Resume:'
    },
  },

  give: {
    id: 'cause.give',
    defaultMessage: 'GIVE NOW'
  },

  alerts: {
    notFound: {
      id: 'cause.alerts.notFound',
      defaultMessage: 'Cause not found!'
    },
  },
};

export default defineMessage(messages);
