import { defineMessage } from 'react-intl';

const messages = {
  terms: {
    title: {
      id: 'register.terms.title',
      defaultMessage: 'Let\'s set up your account on Doecom'
    },
    description: {
      id: 'register.terms.description',
      defaultMessage: 'Please agree this terms to create an account:'
    },
    buttonSubmit: {
      id: 'register.terms.buttonSubmit',
      defaultMessage: 'Continue'
    },
  },

  form: {
    title: {
      id: 'register.form.title',
      defaultMessage: 'Create a New Account'
    },
    fieldRequired: {
      id: 'register.form.fieldRequired',
      defaultMessage: 'Field required'
    },
    nameLabel: {
      id: 'register.form.nameLabel',
      defaultMessage: 'Name:'
    },
    nameDescription: {
      id: 'register.form.nameDescription',
      defaultMessage: 'Type your full name'
    },
    emailLabel: {
      id: 'register.form.emailLabel',
      defaultMessage: 'Email:'
    },
    emailDescription: {
      id: 'register.form.emailDescription',
      defaultMessage: 'Type your email'
    },
    stateLabel: {
      id: 'register.form.stateLabel',
      defaultMessage: 'State:'
    },
    stateDescription: {
      id: 'register.form.stateDescription',
      defaultMessage: 'Select'
    },
    cityLabel: {
      id: 'register.form.cityLabel',
      defaultMessage: 'City:'
    },
    cityDescription: {
      id: 'register.form.cityDescription',
      defaultMessage: 'Your city'
    },
    passwordLabel: {
      id: 'register.form.passwordLabel',
      defaultMessage: 'Password:'
    },
    passwordDescription: {
      id: 'register.form.passwordDescription',
      defaultMessage: 'Type your password'
    },
    buttonSubmit: {
      id: 'register.form.buttonSubmit',
      defaultMessage: 'Continue'
    },
  },
};

export default defineMessage(messages);
