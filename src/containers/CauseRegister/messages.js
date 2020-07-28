import { defineMessage } from 'react-intl';

const messages = {
  title: {
    id: 'causeRegister.title',
    defaultMessage: 'Add cause'
  },

  form: {
    fieldRequired: {
      id: 'causeRegister.form.fieldRequired',
      defaultMessage: 'Field required'
    },
    nameLabel: {
      id: 'causeRegister.form.nameLabel',
      defaultMessage: 'Name:'
    },
    nameDescription: {
      id: 'causeRegister.form.nameDescription',
      defaultMessage: 'Type cause\'s name'
    },
    pictureLabel: {
      id: 'causeRegister.form.pictureLabel',
      defaultMessage: 'Picture:'
    },
    pictureDescription: {
      id: 'causeRegister.form.pictureDescription',
      defaultMessage: 'Type main picture'
    },
    resumeLabel: {
      id: 'causeRegister.form.resumeLabel',
      defaultMessage: 'Resume:'
    },
    resumeDescription: {
      id: 'causeRegister.form.resumeDescription',
      defaultMessage: 'Type cause resume'
    },
    stateLabel: {
      id: 'causeRegister.form.stateLabel',
      defaultMessage: 'State:'
    },
    stateDescription: {
      id: 'causeRegister.form.stateDescription',
      defaultMessage: 'Select'
    },
    cityLabel: {
      id: 'causeRegister.form.cityLabel',
      defaultMessage: 'City:'
    },
    cityDescription: {
      id: 'causeRegister.form.cityDescription',
      defaultMessage: 'Your city'
    },
    urlDonationLabel: {
      id: 'causeRegister.form.urlDonationLabel',
      defaultMessage: 'URL Donation:'
    },
    urlDonationDescription: {
      id: 'causeRegister.form.urlDonationDescription',
      defaultMessage: 'Type URL to donation'
    },
    buttonSubmit: {
      id: 'causeRegister.form.buttonSubmit',
      defaultMessage: 'Register'
    },
  },
};

export default defineMessage(messages);
