import { defineMessage } from 'react-intl';

const messages = {
  title: {
    id: 'account.title',
    defaultMessage: 'Settings'
  },

  fieldRequired: {
    id: 'account.fieldRequired',
    defaultMessage: 'Field required'
  },

  nameLabel: {
    id: 'account.nameLabel',
    defaultMessage: 'Name:'
  },
  nameDescription: {
    id: 'account.nameDescription',
    defaultMessage: 'Type your full name'
  },
  emailLabel: {
    id: 'account.emailLabel',
    defaultMessage: 'Email:'
  },
  emailDescription: {
    id: 'account.emailDescription',
    defaultMessage: 'Type your email'
  },
  stateLabel: {
    id: 'account.stateLabel',
    defaultMessage: 'State:'
  },
  stateDescription: {
    id: 'account.stateDescription',
    defaultMessage: 'Select'
  },
  cityLabel: {
    id: 'account.cityLabel',
    defaultMessage: 'City:'
  },
  cityDescription: {
    id: 'account.cityDescription',
    defaultMessage: 'Your city'
  },
  buttonSubmit: {
    id: 'account.buttonSubmit',
    defaultMessage: 'Save'
  },

  alerts: {
    updated: {
      id: 'app.alerts.account.updated',
      defaultMessage: 'Account successfully updated!'
    },
  },
};

export default defineMessage(messages);
