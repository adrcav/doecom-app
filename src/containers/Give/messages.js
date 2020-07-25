import { defineMessage } from 'react-intl';

const messages = {
  title: {
    id: 'give.title',
    defaultMessage: 'Donation'
  },

  fieldRequired: {
    id: 'give.fieldRequired',
    defaultMessage: 'Field required'
  },

  amountLabel: {
    id: 'give.amountLabel',
    defaultMessage: 'Amount:'
  },
  amountDescription: {
    id: 'give.amountDescription',
    defaultMessage: 'Type a amount'
  },
  methodLabel: {
    id: 'give.methodLabel',
    defaultMessage: 'Payment method:',
  },

  methods: {
    boleto: {
      id: 'give.methods.boleto',
      defaultMessage: 'Boleto'
    },
    creditCard: {
      id: 'give.methods.creditCard',
      defaultMessage: 'Credit card'
    },
  },

  info: {
    message: {
      id: 'give.infoMessage',
      defaultMessage: 'To continue the donation, you will be redirected to Pay Screen to confirm the payment.'
    },
    security: {
      id: 'give.infoSecurity',
      defaultMessage: 'Don\'t worry! It\'s completely safe service.'
    },
  },

  buttonSubmit: {
    id: 'give.buttonSubmit',
    defaultMessage: 'Continue'
  },
};

export default defineMessage(messages);
