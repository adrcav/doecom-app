import { defineMessage } from 'react-intl';

const messages = {
  title: {
    id: 'myCause.title',
    defaultMessage: 'Add cause'
  },

  preview: {
    id: 'myCause.preview',
    defaultMessage: 'Preview'
  },

  edit: {
    title: {
      id: 'myCause.edit.title',
      defaultMessage: 'Edit cause'
    },

    removeButton: {
      id: 'myCause.edit.removeButton',
      defaultMessage: 'Remove cause'
    },

    alertRemove: {
      title: {
        id: 'myCause.edit.alertRemove.title',
        defaultMessage: 'Are you sure?'
      },
      description: {
        id: 'myCause.edit.alertRemove.description',
        defaultMessage: 'Are you sure you want to permanently remove this link?'
      },
      cancelButton: {
        id: 'myCause.edit.alertRemove.cancelButton',
        defaultMessage: 'Cancel'
      },
      confirmButton: {
        id: 'myCause.edit.alertRemove.confirmButton',
        defaultMessage: 'Yes, remove it'
      },
    },
  },

  form: {
    fieldRequired: {
      id: 'myCause.form.fieldRequired',
      defaultMessage: 'Field required'
    },
    recommended: {
      id: 'myCause.form.recommended',
      defaultMessage: 'Recommended:'
    },
    nameLabel: {
      id: 'myCause.form.nameLabel',
      defaultMessage: 'Name:'
    },
    nameDescription: {
      id: 'myCause.form.nameDescription',
      defaultMessage: 'Type cause\'s name'
    },
    nameIsRequired: {
      id: 'myCause.form.nameIsRequired',
      defaultMessage: 'Name is required'
    },
    avatarLabel: {
      id: 'myCause.form.avatarLabel',
      defaultMessage: 'Avatar:'
    },
    avatarDescription: {
      id: 'myCause.form.avatarDescription',
      defaultMessage: 'Type cause avatar'
    },
    avatarIsRequired: {
      id: 'myCause.form.avatarIsRequired',
      defaultMessage: 'Avatar is required'
    },
    titleLabel: {
      id: 'myCause.form.titleLabel',
      defaultMessage: 'Title:'
    },
    titleDescription: {
      id: 'myCause.form.titleDescription',
      defaultMessage: 'Type cause title'
    },
    resumeLabel: {
      id: 'myCause.form.resumeLabel',
      defaultMessage: 'Resume:'
    },
    resumeDescription: {
      id: 'myCause.form.resumeDescription',
      defaultMessage: 'Type cause resume'
    },
    imageLabel: {
      id: 'myCause.form.imageLabel',
      defaultMessage: 'Banner:'
    },
    imageDescription: {
      id: 'myCause.form.imageDescription',
      defaultMessage: 'Type main banner'
    },
    imageIsRequired: {
      id: 'myCause.form.imageIsRequired',
      defaultMessage: 'Image is required'
    },
    actsLabel: {
      id: 'myCause.form.actsLabel',
      defaultMessage: 'Acts:'
    },
    stateLabel: {
      id: 'myCause.form.stateLabel',
      defaultMessage: 'State:'
    },
    stateDescription: {
      id: 'myCause.form.stateDescription',
      defaultMessage: 'Select'
    },
    stateIsRequired: {
      id: 'myCause.form.stateIsRequired',
      defaultMessage: 'State is required'
    },
    cityLabel: {
      id: 'myCause.form.cityLabel',
      defaultMessage: 'City:'
    },
    cityDescription: {
      id: 'myCause.form.cityDescription',
      defaultMessage: 'Your city'
    },
    cityIsRequired: {
      id: 'myCause.form.cityIsRequired',
      defaultMessage: 'City is required'
    },
    paymentUrlLabel: {
      id: 'myCause.form.paymentUrlLabel',
      defaultMessage: 'URL Donation:'
    },
    paymentUrlDescription: {
      id: 'myCause.form.paymentUrlDescription',
      defaultMessage: 'Type URL to donation'
    },
    paymentUrlIsRequired: {
      id: 'myCause.form.paymentUrlIsRequired',
      defaultMessage: 'URL Donation is required'
    },
    paymentUrlHelp: {
      id: 'myCause.form.paymentUrlHelp',
      defaultMessage: 'Help'
    },
    buttonSubmit: {
      id: 'myCause.form.buttonSubmit',
      defaultMessage: 'Save'
    },
  },

  errors: {
    accountNotVerified: {
      id: 'myCause.errors.accountNotVerified',
      defaultMessage: 'Check your email inbox and active your account to continue.'
    },
  },

  alerts: {
    created: {
      id: 'app.alerts.myCause.created',
      defaultMessage: 'Cause successfully created!'
    },
    updated: {
      id: 'app.alerts.myCause.updated',
      defaultMessage: 'Cause successfully updated!'
    },
    removed: {
      id: 'app.alerts.myCause.removed',
      defaultMessage: 'Cause successfully removed!'
    },
  },
};

export default defineMessage(messages);
