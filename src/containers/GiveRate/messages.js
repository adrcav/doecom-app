import { defineMessage } from 'react-intl';

const messages = {
  title: {
    id: 'giveRate.title',
    defaultMessage: 'Donation'
  },

  donationDate: {
    id: 'giveRate.donationDate',
    defaultMessage: 'Donation made on %DONATION_DATE% at %DONATION_TIME%'
  },

  emailLabel: {
    id: 'giveRate.emailLabel',
    defaultMessage: 'Email:'
  },
  emailDescription: {
    id: 'giveRate.emailDescription',
    defaultMessage: 'Type your email'
  },
  emailIsRequired: {
    id: 'giveRate.emailIsRequired',
    defaultMessage: 'Email is required'
  },
  confirmedDonationLabel: {
    id: 'giveRate.confirmedDonationLabel',
    defaultMessage: 'The donation has been confirmed?'
  },
  confirmedDonationIsRequired: {
    id: 'giveRate.confirmedDonationIsRequired',
    defaultMessage: 'This question is required'
  },
  experienceLabel: {
    id: 'giveRate.experienceLabel',
    defaultMessage: 'How was your experience with Doecom?'
  },
  experienceIsRequired: {
    id: 'giveRate.experienceIsRequired',
    defaultMessage: 'This question is required'
  },

  confirmedDonation: {
    yes: {
      id: 'giveRate.confirmedDonation.yes',
      defaultMessage: 'Yes'
    },
    not: {
      id: 'giveRate.confirmedDonation.not',
      defaultMessage: 'Not'
    },
  },

  experience: {
    terrible: {
      id: 'giveRate.experience.terrible',
      defaultMessage: 'Terrible'
    },
    bad: {
      id: 'giveRate.experience.bad',
      defaultMessage: 'Bad'
    },
    regular: {
      id: 'giveRate.experience.regular',
      defaultMessage: 'Regular'
    },
    good: {
      id: 'giveRate.experience.good',
      defaultMessage: 'Good'
    },
    great: {
      id: 'giveRate.experience.great',
      defaultMessage: 'Great'
    },
  },

  buttonSubmit: {
    id: 'giveRate.buttonSubmit',
    defaultMessage: 'Send Rating'
  },
};

export default defineMessage(messages);
