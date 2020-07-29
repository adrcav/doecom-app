import { defineMessage } from 'react-intl';

const messages = {
  actions: {
    id: 'cause.actions',
    defaultMessage: 'Acts taken by the cause'
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
