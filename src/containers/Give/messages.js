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

  emailLabel: {
    id: 'give.emailLabel',
    defaultMessage: 'Email:'
  },
  emailDescription: {
    id: 'give.emailDescription',
    defaultMessage: 'Type your email'
  },
  emailIsRequired: {
    id: 'give.emailIsRequired',
    defaultMessage: 'Email is required'
  },
  amountLabel: {
    id: 'give.amountLabel',
    defaultMessage: 'Amount:'
  },
  amountDescription: {
    id: 'give.amountDescription',
    defaultMessage: 'Type a amount'
  },
  amountIsRequired: {
    id: 'give.amountIsRequired',
    defaultMessage: 'Amount is required'
  },
  amountDefaultAlert: {
    id: 'give.amountDefaultAlert',
    defaultMessage: 'This amount was defined by the cause.'
  },
  methodLabel: {
    id: 'give.methodLabel',
    defaultMessage: 'Payment method:',
  },
  methodIsRequired: {
    id: 'give.methodIsRequired',
    defaultMessage: 'Payment Method is required'
  },
  methodDefaultAlert: {
    id: 'give.methodDefaultAlert',
    defaultMessage: 'This method was defined by the cause.'
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
