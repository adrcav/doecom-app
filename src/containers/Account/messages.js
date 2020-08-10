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

  recommended: {
    id: 'account.recommended',
    defaultMessage: 'Recommended:'
  },

  pictureLabel: {
    id: 'account.pictureLabel',
    defaultMessage: 'Profile picture:'
  },
  nameLabel: {
    id: 'account.nameLabel',
    defaultMessage: 'Name:'
  },
  nameDescription: {
    id: 'account.nameDescription',
    defaultMessage: 'Type your full name'
  },
  nameIsRequired: {
    id: 'account.nameIsRequired',
    defaultMessage: 'Name is required'
  },
  emailLabel: {
    id: 'account.emailLabel',
    defaultMessage: 'Email:'
  },
  emailDescription: {
    id: 'account.emailDescription',
    defaultMessage: 'Type your email'
  },
  emailIsRequired: {
    id: 'account.emailIsRequired',
    defaultMessage: 'Email is required'
  },
  stateLabel: {
    id: 'account.stateLabel',
    defaultMessage: 'State:'
  },
  stateDescription: {
    id: 'account.stateDescription',
    defaultMessage: 'Select'
  },
  stateIsRequired: {
    id: 'account.stateIsRequired',
    defaultMessage: 'State is required'
  },
  cityLabel: {
    id: 'account.cityLabel',
    defaultMessage: 'City:'
  },
  cityDescription: {
    id: 'account.cityDescription',
    defaultMessage: 'Your city'
  },
  cityIsRequired: {
    id: 'account.cityIsRequired',
    defaultMessage: 'City is required'
  },
  passwordLabel: {
    id: 'account.passwordLabel',
    defaultMessage: 'Update password:'
  },
  confirmPasswordLabel: {
    id: 'account.confirmPasswordLabel',
    defaultMessage: 'Confirm password:'
  },
  passwordIsRequired: {
    id: 'account.passwordIsRequired',
    defaultMessage: 'Password is required'
  },
  passwordsDontMatch: {
    id: 'account.passwordsDontMatch',
    defaultMessage: 'Password don\'t match'
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
