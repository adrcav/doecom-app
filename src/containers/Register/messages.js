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
      defaultMessage: 'Agree and continue'
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
    nameIsRequired: {
      id: 'register.form.nameIsRequired',
      defaultMessage: 'Name is required'
    },
    emailLabel: {
      id: 'register.form.emailLabel',
      defaultMessage: 'Email:'
    },
    emailDescription: {
      id: 'register.form.emailDescription',
      defaultMessage: 'Type your email'
    },
    emailIsRequired: {
      id: 'register.form.emailIsRequired',
      defaultMessage: 'Email is required'
    },
    stateLabel: {
      id: 'register.form.stateLabel',
      defaultMessage: 'State:'
    },
    stateDescription: {
      id: 'register.form.stateDescription',
      defaultMessage: 'Select'
    },
    stateIsRequired: {
      id: 'register.form.stateIsRequired',
      defaultMessage: 'State is required'
    },
    cityLabel: {
      id: 'register.form.cityLabel',
      defaultMessage: 'City:'
    },
    cityDescription: {
      id: 'register.form.cityDescription',
      defaultMessage: 'Your city'
    },
    cityIsRequired: {
      id: 'register.form.cityIsRequired',
      defaultMessage: 'City is required'
    },
    passwordLabel: {
      id: 'register.form.passwordLabel',
      defaultMessage: 'Password:'
    },
    passwordDescription: {
      id: 'register.form.passwordDescription',
      defaultMessage: 'Type your password'
    },
    confirmPasswordLabel: {
      id: 'register.form.confirmPasswordLabel',
      defaultMessage: 'Confirm password:'
    },
    confirmPasswordDescription: {
      id: 'register.form.confirmPasswordDescription',
      defaultMessage: 'Confirm your password'
    },
    passwordIsRequired: {
      id: 'register.form.passwordIsRequired',
      defaultMessage: 'Password is required'
    },
    passwordsDontMatch: {
      id: 'register.form.passwordsDontMatch',
      defaultMessage: 'Password don\'t match'
    },
    buttonSubmit: {
      id: 'register.form.buttonSubmit',
      defaultMessage: 'Continue'
    },
  },
};

export default defineMessage(messages);
